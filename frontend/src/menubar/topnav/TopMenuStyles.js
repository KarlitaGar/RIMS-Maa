import { makeStyles } from "@material-ui/core"

export const TopMenuStyles = makeStyles(theme => ({
    topbar: {
        [theme.breakpoints.up('sm')]:{
            marginLeft: '200px',
        }
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