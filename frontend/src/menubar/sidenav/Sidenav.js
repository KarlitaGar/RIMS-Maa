import React from 'react'
import { Drawer, Hidden } from '@material-ui/core'
import { SidenavStyles } from './SidenavStyles'
import SidenavDesign from './SidenavDesign';
import { Toolbar } from '@mui/material';

function Sidenav({isMobile, funcSetMobile}) {
    const classes = SidenavStyles();
    return (
        <div>
            <nav className={classes.drawer}>
                {/* For desktop view */}
                <Hidden xsDown implementation='css'>
                    <Drawer variant='permanent'
                            open
                            anchor='left'
                            sx={{
                                width: 240,
                                flexShrink: 0,
                                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                                }}>
                                <Toolbar />
                        <SidenavDesign />
                    </Drawer>
                </Hidden>

                {/* For mobile view */}
                <Drawer variant='temporary'
                        open = {isMobile}
                        anchor='right'
                        classes={{paper: classes.drawerTop}}
                        onClick={funcSetMobile}>
                    
                </Drawer>
            </nav>
        </div>
    )
}

export default Sidenav