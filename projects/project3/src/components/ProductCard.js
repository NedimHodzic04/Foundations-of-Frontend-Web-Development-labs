import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';

export default function ProductCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345, mx:2 }} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="text" component={Link} to="/register">
          Order
        </Button>
      </CardActions>
    </Card>
  );
}
