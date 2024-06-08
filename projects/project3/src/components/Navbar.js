import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import bmwImage from '../images/bmw-logo.svg';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

const pages = ['Home', 'Models', 'Register', 'About', 'FAQ'];

function Navbar({ toggleTheme }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{p:0.5}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: { md: 0, xs: 1 }
          }}>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={bmwImage} alt="BMW Logo" style={{ marginRight: '24px', width: '48px', height: '48px' }} />
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                className="nav-button"
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{ mx: 2, color: 'white',fontWeight:400, fontSize:'16px' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page.toLowerCase()}`}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleTheme}
            color="inherit"
          >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
