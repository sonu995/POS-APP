import {  Grid, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Footer = () => {
  return (
    <>
      <div>
        <Grid container bgcolor={"#ffff"} alignItems={"center"}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            sx={{
              borderRight: "1px solid rgb(177,177,177)",
              borderTopWidth: "100%",
            }}
            py={1}
          >
            <Typography
              sx={{ color: "#2E384D", fontWeight: "bold" }}
              fontSize={12}
              textAlign={"center"}
            >
              Customer # 1234 | Support # 844-919-2017
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            sx={{
              borderRight: "1px solid rgb(177,177,177)",
              borderTopWidth: "100%",
            }}
            py={1}
          >
            <Typography
              sx={{ color: "#2E384D", fontWeight: "bold" }}
              fontSize={13}
              textAlign={"center"}
            >
              sonu Martz -Pax - sonu mart- sonu mart
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={6} py={1}>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <Grid item xs={12} sm={12} md={12} lg={10}>
                <Typography
                  sx={{ color: "#2E384D", fontWeight: "bold" }}
                  fontSize={12}
                  textAlign={"center"}
                >
                  {/* Alcohol Cutoff: 10/10/2005  */}
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={1} sx={{ display: "flex" }}>
                <Typography
                  sx={{ color: "#2E384D" }}
                  fontSize={11}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  POS Is{" "}
                  <Typography
                    sx={{ color: "green", fontWeight: "bold" }}
                    fontWeight={"bold"}
                    fontSize={12}
                  >
                    Online
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={2} lg={1}>
                <CheckCircleIcon sx={{ color: "green" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

    
    </>
  );
};

export default Footer;
