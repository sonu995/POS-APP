import React, { createContext, useContext } from 'react';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CategoryIcon from '@mui/icons-material/Category';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import LiquorIcon from '@mui/icons-material/Liquor';

const DataContext = createContext();

export function DataProvider({ children }) {
  const Data = [
    {
        id:'20',
        icon:<KeyboardIcon/>,
        title:"Shortcut Key",
        item:"(0 Items)",
        link:"/pos"
       
    },
    {
        id:'21',
        icon:<CategoryIcon/>,
        title:" All Categories",
        item:"(16 Items)",
        link:"/pos"
       
    },
    {
        id:'23',
        icon:<SportsBarIcon/>,
        title:"Beer 500 Ml",
        item:"(3 Items)",
        link:"/pos"
       
    },
    {
        id:'24',
        icon:<LiquorIcon/>,
        title:"Whiskey",
        item:"(2 Items)",
        link:"/pos"
       
    },
    {
        id:'25',
        icon:< MiscellaneousServicesIcon/>,
        title:"Miscellaneous",
        item:"(5 Items)",
        link:"/pos"
       
    },
    {
        id:'26',
        icon:< MiscellaneousServicesIcon/>,
        title:"Miscellaneous",
        item:"(5 Items)",
        link:"/pos"
       
    
    },
    {
        id:'27',
        icon:< MiscellaneousServicesIcon/>,
        title:"Miscellaneous",
        item:"(5 Items)",
        link:"/pos"
       
    },
    {
        id:'28',
        icon:< MiscellaneousServicesIcon/>,
        title:"Miscellaneous",
        item:"(5 Items)",
        link:"/pos"
       
    }
  ];
  

  return <DataContext.Provider value={Data}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}
