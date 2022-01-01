import React from "react";
import FlexSection from "../views/sections/FlexSection";
import Styles from "./Footer.module.css";
import Link from "next/link"

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <FlexSection customStyle={{ height: "100%" }}>
                <div className={Styles.icons}>
                    <h4> Developed by Julius Bryan Gambe </h4>
                    <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com"> <i className="fab fa-github"> </i> </a>
                    <h4> Copyright &#169; 2021 Julius Bryan Reynon Gambe </h4>
                </div>
                <div className={Styles.links}>
                    <ul>
                        <li> Some Link </li>
                        <li> Another Link </li>
                    </ul>
                </div>
            </FlexSection>
        </div>
    )
}