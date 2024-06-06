import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import g80m3 from "../images/g80-m3.jpg";

export default function Products(){

    return(
        <div style={{paddingInline:'10rem'}}>
            <Grid container spacing={0} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={4}>
                    <ProductCard
                        image={g80m3}
                        title="BMW M3 G80"
                        description="With its aggressive design, powerful engine, and cutting-edge technology, the BMW G80 M3 sets new standards in the world of high-performance sedans."
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProductCard
                        image={g80m3}
                        title="BMW M3 G80"
                        description="With its aggressive design, powerful engine, and cutting-edge technology, the BMW G80 M3 sets new standards in the world of high-performance sedans."
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProductCard
                        image={g80m3}
                        title="BMW M3 G80"
                        description="With its aggressive design, powerful engine, and cutting-edge technology, the BMW G80 M3 sets new standards in the world of high-performance sedans."
                    />
                </Grid>
            </Grid>
        </div>
    );
}
