import React from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "../components/ProductCard";
import g80m3 from "../images/g80-m3.png";
import g87m2 from "../images/g87-m2.png";
import g30m5 from "../images/g30-m5-cs.png";
import x5m from "../images/x5m.png";
import g82m4 from "../images/g82-m4.png";
import m8comp from "../images/m8-comp.png";

export default function Models() {
  return (
    <Container sx={{ mt: 7.5, width: "100%", mb: 7.5 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <ProductCard
            image={g80m3}
            title="BMW M3 G80"
            description="Power unleashed. Unleash the beast within with the M3 G80. Precision handling meets raw power, pushing limits and igniting driving passion."
          />
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <ProductCard
            image={g87m2}
            title="BMW M2 G87"
            description="Thrilling agility. Tame the streets with the M2 G87. This compact powerhouse delivers pure driving joy, turning every corner into an adventure."
          />
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <ProductCard
            image={g30m5}
            title="BMW M5 G30 CS"
            description="Unmatched power. Command attention with the M5 G30 CS. 627 horsepower and a sleek design, engineered for those who demand the best."
          />
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <ProductCard
            image={x5m}
            title="BMW X5 M"
            description="Luxury meets muscle. X5 M - conquer the road with ultimate performance and pamper your passengers with luxurious comfort."
          />
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <ProductCard
            image={g82m4}
            title="BMW M4 G82"
            description="Open-air performance. Feel the rush with the M4 G82. This captivating coupe blends power and design for an exhilarating drive."
          />
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <ProductCard
            image={m8comp}
            title="BMW M8 Competition"
            description="Peak performance. Experience the pinnacle of engineering with the M8 Competition. 625 horsepower and luxury redefine automotive excellence."
          />
        </Grid>
      </Grid>
    </Container>
  );
}
