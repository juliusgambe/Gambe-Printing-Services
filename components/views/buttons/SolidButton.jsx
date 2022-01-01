import React, { useEffect } from "react";
import Styles from "./SolidButton.module.css"
export default function SolidButton({ children, customStyle, onClick }) {

    return (
        <button className={Styles.btn} style={customStyle} onClick={onClick}>
            {children}
        </button>
    )

}