import React from "react";
import { Typography } from "@mui/material";

export default function HomePageTaglineComp(props){
    return(
        <Typography variant="h1" align="justify" sx={{mt: 7.5, fontSize:{md:'64px', xs:'36px'}, fontWeight:700}}>
                {props.tagline}
            </Typography>
    );
}