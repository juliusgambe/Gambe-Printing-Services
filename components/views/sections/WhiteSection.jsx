import React from "react";
import Styles from "./WhiteSection.module.css"
export default function WhiteSection({ children, style }) {

    return (<div className={Styles.content} style={style}>
        {children}
    </div>)
}