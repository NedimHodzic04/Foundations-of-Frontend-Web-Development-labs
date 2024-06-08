import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AccordionComponent from "../components/AccordionComponent";

export default function FAQ(){

    return(
        <Box sx={{ maxWidth: '750px', margin: 'auto', paddingInline:3.5 }}>
            <Container gutterBottom sx={{ mt: 7.5, mb: 7.5 }}>
                <Typography variant='h3' sx={{mb:10}}>Frequently Asked Questions</Typography>
                <AccordionComponent />
            </Container>
        </Box>
    );
}
