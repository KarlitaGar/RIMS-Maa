import { Avatar, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import dashimg from '../../logo/1.png';


import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link, navigate} from '@mui/material';

import { SidenavStyles } from './SidenavStyles';
import { SideformData } from './SideformData';
import { SidenavData } from './SidenavData';

import { useLocation, useNavigate } from 'react-router'

function SidenavDesign() {
    const classes = SidenavStyles();
    const location = useLocation();
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
    setOpen(!open);
  };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClickListItem = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleListItemClick = (event, index) => {
            setSelectedIndex(index);
            setAnchorEl(null);
        };

  return (
    // <div>
    //     <div className={classes.logoDiv}>
    //         <Avatar src={dashimg} alt="RIMS LOGO" variant='square'/>
    //     </div>
    //     {
    //         SidenavData.map(item => (
    //             <ListItem button
    //                 key={item.title}
    //                 onClick={() => navigate(item.path)}
    //                 className= {location.pathname === item.path? classes.active : classes.notActive}
    //                 >
    //                 <ListItemIcon >{item.icon}</ListItemIcon>
    //                 <ListItemText>{item.title}</ListItemText>
    //             </ListItem>

                
    //         ))
    //     }
    // </div>
    <div>
        <Box className={classes.drawerPaper} sx={{ overflow: 'auto'}}>
        <List>
        { SidenavData.map(({id, title, path}) => (
            <ListItemButton direction='row'
                key={id}
                onClick={() => {navigate(path)}}
                >
                {title}
            </ListItemButton>
        ))}

            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Census Forms" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" sx={{ paddingLeft: 5 }}>
                { SideformData.map(({id, title, path}) => (
                    <ListItemButton 
                        key={id}
                        onClick={() => {navigate(path)}}
                        >
                        {title}
                    </ListItemButton>
                ))}
                </List>
            </Collapse>

        </List>
    </Box>
    </div>
    

  )
}

export default SidenavDesign
