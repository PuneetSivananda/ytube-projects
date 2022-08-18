import React from "react"
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

const Card = () => {
    const classes = styles()
    return (
        <div className={classes.card}>
            <img className={classes.heroImage} src="./images/illustration-hero.svg" alt="Hero" />
            <div className={classes.container}>
                <h2 className={classes.title}>Order Summary</h2>
                <p className={classes.orderDescription}>
                    Now you can listen to millions of songs, audiobooks and podcasts
                    on any device anywhere you like !
                </p>
                <div className={classes.planContainer}>
                    <img src="./images/icon-music.svg" alt="Icon Music" />
                    <div className={classes.planDescription}>
                        <strong>Annual Plan</strong>
                        <p>$59.99/year</p>
                    </div>
                    <a href="/#">Change</a>
                </div>
                <button className={classes.proceedButton}>Proceed to Payment</button>
                <button className={classes.cancelButton}>Cancel Order</button>
            </div>
        </div>
    )
}

export default Card