import { makeStyles } from "@material-ui/core"

export const TopnavStyles = makeStyles(theme => ({
    topbar: {
        [theme.breakpoints.up('sm')]:{
            marginLeft: '200px',
        },
        backgroundColor: 'white',
        
    },
    topbarLogo:{
        height: '60px',
        width: '150px'
    },
    topbarLogos:{
        color: 'white',
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    }
}))