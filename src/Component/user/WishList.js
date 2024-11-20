import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Grid, Typography, IconButton, Paper, Avatar, Button } from '@mui/material';
import swipe from '../Assessts/swipe.png';
import img1 from '../Assessts/img1.png'

const WishList = () => {
  const [total, setTotal] = useState(1);

  // Cart items data as a JSON object within the same file
  const cartItemsData = [
    {
      "id": 1,
      "name": "Full Chicken",
      "description": "Delicious full chicken",
      "discount": "4% off",
      "image": img1,
      "price": 10.99
    },
    {
      "id": 2,
      "name": "Half Chicken",
      "description": "Tasty half chicken",
      "discount": "10% off",
      "image":img1,
      "price": 5.49
    }
  ];

  // Function to handle increase and decrease
  const handleIncrement = () => {
    setTotal(prevTotal => prevTotal + 1);
  };

  const handleDecrement = () => {
    if (total > 0) {
      setTotal(prevTotal => prevTotal - 1);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Header section with Arrow Button and Cart text */}
      <Grid container alignItems="center">
        <Grid item xs={2} sm={1} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
        <Grid item xs={8} sm={10} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ fontWeight: 700, fontSize: { xs: '18px', sm: '20px' } }}>
            WishList
          </Typography>
        </Grid>
        <Grid item xs={2} sm={1} />
      </Grid>

      {/* Image and text below the Cart */}
      <Grid 
        container 
        justifyContent="center" 
        alignItems="center" 
        sx={{ mt: 3 }} // Add margin at the top
      >
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={6} 
          sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textAlign: 'center', 
          }} 
        >
          <img 
            src={swipe} 
            alt="Swipe" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
          <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
            Swipe on an item to delete
          </Typography>
        </Grid>
      </Grid>

      {/* Mapping cart items */}
      {cartItemsData.map((item) => (
        <Grid 
          container 
          justifyContent="center" 
          sx={{ mt: 4 }} // Margin top for separation
          key={item.id}
        >
          <Grid item xs={12} sm={8} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper 
              sx={{ 
                width: '316px', 
                height: '84px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                boxShadow: 3, 
                textAlign: 'center',
                borderRadius:'10px'
              }}
            >
              <Avatar sx={{ width: 55, height: 55, ml: 2 }} src={item.image} 
  alt={item.name} >

</Avatar>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography sx={{ fontSize: '8px', fontFamily: 'lato', fontWeight: 700 }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: '8px', fontFamily: 'lato', fontWeight: 700 }}>
                  {item.description}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '8px', fontFamily: 'lato', fontWeight: 700 }}>
                {item.discount}
              </Typography>
              <Button sx={{
                  minWidth: '68px',
                  minHeight: '25px',
                  padding: 0,
                  border: 'none',
                  bgcolor: '#FF0000',
                  color: 'white',
                  borderRadius:'5px',
                  justifyContent:'space-evenly',
                  mr:2}}><Typography sx={{ fontSize: '10px', fontFamily: 'lato', fontWeight: 700 }}>Add</Typography>
                  <Typography>+</Typography>
                  </Button>
            </Paper>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default WishList;
