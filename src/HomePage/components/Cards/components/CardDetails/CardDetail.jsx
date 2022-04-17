import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import { React, useState, useEffect }  from 'react';
import { getBreweryDataById } from './Data/index';

export const CardDetail = () => {
  const [ brewaryDetail, setBrewaryDetail ] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setBrewaryDetail(await getBreweryDataById(id));
    })();
  }, [id]);

  return (
    <Card style={{ width: '300px', height: '370px', margin: 'auto', marginTop: '200px' }}>
      <CardContent className="card-content" style={{height: '290px'}}>
      <Typography variant="subtitle1" gutterBottom component="div">
        {brewaryDetail && `Name: ${brewaryDetail.name}`}
      </Typography>        
      <Typography variant="subtitle1" gutterBottom component="div">
        {brewaryDetail && `Type: ${brewaryDetail.brewery_type}`}
      </Typography>        
      <Typography variant="subtitle1" gutterBottom component="div">
        {brewaryDetail && `Address: ${brewaryDetail.address}`}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        {brewaryDetail && `City: ${brewaryDetail.city}`}
      </Typography>        
      <Typography variant="subtitle1" gutterBottom component="div">
        {brewaryDetail && `Country: ${brewaryDetail.country}`}
      </Typography>        
      <Typography variant="subtitle1" gutterBottom component="div">
        {brewaryDetail && `Contact no: ${brewaryDetail.phone}`}
      </Typography>
      </CardContent>
      <CardActions className="card-actions" style={{height: '40px'}}>  
        <a href="/" className="link">Go back!</a>
      </CardActions>
    </Card>     
  );
}