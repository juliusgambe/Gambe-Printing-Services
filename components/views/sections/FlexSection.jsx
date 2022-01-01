import React from "react";
import Styles from "./FlexSection.module.css"

export default function FlexSection({ children, customStyle }) {
    return (
        <div className={Styles.container} style={customStyle}>
            {children}
        </div>
    )
}