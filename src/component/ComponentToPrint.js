import React from "react";
import { useAppContext } from "../Context/AppContext";
import {
  TextField,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Grid,
  styled,
  InputBase,
  Paper,
  Box,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Autocomplete from "@mui/material/Autocomplete";
import Product from "./Product";

const options = ["gst(18%)", "sgst(12%)"];

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const {
    items,
    addItem,
    editItem,
    deleteItem,
    calculateSubtotal,
    taxRate,
    setTaxRate,
    discount,
    setDiscount,
    incrementQuantity,
    decrementQuantity,
    handleTaxRateChange,
    addProductCart,
    calculateTax,
    calculateTotal,
  } = useAppContext();

  return (
    <>
    {/* <div ref={ref}>
      <Box>
        <Grid sx={{position:"relative", left:'20%'}} container justifyItems={"center"} alignItems={"center"}>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <img  src="https://digihelpitservices.com/wp-content/uploads/2022/10/DigiHelp-Logo-unscreen-129x129.gif" alt="logo"/>
          </Grid>
          <Grid  item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Typography variant="h4">DigiHelp IT Services LLP</Typography>
          </Grid>
        </Grid>
      </Box>

      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow bgcolor="#E9F0F8"  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Tax Rate</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Tax</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index} bgcolor="white">
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.taxRate}</TableCell>
                <TableCell>{(item.price * item.quantity).toFixed(2)}</TableCell>
                <TableCell>
                  {((item.price * item.quantity * item.taxRate) / 100).toFixed(
                    2
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer>
        <Table bgcolor="#E9F0F8">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Total Items</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Enter Discount</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Subtotal</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Tax</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ height: "20px" }}>
            <TableRow>
              <TableCell>
                <Typography>{items.length}</Typography>
              </TableCell>
              <TableCell>{discount}</TableCell>
              <TableCell>
                <Typography>{calculateSubtotal().toFixed(2)}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{calculateTax().toFixed(2)}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{calculateTotal().toFixed(2)}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div> */}
      <div ref={ref}>
      <Box variant="div" sx={{width:"35%" ,  margin:"100px auto", display:'flex',justifyItems:"center", alignItems:"center" ,flexDirection:"column"}}>
        <Box>
          <img style={{width:"180px"}} src="https://digihelpitservices.com/wp-content/uploads/2022/10/WhatsApp_Image_2022-10-13_at_2.12.45_AM-removebg-preview.png" alt="company-logo"/>
        </Box>
       <Box sx={{ mt:"10px"}}>
        {items.map((item, index) => (
         
              <Grid container  justifyContent={"space-between"}  >
                <Grid key={index} item  xs={8}  sm={8} md={8} lg={8}> 
              <Typography  variant="h6" >{item.name}</Typography > 
              </Grid>
               <Grid item  xs={4}  sm={4} md={4} lg={4}>
               <Typography  variant="h6" >{item.price}</Typography > 
               </Grid>
               </Grid>
              
                
              ))}   
             <Grid container >
              <Grid item  xs={8}  sm={8} md={8} lg={8}>
              <Typography  variant="h6" >Total Items</Typography > 
              </Grid>
              <Grid item  xs={4}  sm={4} md={4} lg={4}>
              <Typography variant="h6" >{items.length}</Typography>
              </Grid>
              <Grid item  xs={8}  sm={8} md={8} lg={8}>
              <Typography  variant="h6" >Discount</Typography > 
              </Grid>
              <Grid item  xs={4}  sm={4} md={4} lg={4}>
              <Typography variant="h6" >{discount}</Typography>
              </Grid>
              <Grid item  xs={8}  sm={8} md={8} lg={8}>
              <Typography  variant="h6" >Subtotal</Typography > 
              </Grid>
              <Grid item  xs={4}  sm={4} md={4} lg={4}>
              <Typography variant="h6" >{calculateSubtotal().toFixed(2)}</Typography>
              </Grid> <Grid item  xs={8}  sm={8} md={8} lg={8}>
              <Typography  variant="h6" >Tax</Typography > 
              </Grid>
              <Grid item  xs={4}  sm={4} md={4} lg={4}>
              <Typography variant="h6" >{calculateTax().toFixed(2)}</Typography>
              </Grid>
               <Grid item  xs={8}  sm={8} md={8} lg={8}>
              <Typography  variant="h6" >Total</Typography > 
              </Grid>
              <Grid item  xs={4}  sm={4} md={4} lg={4}>
              <Typography variant="h6">{calculateTotal().toFixed(2)}</Typography>
              </Grid>
              </Grid>
              </Box>
              </Box>
         
    </div>
  </>
  );
});
