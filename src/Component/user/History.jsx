import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Grid, Typography } from '@mui/material';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
const History = () => {
  return (
    <div>
        <Grid container>
            <Grid item xs={12} lg={12}>
                    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',mt:2}}>
                        <Box sx={{display:'flex',}}>
                            <ArrowBackIosIcon/>
                            <Typography sx={{fontWeight:700,fontSize:'20px'}}>History</Typography>
                        </Box>
                    <ShoppingBagTwoToneIcon style={{color:'#C7C7C7',height:'200px',width:'180px',marginTop:'100px'}}/>
                    <Typography sx={{fontWeight:400,fontSize:'30px'}}>No history yet</Typography>
                    <Typography  sx={{fontWeight:400,fontSize:'18px'}}>Hit the orange button down </Typography>
                         <Typography  sx={{fontWeight:400,fontSize:'18px'}}>
                         below to Create an order</Typography>
                         <Button variant='contained' sx={{backgroundColor:'#FE8C00',marginTop:'110px',borderRadius:'20px'}}>Start Ordering</Button>
                    </Box>

            </Grid>

        </Grid>
    </div>
  )
}

export default History