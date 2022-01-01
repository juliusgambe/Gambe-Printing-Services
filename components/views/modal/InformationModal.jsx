import React, { useState } from 'react'
import OutlineButton from '../buttons/SolidButton'
import Styles from './InformationModal.module.css'
import ImageSlider from '../imageSlider/ImageSlider'

// Pass this modal into the Modal componenet as a child
export default function InformationModal({data, url}) {
    return (
        <div className={Styles.information_modal_wrapper}>
            <div className={Styles.information_modal_image_wrapper}>
                {/* <img className={Styles.information_modal_image} src="/cards/calendar.jpeg" /> */}
                <ImageSlider images={data.images} url={url}>

                </ImageSlider>
            </div>

            <div className={Styles.information_modal_content}>
                <h1> Some Title </h1>
                <h3> Ullamco sunt eu qui minim adipisicing ullamco veniam laborum id ad eiusmod laboris magna in.</h3>
                <hr />
                <p> Laboris ad anim dolore esse adipisicing laborum. Deserunt ad consequat eiusmod voluptate excepteur qui veniam minim adipisicing veniam reprehenderit nostrud. Consequat consequat sint sit ea et pariatur mollit ut tempor reprehenderit enim labore. Consectetur ad occaecat aliqua sunt ex quis esse sit. Veniam pariatur cupidatat ut id mollit nulla. Nulla occaecat deserunt id fugiat labore ex magna ea irure aute. Nisi excepteur voluptate laborum irure magna qui pariatur est est qui voluptate. </p>
                <OutlineButton> Order Now </OutlineButton>
            </div>
        </div>
    )
}