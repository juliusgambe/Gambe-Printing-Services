import React, { useContext } from "react";
import HeroSection from "../../components/sections/home/heroSection";
import FlexSection from "../../components/views/sections/FlexSection";
import Section from "../../components/views/sections/Section";
import Card from "../../components/views/cards/Card";
import CardSection from "../../components/views/sections/CardSection"
import { smallPrintsData } from "../../data/Data"
import WhiteSection from "../../components/views/sections/WhiteSection";
import Footer from "../../components/sections/footer";
import { useState } from "react/cjs/react.development";
import Modal from "../../components/views/modal/Modal";
import NavBarContext from "../../components/views/navbar/NavBarContext";
import InformationModal from "../../components/views/modal/InformationModal";
// Small Prints Index Page

export default function index() {

    const [modalShown, setModalShown] = useState(false);
    const { isNavBarHidden, setIsNavBarHidden } = useContext(NavBarContext)
    const [cardViewed, setCardViewed] = useState({})

    function cardOnClick(newCardViewed) {
        //render the modal view by setting the state to true

        setModalShown(true);
        setIsNavBarHidden(true);
        setCardViewed(newCardViewed)
        console.log("hide now" + isNavBarHidden)
        //TODO: render a page for each card

    }

    function cardOnClose() {
        //pass this method to the button inside the modal view to set the state over here to hide the modal view
        setModalShown(false);
    }

    return (
        <>

            <Modal displayModal={modalShown} onClickClose={cardOnClose}>
                <InformationModal data={cardViewed} url={'cards/'}></InformationModal>
            </Modal>

            <HeroSection imgSrc="cards/calendar.jpeg" style={{ height: "50vh" }}>
                <h1> Small Prints </h1>
            </HeroSection>
            <WhiteSection style={{ marginTop: "-50px" }}>
                <h1> Quality </h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis rutrum sapien, tincidunt tempor nisl egestas nec. Praesent egestas, dolor molestie sagittis varius, justo leo efficitur nulla, sit amet egestas nisi libero nec diam. Nulla dapibus placerat eros eu semper. Aenean ut magna sed turpis consequat laoreet tristique vitae purus. Phasellus pulvinar risus quis erat pellentesque, quis finibus libero feugiat. Ut et eros vitae ligula faucibus viverra id et velit. Ut malesuada orci eu felis sollicitudin scelerisque. Phasellus feugiat dolor mi, eget venenatis lectus dapibus semper. Nunc ut tincidunt odio.
                <h1> Products </h1>
                <CardSection data={smallPrintsData} onClick={cardOnClick}>

                </CardSection>
            </WhiteSection>

            <Footer />

        </>
    )
}