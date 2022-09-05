import { makeStyles } from "@material-ui/core"

export const LayoutStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    widthDesktop: {
        height: '700px',
        width: '1000px',
        paddingTop: '100px',
        paddingLeft: '110px',
    },
    widthMobile: {
        height: '500px',
        width: '500px',
        paddingTop: '100px',
        paddingLeft: '50px',
    },
}))