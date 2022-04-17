import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './styles.css';

export const HomepageCard = (props) => {
  const {id, name, type, city } = props;
    
  return (
    <Card key={id} className="card">
      <CardContent  className="card-content">
      <Typography variant="subtitle1" gutterBottom component="div">
        {name}
      </Typography>        
      <Typography variant="subtitle1" gutterBottom component="div">
        {type}
      </Typography>        
      <Typography variant="subtitle1" gutterBottom component="div">
        {city}
      </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <a href={`/cardDetail/${id}`}  className="link">Detail</a>
      </CardActions>
    </Card>
  );
}