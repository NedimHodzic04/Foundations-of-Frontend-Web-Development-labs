import React from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';

const About = () => {
  return (
    <Box sx={{maxWidth:'1000px', margin:'auto', paddingInline:3.5}}>
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h1" gutterBottom sx={{fontSize:'3.5rem'}}>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            At BMW of Sarajevo, we're more than just a car dealership – we're a community of passionate BMW enthusiasts dedicated to delivering an exceptional experience for drivers seeking the pinnacle of performance. Located in the heart of Brijesce, Sarajevo, we specialize in a curated selection of high-performance BMW models, ensuring every vehicle on our lot is a driving masterpiece. Our expert sales team possesses a deep understanding of BMW's M lineup and the unique desires of performance-oriented drivers.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            We understand the thrill of getting behind the wheel of a car that pushes boundaries and ignites your spirit. Whether you're a seasoned track enthusiast or a driver yearning to unleash the joy of exhilarating performance, our team is here to guide you. We take pride in offering a personalized approach, helping you discover the perfect BMW M car that aligns with your driving style and aspirations.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            Nestled in Brijesce, Sarajevo, BMW of Sarajevo boasts a welcoming atmosphere that fosters a connection between drivers and the legendary performance heritage of BMW. We go beyond simply selling cars – we create a space where you can learn about the history and innovations that define BMW M. Our commitment extends to exceptional after-sales service, ensuring your high-performance BMW continues to deliver an unparalleled driving experience for years to come.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            At BMW of Sarajevo, we believe the joy of driving is best shared. We regularly host events and gatherings for fellow BMW enthusiasts, providing a platform to connect, share experiences, and celebrate the thrill of performance. Whether you're a seasoned owner or a curious newcomer, we welcome you to join our vibrant community of drivers who share a passion for the ultimate driving machine.
          </Typography>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default About;
