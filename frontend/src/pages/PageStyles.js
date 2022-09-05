import { makeStyles } from "@material-ui/core"

export const PageStyles = makeStyles(theme => ({
    pageLayout: {
        [theme.breakpoints.up('xs')]:{
            backgroundColor: 'yellow',
            width: '450px',
            height: '1100px',
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.primary.main,
            width: '1000px',
            height: '750px',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: 'green',
            width: '1000px',
            height: '750px',
        },
    },
    cardPadding: {
        padding: theme.spacing(1),
    },
    drawerPaper: {
        width: '200px',
        color: 'white',
        backgroundColor: 'blue',
    },
    buttonStyle:{
        borderBottom: '1px solid black',
        backgroundColor: '#004d40'
    },
    inputStyle:{
        width: "400px",
    },
    inputStyleOther:{
        width: "830px",
    },
    spaceCol:{
        paddingTop: '15px',
    },
    spaceRow:{
        width: '30px',
        height: '20px',
    },
    spaceButton:{
        paddingTop: '30px',
    },
    active:{
        backgroundColor: '#004d40',
        borderBottom: '1px solid'
    },
    notActive:{
        borderBottom: '1px solid #004d40'
    }
}))