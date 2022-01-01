import { useContext, useEffect, useState } from "react";
import Styles from "./navBar.module.css";
import MenuItems from "./menuItems";
import NavBarContext from "./NavBarContext";
import NavBarButton from "./navBarButton"

export default function navBar() {

    const [clicked, setClicked] = useState(false)
    const [navBarTransparent, setNavBarTransparent] = useState(true)
    const { isNavBarHidden, setIsNavBarHidden } = useContext(NavBarContext)

    const items = MenuItems;

    const clickHandler = () => {
        // toggle the click
        setClicked(!clicked)
    }

    useEffect(() => {

        //auto unclick when window size is big
        const resizeHandler = () => {
            if (window.innerWidth > 900) {
                console.log("More than 900!")
                setClicked(false)
            }

        }

        const changeBackground = () => {
            console.log(":LOL")
            if (window.scrollY > 50) {
                setNavBarTransparent(false)
            } else {
                setNavBarTransparent(true)
            }
        }

        window.addEventListener('resize', resizeHandler);
        window.addEventListener('scroll', changeBackground);
    }, [])

    function navBarMenuClassName() {

        var className = ""

        if (clicked) {
            className + `${Styles.navBarMenu_active}`
        } else {
            className + `${Styles.navBarMenu}`
        }

        if (navBarTransparent) {
            console.log("Yes! lol")
            className + `${Styles.transparent}`
        } else {

        }
        console.log(`Info: ${className}`)
        return className

        //clicked ? Styles.navBarMenu_active : Styles.navBarMenu
    }

    return (
        <>
            {/* <div style={{ display: isNavBarHidden ? 'none' : 'flex' }}> */}
            <div className={isNavBarHidden ? Styles.navBarHidden : (navBarTransparent ? `${Styles.navBar} ${Styles.transparent}` : `${Styles.navBar}`)}>
                <div className={Styles.navBarIcons}>
                    <h1 className={Styles.title}> G | P </h1>
                </div>
                <div className={clicked ? `${Styles.navBarMenu_active}` : `${Styles.navBarMenu}`}>
                    {
                        items.map((item) => {
                            return (<>
                                <NavBarButton title={item.itemName} route={item.route} />
                            </>)
                        })
                    }
                </div>
                <div className={Styles.navBarHamburger} onClick={clickHandler}>
                    <i className={clicked ? `${Styles.icon} fas fa-times ` : `${Styles.icon} fas fa-bars `}></i>
                </div>
            </div>
            {/* </div> */}


        </>

    )
}