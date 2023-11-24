import React from "react";
import { useData } from "../Context/DataContext";
import { Grid, Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Right() {
  const Data = useData();

  return (
    <>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Shortcuts
        </Typography>
      </Box>
      <Grid container spacing={3} py={2}>
        {Data.map((item) => (
          <Grid item xs={6} sm={6} md={6} lg={6} xl={4} key={item.id} >
            <Link
              sx={{
                textDecoration: "none",
              }}
              to={item.link}
            >
                <Stack
          justifyContent="center"
          py={3}
          alignItems="center"
          border="1px solid #b1b1b1"
          sx={{ borderRadius: "5px", transition: "border 0.3s" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = "1px solid #000"; // Change border on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "1px solid #b1b1b1"; // Reset border on mouse leave
          }}
        >
                <Box>{item.icon}</Box>
                <Typography
                  variant="span"
                  sx={{ color: "black", fontWeight: "bold",textDecoration:"none"  }}
                >
                  {item.title}
                </Typography>
                {/* <Typography variant="span">{item.item}</Typography> */}
              </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Right;
