import React from "react";
import Link from "next/link";
import Styles from "./navBarButton.module.css";

export default function navBarButton({ title, route }) {

    return (
        <div className={Styles.btn}>
            <Link href={route}>
                <h4> {title} </h4>
            </Link>
        </div>
    );
}
