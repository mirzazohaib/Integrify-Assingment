import { HomepageCard } from "./components/Cards/HomepageCard"
import { React, useState, useEffect }  from 'react';
import { getBreweryData } from "./Data/Index";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

export const HomePage = () => {

    const [ data, setData ] = useState()
    const [query, setQuery] = useState("");

    useEffect(() => {
        (async () => {
          setData(await getBreweryData());
        })();
      }, []);

      const getFilteredItems = (query, items) => {
        if (!query) {
          return items;
        }
        return items.filter((song) => ((song.name).toLowerCase()).includes(query));
      };

      const filteredItems = getFilteredItems(query, data);
    return (
        <div className="background">
          <div className="searchDiv">
            <Paper
              onChange={(e) => setQuery(e.target.value)}
              component="form"
              className="paper"
            >
            
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Brewary Name"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            </Paper>
          </div>
          <div className="gridDiv">
          {query && query?.length > 0 ? filteredItems.map(brewary => (
            <HomepageCard key={brewary.id} id={brewary.id} name={brewary.name} type={brewary.brewery_type} city={brewary.city} />          
          )) : data && data.map(brewary => (
            <HomepageCard key={brewary.id} id={brewary.id} name={brewary.name} type={brewary.brewery_type} city={brewary.city} />          
          ))}
          </div>
        </div>
    )
}