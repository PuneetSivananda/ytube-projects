import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { darkBlue } from "../constants"
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
        backgroundColor: "white"
    },
    heroImage: {
        width: "100%"
    },
    orderDescription: {
        lineHeight: "25px"
    },
    planContainer: {
        fontSize: "16px",
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
                    <div class="plan-description">
                        <strong>Annual Plan</strong>
                        <p>$59.99/year</p>
                    </div>
                    <a href="#">Change</a>
                </div>
                <button>Hello Button</button>
            </div>
        </div>
    )
}

export default Card