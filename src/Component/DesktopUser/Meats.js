import { Box, Button, Divider, Grid, LinearProgress, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from './SideBar'
import NavBar from './NavBar'
import AddIcon from '@mui/icons-material/Add';
import chicken from '../../Assets/Chicken image.png'
import Mutton from '../../Assets/Mutton.png'
import Eggs from '../../Assets/Egg.png'
import StarIcon from '@mui/icons-material/Star';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import fresh from '../../Assessts/freshcChicken.png'
import fullChicken from '../../Assessts/fullChicken.png'
import breast from '../../Assets/ChickenBreast.png'
import wings from '../../Assets/wings.png'
import leg from '../../Assets/leg.png'
import muttonLeg from '../../Assets/muttonLeg.png'
import boneless from '../../Assets/boneless.png'
import Liver from '../../Assets/MuttonLiver.png'
import ChoppedMutton from '../../Assets/ChoppedMutton.png'


const data = [
    { img: fresh, title: 'Fresh Chicken', type: 'Chicken', rating: '4.9', rate: 'Rs 280', rate1: '| Rs 240/kg', isSalesUp: true, sales: '1245', remaining: 1245 },
    { img: fullChicken, title: 'Full Chicken', type: 'Chicken', rating: '4.8', rate: 'Rs 580', rate1: '| Rs 540/kg', isSalesUp: false, sales: '945', remaining: 945 },
    { img: breast, title: 'Chicken Breast', type: 'Chicken', rating: '4.7', rate: 'Rs 150', rate1: '| Rs 120/kg', isSalesUp: true, sales: '1345', remaining: 345 },
    { img: wings, title: 'Chicken Wings', type: 'Chicken', rating: '4.6', rate: 'Rs 380', rate1: '| Rs 340/kg', isSalesUp: false, sales: '745', remaining: 245 },
    { img: leg, title: 'Chicken leg', type: 'Chicken', rating: '4.9', rate: 'Rs 280', rate1: '| Rs 240/kg', isSalesUp: true, sales: '1245', remaining: 1245 },
    { img: muttonLeg, title: 'Mutton leg', type: 'Mutton', rating: '4.8', rate: 'Rs 580', rate1: '| Rs 540/kg', isSalesUp: false, sales: '945', remaining: 945 },
    { img: boneless, title: 'Mutton Boneless', type: 'Mutton', rating: '4.7', rate: 'Rs 150', rate1: '| Rs 120/kg', isSalesUp: true, sales: '1345', remaining: 345 },
    { img: Liver, title: 'Mutton Liver', type: 'Mutton', rating: '4.6', rate: 'Rs 380', rate1: '| Rs 340/kg', isSalesUp: false, sales: '745', remaining: 245 },
    { img: ChoppedMutton, title: 'Chopped Mutton', type: 'Mutton', rating: '4.8', rate: 'Rs 580', rate1: '| Rs 540/kg', isSalesUp: false, sales: '945', remaining: 945 },
  ];


const Meats = () => {

    const [activeButton, setActiveButton] = useState('All'); // State to track active category

    const filteredData = activeButton === 'All' ? data : data.filter((item) => item.type === activeButton);

  return (
    <Grid container sx={{ height: '100vh',overflowX:"hidden"}}>
        <Grid item sx={{width: { xs: '0px', sm: '221.5px' },flexShrink: 0,}}>
            <Sidebar />
        </Grid>

        <Grid item sx={{flex: 1,width: { xs: 'calc(100% - 0px)', sm: 'calc(100% - 221.5px)' },display:"flex",flexDirection:"column"}}>
            <Box sx={{ flexShrink: 0 }}>
                <NavBar />
            </Box>

            <Box sx={{flex: 1,overflow: 'hidden',padding: 2,}}>
                <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row"}}}>
                    <Typography sx={{fontWeight:700,fontSize:"18px"}}>
                        Find by Category
                    </Typography>
                    <Box sx={{display:"flex",gap:2}}>
                        <Button variant='outlined' sx={{width:"100px",height:"40px",borderRadius:"4px",border:"1px solid #D7DBEC"}}>
                            <Typography sx={{fontWeight:400,fontSize:"12px",color:"#1E5EFF",textTransform:"none"}}>
                                Export
                            </Typography>
                        </Button>
                        <Button variant='contained' sx={{width:"180px",height:"40px",borderRadius:"4px",background:"#1E5EFF"}}>
                            <AddIcon/>
                            <Typography sx={{fontWeight:400,fontSize:"12px",color:"white",textTransform:"none"}}>
                                Add Meats
                            </Typography>
                        </Button>
                    </Box>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <Box sx={{display:"flex",justifyContent:"space-between",mt:2,gap:{xs:2,sm:8}}}>
                            <Button
                                onClick={() => setActiveButton('All')}
                                sx={{
                                    backgroundColor: activeButton === 'All' ? '#FE8C00' : 'transparent',
                                    color: activeButton === 'All' ? 'white' : 'black',
                                    width:"47px",height:"65px",borderRadius:"6.72px",padding:"6.72px",
                                }}
                                 >
                                <Typography sx={{width:"14px",height:"18px",display:"flex",alignItems:"center",justifyContent:"center",textTransform:"none",color: activeButton === 'All' ? "white" : "black",}}>
                                    All
                                </Typography>
                            </Button>
                            <Button
                                onClick={() => setActiveButton('Chicken')}
                                sx={{
                                    backgroundColor: activeButton === 'Chicken' ? '#FE8C00' : 'transparent',
                                    color: activeButton === 'Chicken' ? 'white' : 'black',
                                    display:"flex",
                                    flexDirection:"column",width:"47px",height:"65px",borderRadius:"6.72px",padding:"6.72px",
                                }}
                                >
                                <img src={chicken} alt='chicken' style={{marginTop:"10px"}}/>
                                <Typography sx={{height:"18px",display:"flex",alignItems:"center",justifyContent:"center",textTransform:"none",color: activeButton === 'Chicken' ? "white" : "black",mt:1,fontSize:"12px",fontWeight:400}}>
                                    Chicken
                                </Typography>
                            </Button>
                            <Button
                                onClick={() => setActiveButton('Mutton')}
                                sx={{
                                    backgroundColor: activeButton === 'Mutton' ? '#FE8C00' : 'transparent',
                                    color: activeButton === 'Mutton' ? 'white' : 'black',
                                    display:"flex",
                                    flexDirection:"column",width:"47px",height:"65px",borderRadius:"6.72px",padding:"6.72px",
                                }}
                                >
                                <img src={Mutton} alt='Mutton' style={{marginTop:"10px"}}/>
                                <Typography sx={{height:"18px",display:"flex",alignItems:"center",justifyContent:"center",textTransform:"none",color: activeButton === 'Mutton' ? "white" : "black",mt:1,fontSize:"12px",fontWeight:400}}>
                                    Mutton
                                </Typography>
                            </Button>
                            <Button
                                onClick={() => setActiveButton('Eggs')}
                                sx={{
                                    backgroundColor: activeButton === 'Eggs' ? '#FE8C00' : 'transparent',
                                    color: activeButton === 'Eggs' ? 'white' : 'black',
                                    display:"flex",
                                    flexDirection:"column",width:"47px",height:"65px",borderRadius:"6.72px",padding:"6.72px",
                                }}
                                >
                                <img src={Eggs} alt='Eggs' style={{marginTop:"10px"}}/>
                                <Typography sx={{height:"18px",display:"flex",alignItems:"center",justifyContent:"center",textTransform:"none",color: activeButton === 'Eggs' ? "white" : "black",mt:1,fontSize:"12px",fontWeight:400}}>
                                    Eggs
                                </Typography>
                            </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        {filteredData.map((datas, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                        height: "100%", // Ensures the box takes up the full height of the grid item
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        ml:{xs:1,sm:0}
                                    }}
                                >
                                    {/* Product Image */}
                                    <Box
                                        component="img"
                                        src={datas.img}
                                        alt={datas.title}
                                        sx={{
                                            width: "100%",
                                            height: "150px", // Constrain height
                                            objectFit: "cover", // Ensures the image scales properly
                                            borderRadius: "8px",
                                            mb: 2,
                                        }}
                                    />

                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: "16px",
                                            mt: 1,
                                        }}
                                    >
                                        {datas.title}
                                    </Typography>

                                    {/* Rating */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            mt: 1,
                                            alignItems: "center",
                                        }}
                                    >
                                        <StarIcon sx={{ width: "20px", height: "20px", color: "#FE8C00" }} />
                                        <Typography sx={{ fontWeight: 700, fontSize: "12px" }}>
                                            {datas.rating}
                                        </Typography>
                                    </Box>

                                    {/* Prices */}
                                    <Typography
                                        sx={{
                                            mt: 1,
                                            fontWeight: 600,
                                            fontSize: "10px",
                                            color: "#FE8C00",
                                        }}
                                    >
                                        <span style={{ textDecoration: "line-through", marginRight: "4px" }}>
                                            {datas.rate}
                                        </span>
                                        <span>{datas.rate1}</span>
                                    </Typography>

                                    {/* Sales Box */}
                                    <Box
                                        sx={{
                                            mt: 2,
                                            borderRadius: "8px",
                                            border: "0.75px solid #2323214D",
                                            p: 2,
                                        }}
                                    >
                                        {/* Sales */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                mb: 1,
                                            }}
                                        >
                                            <Typography sx={{ fontWeight: 400, fontSize: "14px", color: "#232321" }}>
                                                Sales
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                {datas.isSalesUp ? (
                                                    <ArrowUpwardIcon sx={{ color: "#FFA52F" }} />
                                                ) : (
                                                    <ArrowDownwardIcon sx={{ color: "red" }} />
                                                )}
                                                <Typography sx={{ fontWeight: 400, fontSize: "14px", color: "#232321" }}>
                                                    {datas.sales}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Divider sx={{ borderColor: "#2323214D" }} />

                                        {/* Remaining Products */}
                                        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                                            <Typography sx={{ fontWeight: 400, fontSize: "14px", color: "#232321" }}>
                                                Remaining Products
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={(datas.remaining / 2000) * 100} // Adjust as needed
                                                    sx={{
                                                        width: "80px",
                                                        height: "6px",
                                                        backgroundColor: "#E7E7E3",
                                                        "& .MuiLinearProgress-bar": { backgroundColor: "#FFA52F" },
                                                    }}
                                                />
                                                <Typography sx={{ fontWeight: 400, fontSize: "14px", color: "#232321" }}>
                                                    {datas.remaining}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Meats