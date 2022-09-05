import { makeStyles } from "@material-ui/core"

export const SidenavStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]:{
            width: '200px'
        }
    },
    drawerPaper: {
        flexShrink: 0,
        color: 'black',
        paddingTop: '30px',
        backgroundColor: 'white',
        width: '240px',
        height: '563px',
        [`& .MuiDrawer-paper`]: { width: '240px', boxSizing: 'border-box' },
    },
    drawerTop: {
        width: '100px',
        height: '50px',
        flexShrink: 0,
        color: 'white',
        backgroundColor: 'red',
    },
    logoDiv:{
        borderBottom: '1px solid #004d40',
        padding: theme.spacing(4)
    },
    logoStyle:{
        width: theme.spacing(14),
        height: theme.spacing(8)
    },
    active:{
        backgroundColor: '#004d40',
        borderBottom: '1px solid'
    },
    notActive:{
        borderBottom: '1px solid red'
    }
}))