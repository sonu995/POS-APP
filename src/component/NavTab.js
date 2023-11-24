import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Main from './Main';
import AppBar from '@mui/material/AppBar';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import styled from '@emotion/styled';


const listIcon = styled("div")(({ theme }) => ({
  width: "100%",
  border: '2px solid #b1b1b1',
  padding: "1px 10px",
  borderRadius: theme.shape.borderRadius,
}))

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NavTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: '100%', margin: 'auto' }}>
      <AppBar position="static" sx={{ bgcolor: "#F7F8FA", display: 'flex' }}>
        <Box sx={{ borderBottom: 2, borderColor: 'divider', width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{ color: "black" }} label="Register" {...a11yProps(0)} />
            <Tab sx={{ color: "black" }} label="Sales" {...a11yProps(1)} />
            <Tab sx={{ color: "black" }} label="WebOrder" {...a11yProps(2)} />
            <Tab sx={{ color: "black" }} label="Reports" {...a11yProps(3)} />
            <Tab sx={{ color: "black" }} label="Setting" {...a11yProps(4)} />
          </Tabs>
        </Box>
      </AppBar>

      <CustomTabPanel value={value} index={0}>
        <Main/>
     
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Item Tow
  
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
