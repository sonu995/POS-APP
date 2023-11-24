import React from "react";
import { useState } from "react";
import { Grid, InputBase, ButtonGroup, Box } from "@mui/material";
import Button from "@mui/material/Button";




const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Grid>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Box
          style={{
            border: "2px solid #b1b1b1",
            padding: "2px 80px",
            backgroundColor: "#ffff",
          }}
        >
          <InputBase
            placeholder="Customer Mobile Number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
          />
        </Box>
        <Button sx={{ padding: "2px 30px" }}>Lookup</Button>
      </ButtonGroup>
    </Grid>
  );
};

export default Search;
