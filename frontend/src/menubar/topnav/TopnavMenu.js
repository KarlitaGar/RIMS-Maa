import { AppBar, Avatar, Hidden, IconButton, Toolbar } from '@material-ui/core'
import React from 'react'
import { TopnavStyles } from './TopnavStyles'
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../../images/brgy.png'

function TopnavMenu(funcSetIsMobile) {
    const classes = TopnavStyles();
  return (
    <AppBar position="fixed" elevation={1}>
        <Toolbar className={classes.topbar}>
            <IconButton 
                className={classes.topbarContent}
                onClick={funcSetIsMobile}>
                    <MenuIcon />
            </IconButton>
            
        </Toolbar>
    </AppBar>

  )
}

export default TopnavMenu