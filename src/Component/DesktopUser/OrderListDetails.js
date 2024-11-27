import { Box, Breadcrumbs, Button, Card, FormControl, Grid,InputAdornment,MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SearchIcon from '@mui/icons-material/Search';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import  MasterCard from '../Assets/Frame_2609030.png'
import Checkbox from '@mui/material/Checkbox';
import chicken from '../../Assets/TableChicken'


const data={
  id:"#6743",
  status:"Pending",
  mastercard:"Master Card **** **** 6557",
  BusinessName: "Jane Cooper",
  phone:"+900 231 1212",
}

const addressData={
  name: "Jane Cooper",
  email: "janecooper@gmail.com",
  Phone: "+900 231 1212",
  shipping:"Next express",
  payment:"Paypal",
  status:"Pending",
  Address:"Santa Ana, illinois 85342 2345 Westheimer Rd. Block 9A"
}


const TableData=[
  {productimg:chicken,product:"Chicken 1kg",id:"#25421",quantity:"2",amount:"800.40"},
  {productimg:chicken,product:"Mutton 2kg",id:"#25421",quantity:"2",amount:"800.40"},
  {productimg:chicken,product:"Country Chicken 2kg",id:"#25421",quantity:"2",amount:"800.40"},
  {productimg:chicken,product:"Egg 12pice",id:"#25421",quantity:"2",amount:"800.40"},
]

const OrderListDetails = () => {


  const handleClick = (event) => {
    event.preventDefault();
    console.log('Breadcrumb clicked');
  };

  const [dropdownValue,setDroppdownvalue] = useState("");
  const [searchText,setSearchText]=useState();
  
  const handleDropdownChange=(event)=>{
    setDroppdownvalue(event.target.value)
  }

  const handleSearchChange=(event)=>{
    setSearchText(event.target.value)
  }

  const [dropdownStatusValue,setDropdownStatusvalue] = useState("");

  const handleStatusChange=(event)=>{
    setDropdownStatusvalue(event.target.value);
  }


  const [selectedItems, setSelectedItems] = useState([]);
  const taxpercantage =20;
  const discountpercentage=2;

  const handleCheckboxChange = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  // Ensure the subtotal is calculated as a number
  const subtotal = selectedItems.reduce(
    (sum, index) => sum + parseFloat(TableData[index].amount || 0),
    0
  );

  const tax = (subtotal * taxpercantage)/100; 
  const discount = (subtotal * discountpercentage)/100; 
  const total = subtotal + tax - discount;


  return (
    <Grid container sx={{ height: '100vh',overflowX:"hidden"}}>
      <Grid item sx={{width: { xs: '0px', sm: '221.5px' },flexShrink: 0,}}>
        <SideBar />
      </Grid>

    <Grid item sx={{flex: 1,width: { xs: 'calc(100% - 0px)', sm: 'calc(100% - 221.5px)' },display:"flex",flexDirection:"column"}}>
      <Box sx={{ flexShrink: 0 }}>
        <NavBar />
      </Box>

      <Box sx={{flex: 1,overflow: 'hidden',padding: 2,}}>
        <Grid container>
            <Grid item xs={12}>
              <Box sx={{display:"flex",flexDirection:"column"}}>
                        <Typography sx={{fontWeight:600,fontSize:"20px"}}>
                            Orders Details
                        </Typography>
                        <Breadcrumbs separator=">" sx={{
                            color:"#000000",
                            '& .MuiBreadcrumbs-separator': {
                            color: 'black',
                            fontSize: '1.1rem',
                            },
                        }} aria-label="breadcrumb">
                            <Link style={{fontWeight:400,fontSize:"14px",color:"#000000",textDecoration:"none"}} href="/" onClick={handleClick}>
                                Home
                            </Link>
                            <Link style={{fontWeight:400,fontSize:"14px",color:"#000000",textDecoration:"none"}} href="/orderList" onClick={handleClick}>
                                Order List
                            </Link>
                            <Typography style={{fontWeight:400,fontSize:"14px",color:"#000000",textDecoration:"none"}}>Order List Details</Typography>
                        </Breadcrumbs>
                    </Box>
              </Grid>
              <Grid item xs={12} sm={12}>
                    <Box sx={{display:"flex",flexDirection:"column",mt:4}}>
                      {/* {orderID and Search } */}
                        <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"nowrap"}}>
                            <Box sx={{display:"flex",gap:2,flexWrap:"nowrap",flexDirection:{xs:"column",sm:"row"}}}>
                            <FormControl 
                                sx={{ 
                                    minWidth: {sm:130,md:180}, 
                                    height: "40px", 
                                    borderRadius: "4px", 
                                    border: "1px solid #D9E1EC", 
                                    overflow: "hidden" // Ensure consistent appearance
                                }}
                                >
                                <Select
                                    value={dropdownValue}
                                    onChange={handleDropdownChange}
                                    displayEmpty
                                    renderValue={(selected) => (
                                    <span style={{ color: selected === "" ? "#A1A7C4" : "#000000" }}>
                                        {selected === "" ? "Order ID" : selected}
                                    </span>
                                    )}
                                    sx={{ 
                                    height: "100%", 
                                    borderRadius: "inherit", 
                                    '& .MuiSelect-select': {
                                        padding: "8px 12px" // Adjust padding for consistent appearance
                                    }
                                    }}
                                >
                                    <MenuItem value="option1">Option 1</MenuItem>
                                    <MenuItem value="option2">Option 2</MenuItem>
                                    <MenuItem value="option3">Option 3</MenuItem>
                                </Select>
                                </FormControl>

                                {/* Search Text Field */}
                                <TextField
                                placeholder="Search"
                                variant="outlined"
                                value={searchText}
                                onChange={handleSearchChange}
                                sx={{ 
                                    width: {sm:200,md:300}, 
                                    height: "40px", 
                                    borderRadius: "4px", 
                                    '& .MuiOutlinedInput-root': {
                                    height: "100%",
                                    borderRadius: "inherit",
                                    padding: "8px 12px", // Adjust padding for consistent appearance
                                    border: "1px solid #D9E1EC", // Ensure consistent border
                                    '&:hover fieldset': {
                                        borderColor: "#D9E1EC", // Ensure the same border color on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: "#D9E1EC", // Same border color when focused
                                    }
                                    },
                                }}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <SearchIcon sx={{ color: "#A1A7C4" }} />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                            </Box>
                            <Box sx={{display:"flex",gap:2,ml:1,mr:{xs:0,md:3}}}>
                                <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",borderRadius:"4px",border: "1px solid #D7DBEC"}}>
                                  <ModeEditOutlineOutlinedIcon style={{color:"#1E5EFF",width:"20px",height:"25px"}}/>
                                </Box>
                                <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",borderRadius:"4px",border: "1px solid #D7DBEC"}}>
                                  <DeleteOutlineIcon style={{color:"#1E5EFF",width:"20px",height:"25px"}}/>
                                </Box>
                            </Box>
                        </Box>
                        {/* {orderID and Status } */}
                        <Box sx={{display:"flex",gap:2,mt:4,}}>
                            <Typography sx={{fontWeight:700,fontSize:"18px"}}>
                                Orders ID:{data.id}
                            </Typography>
                            <Box sx={{width:"80px",height:"25px",borderRadius:"8px",background:"#FFA52FCC",display:"flex",justifyContent:"center",alignItems:"center",padding:1}}>
                                <Typography sx={{fontWeight:400,fontSize:"14px"}}>
                                    {data.status}
                                </Typography>
                            </Box>
                        </Box>
                        {/* {Date and Change Status } */}
                        <Box sx={{display:"flex",mt:4,justifyContent:"space-between",flexDirection:{xs:"column",sm:"row"}}}>
                            <Box sx={{display:"flex",gap:2}}>
                            <CalendarMonthIcon style={{ width: "30px", height: "45px" }} />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['SingleInputDateRangeField']}>
                                    <DateRangePicker
                                    slots={{ field: SingleInputDateRangeField }}
                                    name="allowedRange"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                        width:{xs:200,sm:240,md:240},
                                        height: "40px", // Same height as the input field
                                        borderRadius: "4px",
                                        padding: "0 12px",
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "14px", // Optional: Adjust text size
                                        overflow:"hidden"
                                        },
                                        '& .MuiInputBase-input': {
                                        height: "20px", // Align text inside the field
                                        display: "flex",
                                        alignItems: "center",
                                        },
                                    }}
                                    />
                                </DemoContainer>
                                </LocalizationProvider>
                            </Box>
                            <Box sx={{display:"flex",gap:2,mt:1,ml:3,mr:{xs:0,md:3},flexDirection:{sm:"column",md:"row"}}}>
                                <Box sx={{display:"flex",gap:2,flexWrap:"nowrap",}}>
                                    <FormControl 
                                        sx={{ 
                                            minWidth: {sm:150,md:180}, 
                                            height: "40px", 
                                            borderRadius: "4px", 
                                            border: "none", 
                                            overflow: "hidden", 
                                            background: "#F4F2F2", // Optional for consistent appearance
                                        }}
                                        >
                                        <Select
                                            value={dropdownStatusValue}
                                            onChange={handleStatusChange}
                                            displayEmpty
                                            renderValue={(selected) => (
                                            <span style={{ color: selected === "" ? "#A1A7C4" : "#000000" }}>
                                                {selected === "" ? "Change Status" : selected}
                                            </span>
                                            )}
                                            sx={{ 
                                            height: "100%", 
                                            borderRadius: "inherit", 
                                            border: "none", // Remove border from Select
                                            '& .MuiSelect-select': {
                                                padding: "8px 12px", // Adjust padding for consistent appearance
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: "none", // Remove outline border
                                            },
                                            }}
                                        >
                                            <MenuItem value="">
                                            <em>Change Status</em>
                                            </MenuItem>
                                            <MenuItem value="Pending">Pending</MenuItem>
                                            <MenuItem value="Completed">Completed</MenuItem>
                                            <MenuItem value="Rejected">Rejected</MenuItem>
                                        </Select>
                                        </FormControl>
                                </Box>
                                <Box sx={{display:"flex",gap:2}}>
                                  <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",background:"#F4F2F2"}}>
                                      <PrintOutlinedIcon/>
                                  </Box>
                                  <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",background:"#F4F2F2"}}>
                                      <Typography sx={{fontWeight:400,fontSize:"14px"}}>
                                          Save
                                      </Typography>
                                  </Box>
                                </Box>
                            </Box>
                        </Box> 
                    </Box>
              </Grid>
              {/* {Three Cards Grid} */}
              <Grid container spacing={2} sx={{ mt: 4 }}>
              {/* First Card */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ width: "100%", height: "175px", borderRadius: "16px", border: "1px solid #E7E7E3" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", ml: 2, mt: 2 }}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ width: "50px", height: "50px", borderRadius: "8px",background: "#4A69E2",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <PersonOutlineOutlinedIcon style={{ color: "white" }} />
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>Customer</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "#70706E" }}>Full Name: {addressData.name}</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "#70706E" }}>Email: {addressData.email}</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "#70706E" }}>Phone: {addressData.Phone}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Button sx={{ width: { sm: "190px", lg: "240px" }, height: "32px", borderRadius: "8px", background: "#232321", mt: 3, mb: 3 }}>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "white", textTransform: "none" }}>View profile</Typography>
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>

              {/* Second Card */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ width: "100%", height: "175px", borderRadius: "16px", border: "1px solid #E7E7E3" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", ml: 2, mt: 2 }}>
                    <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "50px", height: "50px", borderRadius: "8px",background: "#4A69E2",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <ShoppingBagOutlinedIcon style={{ color: "white" }} />
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>Order Info</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "#70706E" }}>Shipping: {addressData.shipping}</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "#70706E" }}>Payment Method: {addressData.payment}</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "#70706E" }}>Status: {addressData.status}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Button sx={{ width: { sm: "190px", lg: "240px" }, height: "32px", borderRadius: "8px", background: "#232321", mt: 3, mb: 3 }}>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "white", textTransform: "none" }}>Download Info</Typography>
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>

              {/* Third Card */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ width: "100%", height: "175px", borderRadius: "16px", border: "1px solid #E7E7E3" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", ml: 2, mt: 2 }}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ width: "50px", height: "50px", borderRadius: "8px",background: "#4A69E2",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <ShoppingBagOutlinedIcon style={{ color: "white" }} />
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>Delivery To</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "#70706E" }}>Address: {addressData.Address}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Button sx={{ width: { sm: "200px", lg: "250px" }, height: "32px", borderRadius: "8px", background: "#232321", mt: 3, mb: 3 }}>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "white", textTransform: "none" }}>View profile</Typography>
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 4,overflow:"hidden" }}>
                {/* First Item: Card */}
                <Grid item xs={12} sm={5}>
                  <Card
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "16px",
                      border: "1px solid #E7E7E3",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: "18px", ml: 2, mt: 2 }}>
                      Payment Info
                    </Typography>
                    <Box sx={{ display: "flex", ml: 2, mt: 2 }}>
                      <img src={MasterCard} alt="MasterCard" />
                      <Typography sx={{ fontWeight: 400, fontSize: "16px", color: "#70706E", ml: 1 }}>
                        {data.mastercard}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 400, fontSize: "16px", color: "#70706E", ml: 2, mt: 1 }}>
                      Business name: {data.BusinessName}
                    </Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "16px", color: "#70706E", ml: 2, mt: 1, mb: 2 }}>
                      Phone: {data.phone}
                    </Typography>
                  </Card>
                </Grid>

                {/* Second Item: TextField Box */}
                <Grid item xs={12} sm={7} sx={{height:"auto",overflow:"auto"}}>
                  <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "auto" }}>
                    <Typography sx={{ fontWeight: 600, fontSize: "18px", mb: 1 }}>
                      Note
                    </Typography>
                    <TextField
                      sx={{
                        width: "100%", // Full width
                        height: "100%", // Match container height
                        "& .MuiOutlinedInput-root": {
                          height: "100%", // Full height of TextField matches Card
                          alignItems: "flex-start", // Align text at the top
                          borderRadius: "16px",
                          border: "1px solid #E7E7E3",
                          backgroundColor: "white",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#E7E7E3",
                        },
                      }}
                      multiline
                      rows={4.2}
                      placeholder="Type some notes"
                      variant="outlined"
                    />
                  </Box>
                </Grid>
            </Grid>
            <TableContainer sx={{mt:4}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography sx={{fontWeight:700,fontSize:"16px",color:"#232321CC"}}>Product Name</Typography></TableCell>
                            <TableCell><Typography sx={{fontWeight:700,fontSize:"16px",color:"#232321CC"}}>Order ID</Typography></TableCell>
                            <TableCell><Typography sx={{fontWeight:700,fontSize:"16px",color:"#232321CC"}}>Quantity</Typography></TableCell>
                            <TableCell><Typography sx={{fontWeight:700,fontSize:"16px",color:"#232321CC"}}>Total</Typography></TableCell>
                        </TableRow>
                    </TableHead>   
                    <TableBody>
                        {TableData.map((datas,index)=>(
                            <TableRow>
                                <TableCell sx={{display:"flex",alignItems:"center"}}><Checkbox checked={selectedItems.includes(index)} onChange={() => handleCheckboxChange(index)}/><img src={datas.productimg} alt='Chicken'/>  <Typography sx={{fontWeight:600,fontSize:"12px",ml:0.5}}>{datas.product}</Typography></TableCell>
                                <TableCell><Typography sx={{fontWeight:600,fontSize:"12px"}}>{datas.id}</Typography></TableCell>
                                <TableCell><Typography sx={{fontWeight:600,fontSize:"12px"}}>{datas.quantity}</Typography></TableCell>
                                <TableCell><Typography sx={{fontWeight:600,fontSize:"12px"}}>{datas.amount}</Typography></TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                          <TableCell colSpan={4}>
                            <Box sx={{ display: "flex", flexDirection: "column"}}>
                              {/* Subtotal */}
                              <Box sx={{ display: "flex", justifyContent: "end", mb: 1,textAlign:"left" }}>
                                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>Sub Total:</Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>{subtotal.toFixed(2)}</Typography>
                              </Box>

                              {/* Tax */}
                              <Box sx={{ display: "flex", justifyContent: "end", mb: 1,textAlign:"left" }}>
                                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>Tax ({taxpercantage}%):</Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>{tax.toFixed(2)}</Typography>
                              </Box>

                              {/* Discount */}
                              <Box sx={{ display: "flex", justifyContent: "end", mb: 2 }}>
                                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>Discount ({discountpercentage}%):</Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>{discount.toFixed(2)}</Typography>
                              </Box>

                              {/* Total */}
                              <Box sx={{ display: "flex", justifyContent: "end", borderTop: "1px solid #E7E7E3", pt: 2 }}>
                                <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>Total:</Typography>
                                <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>{total.toFixed(2)}</Typography>
                              </Box>
                            </Box>
                          </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
          </Grid>
          </Box>
      </Grid>
</Grid>
  )
}

export default OrderListDetails