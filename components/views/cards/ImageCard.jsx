import React from "react";
import Card from "./Card";
import Styles from "./Card.module.css";

export default function ImageCard({ imageSrc, cardTitle, cardDescription, cardButtonTitle }) {
    return (
        <Card cardTitle={cardTitle} cardDescription={cardDescription} cardButtonTitle={cardButtonTitle} >
            
        </Card>
    )
}