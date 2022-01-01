import React, { useState } from 'react'
import SolidButton from '../buttons/SolidButton';
import Styles from './ImageSlider.module.css';

export default function ImageSlider({ images, url }) {

    const [current, setCurrent] = useState(0);
    const length = 0;

    if (!Array.isArray(images) || images.length <= 0) {
        console.log("Error: Data passed to image slider is not an array")

        return null //if array is empty or is not an array
    }
    length = images.length;
    console.log("Images " + images)
    const leftClicked = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const rightClicked = () => {
        setCurrent(current === length - 1 ? 0 : current + 1) // last index
    }

    const leftButtonStyle = {
        position: 'absolute',
        bottom: '50%',
        left: '16px',
    }

    const rightButtonStyle = {
        position: 'absolute',
        bottom: '50%',
        right: '16px',
    }
    return (
        <section className={Styles.image_slider_wrapper}>
            <SolidButton customStyle={leftButtonStyle} onClick={leftClicked}> Left </SolidButton>
            <SolidButton customStyle={rightButtonStyle} onClick={rightClicked}> Right </SolidButton>
            {
                images.map((sourceString, index) => {
                    return (
                        <div className={index === current ? `${Styles.slide} ${Styles.active}` : Styles.slide} key={index}>
                            {
                                index === current && <img src={url + sourceString} />
                            }
                        </div>
                    )
                })
            }
        </section>
    );
}