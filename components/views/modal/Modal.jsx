import React, { useContext } from "react";
import OutlineButton from "../buttons/SolidButton";
import Styles from "./Modal.module.css";
import NavBarContext from "../navbar/NavBarContext";
export default function Modal({ displayModal, onClickClose, children }) {

    const { isNavBarHidden, setIsNavBarHidden } = useContext(NavBarContext); // use context declared in _app.js

    function mainOnClickClose(e) {
        onClickClose()

        setIsNavBarHidden(false)

    }

    function doSomethingElse(e) {
        console.log("do something else")
        e.stopPropagation()
    }
    const customButtonStyle = {
        position: 'absolute',
        top: '16px',
        right: '32px',
        background: 'transparent',
        fontSize: '2rem'
    }

    return (
        <div style={{ display: displayModal ? 'block' : 'none' }} className={Styles.modal} onClick={mainOnClickClose} >
            <div className={Styles.modal_content} onClick={doSomethingElse}>
                <div className={Styles.close_button} onClick={mainOnClickClose}>
                    <i className="fas fa-times"> </i>

                </div>
                {children}
            </div>
        </div>
    )
}