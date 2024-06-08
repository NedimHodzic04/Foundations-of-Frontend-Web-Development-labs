import React from 'react';
import { Container, Typography, Button, Box, Divider} from '@mui/material';
import { Link } from 'react-router-dom';
import HomePageTaglineComp from '../components/HomePageTaglineComponent';
import car1Image from '../images/g80-m3-sideshot.png';
import car2Image from '../images/g87-m2.png';
import car3Image from '../images/g30-m5-cs.png';
import car4Image from '../images/g30-m5-cs.png';
import HomePageDescComp from '../components/HomePageDescComp';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Home = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <Box sx={{maxWidth:'1000px', margin:'auto'}}>
        <Container sx={{ mt: 5, paddingInline:3.5}}>
            <HomePageTaglineComp tagline="Unleash the M. Uncage your potential."/>
            <Divider sx={{mt:5}} variant="middle"/>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 2.5 }}>
                <img src={car1Image} alt="BMW M3 G80" style={{ width: '80%', borderRadius: '8px', mb: 2 }} />
                <HomePageDescComp tagline="Unleash the inner rebel. The BMW M3 G80 isn't built for comfort zones. It's crafted for those who crave the unadulterated thrill of the open road. Experience the surge of raw power as you rocket from 0 to exhilaration in a blink. Precision handling carves through corners with the confidence of a seasoned athlete, while the growl of the engine transforms into your victory anthem. This isn't just a car; it's a partner in crime, ready to conspire with you on every exhilarating journey."/>
                <Button size='large' onClick ={handleClickOpen} component={Link} variant="contained" color="primary" sx={{mt:5, mb:5, backgroundColor:'	#0166B1', color:'#fff'}}>
                    Explore Models
                </Button>
                <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Ever Wonder What It Feels Like to Pilot a Rocket? Get Behind the Wheel of a BMW. "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          We all know the feeling – stuck in traffic, surrounded by a sea of beige boredom. But what if your daily commute could be a chance to unleash your inner driving champion?

Are you ready to leave the ordinary behind and enter a world where every drive is a victory lap? Because entering the world of BMW means trading in the minivan mentality for the winning spirit of a true performance machine. Get ready to level up your driving experience with BMW!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Not Ready</Button>
          <Button component={Link} to='/models' autoFocus>
            Ready
          </Button>
        </DialogActions>
      </Dialog>
                
            </Container>

        </Container>
        </Box>
    );
}


export default Home;
