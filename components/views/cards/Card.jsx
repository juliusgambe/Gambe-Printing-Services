import React from "react";
import { useState } from "react";
import Styles from "./Card.module.css";

import Button from "../buttons/SolidButton";

export default function Card({ children, hasImage, imageSrc, cardTitle, cardDescription, cardButtonTitle, onClick }) {

    const { image, setImage } = useState(false)

    const buttonStyle = {
        boxSizing: "border-box",
        width: "80%",
        margin: "16px 0px",
        position: "abosolute",
        bottom: "16px"
    }

    return (
        <div className={Styles.card}>
            <div className={Styles.card_content}>

                <img src={imageSrc} className={Styles.card_image} style={{ display: hasImage ? "block" : "none" }} />
                <h3 style={{ textAlign: "left", padding: "0px 16px" }}> {cardTitle} </h3>
                <div className={Styles.card_description}>
                    {cardDescription}
                </div>
                <div className={Styles.spacer} style={{ display: hasImage ? "none" : "block", height: hasImage ? "0" : "4vh" }}>&nbsp;</div>
            </div>
            <div className={Styles.card_button}>
                <Button customStyle={buttonStyle} onClick={onClick}>
                    {cardButtonTitle}
                </Button>
            </div>

        </div>
    );
}