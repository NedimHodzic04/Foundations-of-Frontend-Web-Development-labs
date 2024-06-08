import React from "react";
import Divider from '@mui/material/Divider';



function Footer() {
  return (
    <div style={{
        position: 'absolute',
      width: '100%',
      marginTop: 'auto', 
      textAlign: 'center', 
    }}>
        <Divider></Divider>
      <p style={{ color: 'grey', fontSize: '14px' , padding:'0.5rem'}}>© BMW AG 2024</p>
    </div>
  );
}

export default Footer;
