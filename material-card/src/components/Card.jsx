import React from "react"
import styles from "./Card.styles"

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