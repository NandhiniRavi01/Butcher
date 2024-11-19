import React, { useState } from 'react';
import MeatImage from '../../Assets/image.png';
import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import chicken from '../../Assets/Chicken_image.png'
import Mutton from '../../Assets/Mutton.png'
import Eggs from '../../Assets/Egg.png'
import freshChicken from '../../Assets/fresh_chicken.png'
import fullChicken from '../../Assets/full_chicken.png'
import chickenBreast from '../../Assets/chicken_breast.png'
import chickenWings from  '../../Assets/chicken_wings.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AvatarImg from '../../Assets/Avatar.png'

const data=[
  {img:freshChicken,title:"Fresh Chicken",rating:"4.9",rate:"Rs 280",rate1:"| Rs 240/kg"},    
  {img:fullChicken,title:"Full Chicken",rating:"4.9",rate:"Rs 280",rate1:"| Rs 240/kg"},
  {img:chickenBreast,title:"Chicken Breast",rating:"4.9",rate:"Rs 280",rate1:"| Rs 240/kg"},
  {img:chickenWings,title:"Chicken wings",rating:"4.9",rate:"Rs 280",rate1:"| Rs 240/kg"},
  
]



const Home = () => {

  const [location, setLocation] = useState('Chennai');

  const handleLocationChange = (e) => {
    setLocation(e.target.value); // Update location when dropdown changes
  };

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex); // Set the clicked button as active
  };

  const [footerValue, setFooterValue] = useState(0);

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column",overflow:"hidden"}}>
      {/* Top Section */}
      <Box sx={{ position: "relative", width: "100%", height: "180px" }}>
        <img
          src={MeatImage}
          alt="Meat"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            position: "absolute",
            zIndex: 1,
          }}
        />
        <Box sx={{ position: "absolute", zIndex: 2, width: "100%", px: 2, mt: 2 }}>
          <FormControl
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              color: "white",
              minWidth: 100,
            }}
          >
            <Select
              value=""
              onChange={handleLocationChange}
              displayEmpty
              sx={{
                color: "white",
                backgroundColor: "transparent",
                boxShadow: "none",
                ".MuiSelect-icon": { color: "white" },
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSelect-select": {
                  fontSize: "12px",
                  color: "white",
                },
              }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                Your Location
              </MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Coimbatore">Coimbatore</MenuItem>
              <MenuItem value="Erode">Erode</MenuItem>
            </Select>
          </FormControl>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              mt:-1
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center",ml:1 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: "14px", color: "white" }} />
              <Typography sx={{ fontSize: "12px", fontWeight: 600, ml: 1, color: "white" }}>
                {location}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2,mr:4,mt:-4 }}>
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid #FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SearchIcon sx={{ color: "white" }} />
              </Box>
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid #FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NotificationsNoneOutlinedIcon sx={{ color: "white" }} />
              </Box>
            </Box>
          </Box>

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "22px",
              color: "white",
              mt: 2,
              ml:1
            }}
          >
            Provide the best<br />Meat for you
          </Typography>
        </Box>
      </Box>

      <Box sx={{ml:1,mt:2,display:"flex",flexDirection:"column"}}>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography sx={{ fontWeight: 600, fontSize: "16px",ml:2 }}>
            Find by Category
          </Typography>
          <Button variant='text' sx={{mr:2}}>
            <Typography sx={{textTransform:"none",fontSize:"14px",color:"#FE8C00",fontWeight:500}}>
              See All
            </Typography>
          </Button>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between",mt:2}}>
            <Button onClick={() => handleButtonClick(1)} variant='text' sx={{width:"47px",height:"65px",background: activeButton === 1 ? "#FE8C00" : "transparent",borderRadius:"6.72px",padding:"6.72px",ml:2}}>
                <Typography sx={{width:"14px",height:"18px",display:"flex",alignItems:"center",justifyContent:"center",textTransform:"none",color: activeButton === 1 ? "white" : "black",}}>
                  All
                </Typography>
            </Button>
            <Button onClick={() => handleButtonClick(2)} variant='text' sx={{width:"47px",height:"65px",background: activeButton === 2 ? "#FE8C00" : "transparent",borderRadius:"6.72px",padding:"6.72px",display:"flex",flexDirection:"column"}}>
                <img src={chicken} alt='chicken' style={{marginTop:"10px"}}/>
                <Typography sx={{height:"18px",display:"flex",alignItems:"center",justifyContent:"center",textTransform:"none",color: activeButton === 2 ? "white" : "black",mt:1,fontSize:"12px",fontWeight:400}}>
                  Chicken
                </Typography>
            </Button>
            <Button onClick={() => handleButtonClick(3)} variant='text' sx={{width:"47px",height:"65px",background: activeButton === 3 ? "#FE8C00" : "transparent",borderRadius:"6.72px",padding:"6.72px",display:"flex",flexDirection:"column"}}>
                <img src={Mutton} alt='Mutton' style={{marginTop:"10px"}}/>
                <Typography sx={{height:"18px",display:"flex",alignItems:"center",justifyContent:"center",textTransform:"none",color: activeButton === 3 ? "white" : "black",mt:1,fontSize:"12px",fontWeight:400}}>
                  Mutton
                </Typography>
            </Button>
            <Button onClick={() => handleButtonClick(4)} variant='text' sx={{width:"47px",height:"65px",background: activeButton === 4 ? "#FE8C00" : "transparent",borderRadius:"6.72px",padding:"6.72px",mr:2,display:"flex",flexDirection:"column"}}>
                <img src={Eggs} alt='Eggs' style={{marginTop:"10px"}}/>
                <Typography sx={{height:"18px",display:"flex",alignItems:"center",justifyContent:"center",textTransform:"none",color: activeButton === 4 ? "white" : "black",mt:1,fontSize:"12px",fontWeight:400}}>
                  Eggs
                </Typography>
            </Button>
        </Box>
        <Grid container spacing={2}>
          {data.map((meatData,index)=>(
            <Grid item xs={5.8} key={index} sx={{display:"flex",flexDirection:"column",mt:2}}>
              <Box sx={{ display: "flex", justifyContent: "space-around", position: "relative" }}>
                <img src={meatData.img} alt='course img' style={{ marginTop: "10px", width: "137px" ,height:"106px"}} />
                  <FavoriteBorderIcon sx={{ position: "relative", top: "20px", right: "40px", color: "red",width:"30px",height:"30px",borderRadius:"100px",background:"white",padding:"2px",display:"flex",alignItems:"center",justifyContent:"center" }} />
              </Box>
              <Typography sx={{display: "flex", justifyContent: "start", fontWeight:600,fontSize:"16px",color:"#101010",ml:2,mt:2}}>
                {meatData.title}
              </Typography>
              <Box sx={{display:"flex",mt:1, justifyContent: "start",ml:2 }}>
                <StarIcon style={{width:"16px",height:"16px",color:"#FE8C00"}}/>
                <Typography sx={{fontWeight:500,fontSize:"12px",color:"#101010",ml:0.5}}>
                  {meatData.rating}
                </Typography>
              </Box>
              <Typography sx={{display: "flex", justifyContent: "flex-start", mt: 1, fontWeight: 700, fontSize: "8px", color: "#FE8C00",ml:2}}>
                <span style={{ textDecoration: "line-through" }}>{meatData.rate}</span>
                <span>{meatData.rate1}</span>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <BottomNavigation value={footerValue}
        onChange={(event, newValue) => setFooterValue(newValue)}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          color: "",
          boxShadow: "linear-gradient(121.94deg, #FF6347 0%, #FF826C 100%)",
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          sx={{
            minWidth: 50, 
            padding: "0 8px", 
              color: "#BABDC1",
              "&.Mui-selected": {
                color: "#FF6347", 
              },
          }}
        />
        <BottomNavigationAction
          label="Orders"
          icon={<ListAltIcon />}
          sx={{
            minWidth: 50, 
            padding: "0 8px", 
              color: "#BABDC1",
              "&.Mui-selected": {
                color: "#FF6347", 
              },
          }}
        />
        <BottomNavigationAction
          label="Meat"
          icon={<OutdoorGrillIcon />}
          sx={{
            minWidth: 50, 
            padding: "0 8px", 
              color: "#BABDC1",
              "&.Mui-selected": {
                color: "#FF6347", 
              },
          }}
        />
        <BottomNavigationAction
          label="Notification"
          icon={<NotificationsIcon />}
          sx={{
            minWidth: 50, 
            padding: "0 8px", 
              color: "#BABDC1",
              "&.Mui-selected": {
                color: "#FF6347", 
              },
          }}
        />
        <BottomNavigationAction
          label="Avatar"
          icon={<Avatar alt="User" src={AvatarImg} />}
          sx={{
            minWidth: 50,
            padding: "0 8px",
            color: "#FE8C00",
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Home;
