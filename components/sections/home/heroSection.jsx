import Styles from "./heroSection.module.css"
import Button from "../../views/buttons/SolidButton"

export default function heroSection(props) {

    return (
        <div className={Styles.hero_container} style={props.style}>
            <video src={props.src} autoPlay loop muted />
            <img src={props.imgSrc} />
            <div className={Styles.content}>
                {props.children}
                <div className={Styles.buttons}>
                    {props.buttons}
                </div>
            </div>

        </div>
    );
}
