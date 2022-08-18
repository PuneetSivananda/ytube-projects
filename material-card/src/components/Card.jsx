import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(() => ({
    card: {
        width: "450px",
        backgroundColor: "white"
    },
    heroImage: {
        width: "100%"
    }
}))

const Card = () => {
    const classes = styles()
    return (
        <div className={classes.card}>
            <img className={classes.heroImage} src="./images/illustration-hero.svg" alt="Hero" />
        </div>
    )
}

export default Card