import { AppBar, Avatar, Hidden, IconButton, Toolbar, Container, Box, Menu, MenuItem, Tooltip, Typography, Grid } from '@mui/material'
import React from 'react'
import { TopnavStyles } from './TopnavStyles'
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../../images/brgy.png'
// import dashimg from '../../../logo/1.png'
// import censusimg from '../../../logo/2.png'
// import recordsimg from '../../../logo/3.png'
// import reportsimg from '../../../logo/4.png'
// import somimg from '../../../logo/5.png'
// import eventsimg from '../../../logo/6.png'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Topnav(funcSetIsMobile) {
    const classes = TopnavStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <div>
            {/* For desktop view */}
            <AppBar position="fixed" elevation={1} sx={{ backgroundColor: 'white', maxWidth:'xl' }}>
                <Container maxWidth="xl">
                    <Toolbar className={classes.topbar}>
                    {/* <IconButton 
                        className={classes.topbarContent}
                        onClick={funcSetIsMobile}>
                        <MenuIcon />
                    </IconButton> */}
                    <Grid container alignItems='left' className={classes.topbarContent} sx={{flexGrow:1}}>
                        <Grid item>
                            <img src={logo} alt="RIMS LOGO" className={classes.topbarLogo}/>
                        </Grid>
                    </Grid>

                    <Avatar />
                
                
                </Toolbar>

                </Container>
            </AppBar>

            {/* For mobile view
            <Hidden>
                <AppBar position="fixed" elevation={2} sx={{flexGrow: 1 }}>
                <Container maxWidth="xs">
                    <Toolbar >
                        <div className={classes.topbarContent}>
                        <img src={logo} alt="RIMS LOGO" className={classes.topbarLogo}/>
                    </div>
                    
                    <Avatar />
                    </Toolbar>
                    </Container>
                </AppBar>
            </Hidden> */}
            

        </div>
    )
}

export default Topnav