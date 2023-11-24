import React from "react";
import { useRef } from "react";
import { Box, Grid, Typography, styled, Paper, Button } from "@mui/material";
import Calculation from "./Calculation";
import Search from "./Search";
import Right from "./Right";
import ShortcutKey from "../Pages/ShortcutKey";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";


const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  height: "63vh",
  marginTop: "20px",
  paddingBottom: "5rem",
  "@media (max-width:1200px)": {
    height: "85vh",
  },
}));

const Main = () => {
  const componentRef = useRef();

  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint = () => {
    handleReactToPrint();
  };
  const { calculateTotal } = useAppContext();

  return (
    <Box>
      <Grid variant="div" sx={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} />
      </Grid>
      <Grid spacing={2} container justifyContent={"center"}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Calculation />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box>
            <Box>
              <Box >
                <Search />
              </Box>
              <DemoPaper>
                <Box>
                  <Router>
                    <Routes>
                      <Route path="/" element={<Right />} />
                      <Route path="pos" element={<ShortcutKey />} />
                    </Routes>
                  </Router>
                </Box>
              </DemoPaper>
            </Box>
          </Box>
          <Box sx={{ pt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handlePrint}
            >
              Pay {calculateTotal().toFixed(2)}
            </Button>
          </Box>
        </Grid>
      </Grid>
    
    </Box>
  );
};

export default Main;
