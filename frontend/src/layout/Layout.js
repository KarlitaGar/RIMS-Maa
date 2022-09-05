import React, { useState } from 'react'
import Sidenav from '../menubar/sidenav/Sidenav';
import Topnav from '../menubar/topnav/Topnav';
import TopnavMenu from '../menubar/topnav/TopnavMenu';
import { LayoutStyles } from './LayoutStyles'
import { Grid, Box, CssBaseline, Drawer, Toolbar,  } from "@mui/material"


function Layout({children}) {
    const classes = LayoutStyles();
    const [isMobile, setIsMobile] = useState(false);
    const funcSetIsMobile = () => {
        setIsMobile(!isMobile);
    }
    return (
        <div className={classes.root}>
            <div>
                <Topnav funcSetIsMobile={funcSetIsMobile}/>
            </div>
            
            <div >
                <Sidenav isMobile={isMobile} funcSetIsMobile={funcSetIsMobile}/>
            </div>
            
            <main >
                <div className={classes.widthDesktop} >
                    {children}
                </div>
            </main>
        </div>

        // <Box sx={{ display: 'flex' }}>
        //     <CssBaseline />
        //     <Topnav funcSetIsMobile={funcSetIsMobile}/>
        //     <Sidenav isMobile={isMobile} funcSetIsMobile={funcSetIsMobile}/>
        
        //         <Toolbar />
        //         <Box sx={{ overflow: 'auto' }}>
                    
        //         </Box>


        //     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        //         <main >
        //              <div className={classes.topbarWidth}>
        //                  {children}
        //              </div>
        //          </main>
        //     </Box>
        // </Box>

    //     <Grid container direction='column' alignItem='center'>
    //    <Grid item sx={{ width:"100%" }}>
    //    <Topnav funcSetIsMobile={funcSetIsMobile}/>
    //   </Grid>
    //   <Grid item sx={{ width:"100%" }}>
    //       <Grid container direction='row'>
    //         <Grid item>
    //             <Sidenav isMobile={isMobile} funcSetIsMobile={funcSetIsMobile}/>
    //         </Grid>
    //          <Grid sx={{ width:20 }}/>
    //          <Grid item sx={{ paddingLeft: 40, paddingTop: 15 }}> 
    //             {children}
    //         </Grid>
             
    //       </Grid>
        
    //   </Grid>
    // </Grid>

  )
}

export default Layout