import React from "react";
import Styles from "./Section.module.css";

export default function Section({ children, customStyle }) {
    return (
        <div className={Styles.container} style={customStyle}>
            {children}
        </div>
    )
}