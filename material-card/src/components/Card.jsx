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
                    <div class={classes.planDescription}>
                        <strong>Annual Plan</strong>
                        <p>$59.99/year</p>
                    </div>
                    <a href="/#">Change</a>
                </div>
                <button>Hello Button</button>
            </div>
        </div>
    )
}

export default Card