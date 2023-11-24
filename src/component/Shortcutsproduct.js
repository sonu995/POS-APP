import React from 'react'
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import Data from "./CardData";
import { Link } from "react-router-dom";
const Shortcutsproduct = () => {
  return (
    <Shortcutsproduct>
          <Grid container gap={3} justifyContent={"center"}>
          {Data.map((item) => {
            return (
              <Grid item xs={5} sm={5} md={5} lg={5} xl={3} py={1}>
                <Link to={item.link}>
                  <Stack
                    justifyContent={"center"}
                    py={"25px"}
                    alignItems={"center"}
                    border={"1px solid #b1b1b1"}
                    sx={{ borderRadius: "5px" }}
                  >
                    <Box sx={{ color: "blue" }}>{item.icon}</Box>
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="span">{item.item}</Typography>
                  </Stack>
                </Link>
              </Grid>
            );
          })}
        </Grid>
    </Shortcutsproduct>

  )
}

export default Shortcutsproduct