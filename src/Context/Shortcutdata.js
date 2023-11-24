// ShortdataContext.js
import React, { createContext, useContext } from 'react';

const ShortdataContext = createContext();

export function ShordataProvider({ children }) {
  const ShortData = [
    {
      id: '20',
      productName: 'Lotto Payout', 
      Price:70,
      Quantity:1,
      color:"#7ED321",
  
    },
    {
      id: '21',
      productName: 'Lotto Sale',
      Price:80,
      Quantity:1,
     
    },
    {
      id: '22',
      productName: 'Online Lottery',
      Price:100,
      Quantity:1,
      color:"#7ED321",
    
    },
    {
        id: '20',
        productName: 'Online Payout',
        Price:150,
        Quantity:1,
        color:"rgb(239,121,35)",
        textColor:"#FFFF"
      },
      {
        id: '21',
        productName: 'BIRA',
        Price:170,
        Quantity:1,
        color:"rgb(144,19,254)",
        textColor:"#FFFF"
        
       
    
      },
      {
        id: '23',
        productName: 'M Juice',
        Price:70,
        Quantity:1,
       
      },
      {
        id: '24',
        productName: 'CIGARS 2.0',
        Price:70,
        Quantity:1,
       
      },
      {
        id: '25',
        productName: 'MOB APP',
        Price:70,
        Quantity:1,
        color:"rgb(208,2,27)",
        textColor:"#FFFF"
      },
      {
        id: '26',
        productName: 'orange',
        Price:70,
        Quantity:1,
        color:"rgb(239,121,35)",
        textColor:"#FFFF"
      },
    
    // Add more items as needed
  ];

  return <ShortdataContext.Provider value={ShortData}>{children}</ShortdataContext.Provider>;
}

export function useShortData() {
  return useContext(ShortdataContext);
}
