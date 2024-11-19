import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Grid, Typography } from "@mui/material";

const Order = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <ArrowBackIosIcon />
              <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
                Order
              </Typography>
            </Box>
            <ShoppingCartTwoToneIcon
              style={{
                color: "#C7C7C7",
                height: "200px",
                width: "180px",
                marginTop: "100px",
              }}
            />
            <Typography sx={{ fontWeight: 400, fontSize: "30px" }}>
              No orders yet
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
              Hit the orange button down{" "}
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
              below to Create an order
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FE8C00",
                marginTop: "110px",
                borderRadius: "20px",
              }}
            >
              Start Ordering
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
