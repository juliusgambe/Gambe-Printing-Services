import React from 'react'
import ImageSlider from '../../components/views/imageSlider/ImageSlider'
import { smallPrintsData } from "../../data/Data";
import Styles from "./LargePrints.module.css"
export default function index() {

    return (<>
        <div className={Styles.large_prints_wrapper}>
            <ImageSlider images={smallPrintsData[0].images} url={'cards/'}>

            </ImageSlider>
        </div>

    </>)
}