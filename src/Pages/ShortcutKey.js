// ShortcutKey.js
import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useShortData } from "../Context/Shortcutdata";
import { Grid, Button, Box,  } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  fontWeight: "bold",
  cursor:"pointer"
}));

export default function ShortcutKey() {
  const ShortData = useShortData();
  const { addProductCart } = useAppContext();

  return (
    <>
      <Box>
    
        <Link to="/">
          <Button
            sx={{
              fontSize: "18px",
              textTransform: "capitalize",
              fontWeight: "bold",
              color:"black"
            }}
            startIcon={<KeyboardBackspaceIcon />}
          >
            Categories
          </Button>
        </Link>
      </Box>
      <Grid container spacing={2} py={2}>
        {ShortData.map((item) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
            onClick={() => addProductCart(item)}
          >
            <Stack >
              <DemoPaper key={item.id} variant="outlined" style={{ backgroundColor: item.color, color: item.textColor }}>
                {item.productName}
              </DemoPaper>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
