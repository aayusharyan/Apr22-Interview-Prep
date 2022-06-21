import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const NavigationBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={Logo} style={{ height: "2rem", paddingRight: "1rem" }} alt="Logo" />
          </Link>

          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', sm: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                textDecoration: 'none',
                color: "white",
              }}
            >
              GeekConnect
            </Typography>
          </Link>

          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
