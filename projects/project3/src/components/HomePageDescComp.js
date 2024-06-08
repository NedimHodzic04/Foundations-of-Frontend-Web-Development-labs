import React from "react";
import { Divider, Typography } from "@mui/material";

export default function HomePageDescComp(props){

    return(
        <>
        <Divider></Divider>
<Typography variant="body1" align="justify" paragraph sx={{marginBlock:'2rem'}}>
{props.tagline}                </Typography> </>   );
}