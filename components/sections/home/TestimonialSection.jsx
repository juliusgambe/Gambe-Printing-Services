import Head from 'next/head'
import WhiteSection from '../../views/sections/WhiteSection'
import Styles from './TestimonialSection.module.css'

import data from "./TestimonialData"
import FlexSection from '../../views/sections/FlexSection'

export default function TestimonialSection() {
    return (
        <WhiteSection style={{ padding: "0px 8vh 50px 8vh" }}>
            <FlexSection>
                {
                    data.map((data) => {

                        const loc = "/logo/" + data
                        return (

                            <img src={loc} className={Styles.img_logo} />

                        )
                    })
                }
            </FlexSection>
        </WhiteSection>
    )
}