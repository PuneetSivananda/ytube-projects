import { makeStyles } from "@material-ui/core/styles"
import { darkBlue, veryPaleBlue, brightBlue, desaturatedblue } from "../constants"


const styles = makeStyles(() => ({
    container: {
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        fontSize: "18px",
        "& *": {
            margin: "13px 0"
        }
    },
    title: {
        color: darkBlue,
        fontWeight: 900,
        fontSize: "32px",
    },
    card: {
        width: "450px",
        backgroundColor: "white",
        color: desaturatedblue,
        borderRadius: "20px",
        overflow: "hidden",
        // Center the element on the screen
        margin: "50px auto"
    },
    heroImage: {
        width: "100%"
    },
    orderDescription: {
        lineHeight: "25px"
    },
    planContainer: {
        fontSize: "16px",
        backgroundColor: veryPaleBlue,
        padding: "25px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        "& a": {
            color: brightBlue,
            fontSize: "13px",
            fontWeight: 700
        },
        "& a:hover": {
            opacity: .8,
            textDecoration: "none"
        },
        "& strong": {
            color: darkBlue
        }
    },
    planDescription: {
        lineHeight: "20px",
        marginRight: "75px"
    },
    "@global": {
        button: {
            width: "100%",
            border: "none",
            borderRadius: "12px",
            fontWeight: "700",
            fontSize: "0.9rem",
            cursor: "pointer"
        }
    },
    proceedButton: {
        backgroundColor: brightBlue,
        padding: "1rem 0",
        color: "white",
        boxShadow: "0 20px 30px -8px rgb(197 189 245)",
        "&:hover": {
            opacity: "0.8"
        }
    },
    cancelButton: {
        backgroundColor: "white",
        color: desaturatedblue,
        marginTop: "22px",
        "&:hover": {
            color: "black"
        }
    }
}))

export default styles;