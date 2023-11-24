import React, { useRef, useState } from "react";
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
import { useAppContext } from "../Context/AppContext";
import { ComponentToPrint } from "./ComponentToPrint";
import { useReactToPrint } from "react-to-print";

const options = ["gst(18%)", "sgst(12%)"];

const Search = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: "2px solid #b1b1b1",
  borderRadius: theme.shape.borderRadius,
  paddingLeft: "5px",
  display: "flex",
  alignItems: "center",
  backgroundColor:'#fff'
}));


const Calculation = () => {
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
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  const componentRef = useRef();

  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint = () => {
    handleReactToPrint();
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        py={"10px"}
        px={2}
        justifyContent={"space-between"}
        sx={{
          backgroundColor: "#F7F8FA",
        }}
      >
        <Grid xs={12} sm={12} md={12} lg={6} xl={4}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Stock Information
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "@media (max-width:1200px)": {
              mt: "10px",
            },
          }}
          bgcolor={"rgb(247,248,250)"}
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
          <Box
            sx={{
              width: "60%",
              "@media (max-width:600px)": {
                width: "50%",
              },
            }}
          >
            <Search>
              <InputBase placeholder="Stock Search" />
            </Search>
          </Box>
          <Box
            sx={{
              width: "40%",
              "@media (max-width:600px)": {
                width: "50%",
              },
            }}
          >
            <Button
              onClick={addItem}
              sx={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "rgb(46,56,77)",
                paddingY: "10px",
                marginLeft: "2rem",
                "@media (max-width:600px)": {
                  fontSize: "8px",
                },
              }}
              variant="outlined"
              startIcon={<AddIcon sx={{ color: "blue" }} />}
            >
              Manual Item
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid variant="div" sx={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} />
      </Grid>
      <Box sx={{ height: "55vh", overflow: "hidden" , "@media (max-width:1200px)": {
                  height: "71vh",
                },}}>
        <TableContainer sx={{ maxHeight: 400 }} component={Paper}>
          <Table aria-label="a dense table">
            <TableHead>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: "1px solid #b1b1b1",
                    bgcolor: "#E9F0F8",
                  },
                }}
              >
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Tax Rate</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Tax</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow
                  sx={{ backgroundColor: "#F2DEDE" }}
                  key={index}
                  bgcolor="white"
                >
                  <TableCell
                    size="small"
                    sx={{ width: "25%", minWidth: "300px" }}
                  >
                    <TextField
                      sx={{
                        minWidth: 200,
                        bgcolor: "white",
                        borderRadius: "10px",
                      }}
                      placeholder="Name"
                      value={item.name}
                      variant="outlined"
                      size="small"
                      onChange={(e) => editItem(index, "name", e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={item.price}
                      variant="outlined"
                      size="small"
                      onChange={(e) =>
                        editItem(index, "price", parseFloat(e.target.value))
                      }
                      sx={{
                        minWidth: 70,
                        bgcolor: "white",
                        borderRadius: "10px",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      sx={{
                        minWidth: 70,
                        bgcolor: "white",
                        borderRadius: "10px",
                      }}
                      type="number"
                      value={item.quantity}
                      variant="outlined"
                      size="small"
                      onChange={(e) =>
                        editItem(index, "quantity", parseInt(e.target.value))
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Autocomplete
                      value={item.taxRate}
                      size="small"
                      onChange={(event, newValue) =>
                        handleTaxRateChange(index, newValue)
                      }
                      id={`controllable-states-demo-${index}`}
                      options={options}
                      sx={{ width: 100 }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </TableCell>
                  <TableCell>
                    {(item.price * item.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {(
                      (item.price * item.quantity * item.taxRate) /
                      100
                    ).toFixed(2)}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      paddingY: "30px",
                      paddingX: "10px",
                    }}
                  >
                    <AddCircleRoundedIcon
                      sx={{
                        color: "green",
                        fontSize: "30px",
                        cursor: "pointer",
                      }}
                      onClick={() => incrementQuantity(index)}
                    />
                    <CancelIcon
                      sx={{ color: "red", fontSize: "30px", cursor: "pointer" }}
                      onClick={() => deleteItem(index)}
                    />
                    <RemoveCircleRoundedIcon
                      sx={{
                        color: "blue",
                        fontSize: "30px",
                        cursor: "pointer",
                      }}
                      onClick={() => decrementQuantity(index)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <TableContainer>
        <Table size="small" bgcolor="#E9F0F8">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  "@media (max-width:600px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  "@media (max-width:600px)": {
                    fontSize: "12px",
                  },
                }}
              >
                 Discount
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  "@media (max-width:600px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Subtotal
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  "@media (max-width:600px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Tax
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  "@media (max-width:600px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ height: "20px" }}>
            <TableRow>
              <TableCell>
                <Typography>
                  {items.reduce((acc, item) => acc + item.quantity, 0)}
                </Typography>
              </TableCell>
              <TableCell>
                <TextField
                  sx={{ minHeight: 10, padding: "0" }}
                  type="number"
                  value={discount}
                  variant="outlined"
                  size="small"
                  onChange={(e) => setDiscount(parseFloat(e.target.value))}
                />
              </TableCell>
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

      {/* <div>
        <Box>
          <Search />

          <DemoPaper>
            <Box py={2}>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                Shortcuts
              </Typography>
            </Box>
            <Grid container gap={5} justifyContent={"center"}>
              {Product.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={5}
                    sm={5}
                    md={5}
                    lg={5}
                    xl={3}
                    py={1}
                    key={index}
                    onClick={() => addProductCart(item)}
                  >
                    <Stack
                      justifyContent={"center"}
                      py={"25px"}
                      alignItems={"center"}
                      border={"1px solid #b1b1b1"}
                      sx={{ borderRadius: "5px" }}
                    >
                      <Box>
                        <img
                          style={{ width: "200px" }}
                          src={item.image}
                          alt={item.Name}
                        />
                      </Box>
                      <Typography variant="span" sx={{ fontWeight: "bold" }}>
                        {item.Name}
                      </Typography>
                      <Typography variant="span">{item.Price}</Typography>
                      <Typography variant="span">{item.Quantity}</Typography>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </DemoPaper>

          <Box sx={{ pt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handlePrint}
            >
              Pay $ 0.00
            </Button>
          </Box>
        </Box>
      </div> */}
    </div>
  );
};

export default Calculation;
