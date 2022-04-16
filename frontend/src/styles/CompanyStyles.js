import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) => ({

    cardMedia: {
      paddingTop: "56.25%",

    },

    footer: {
        backgroundColor: theme.palette.background.color,
        padding: "25px 0",
    }
})); 

export default useStyles;