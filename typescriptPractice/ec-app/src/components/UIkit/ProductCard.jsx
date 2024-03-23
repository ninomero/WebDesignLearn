import React from 'react'

// MUI Card
//https://mui.com/material-ui/react-card/

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({name, price}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div>
            {name}
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProductCard