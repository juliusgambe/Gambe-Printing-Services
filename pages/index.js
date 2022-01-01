import Head from 'next/head'
import Image from 'next/image'
import Styles from '../styles/Home.module.css'

import WhiteSection from '../components/views/sections/WhiteSection'
import Footer from '../components/sections/footer'

import Button from "../components/views/buttons/SolidButton"
import HeroSection from "../components/sections/home/heroSection"
import TestimonialSection from '../components/sections/home/TestimonialSection'
import CardSection from '../components/views/sections/CardSection'
import { smallPrintsData } from "../data/Data"

function HeroSectionButtons() {
  return (
    <>
      <Button> Contact Us </Button>
      <Button> Order </Button>
    </>
  )
}

export default function Home() {
  return (
    <div className={Styles.container}>
      <HeroSection buttons={<HeroSectionButtons />} src="/printing.mp4">
        <h1> Gambe Printing Serivces </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus justo sed eros pretium porta. Cras ac metus iaculis, varius purus blandit, aliquet justo. Sed faucibus, ex in viverra congue, lacus nisl tempus urna, vitae sollicitudin orci mauris lacinia tellus. Donec blandit maximus nunc, sed elementum nisl consectetur sit amet. Donec sed volutpat sapien, ut feugiat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </HeroSection>
      <TestimonialSection />
      <WhiteSection>
        <h1> Small Prints </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed hendrerit nisl. Integer pretium tortor eu mattis volutpat. Ut faucibus tincidunt libero quis vestibulum. Nam malesuada ipsum ac vestibulum iaculis. Mauris diam tortor, iaculis ut efficitur quis, elementum quis dolor. Nullam quis libero volutpat, congue libero sit amet, porta mauris. In in aliquet sapien. Fusce elementum eget lacus non placerat. Ut commodo ex ornare orci pulvinar, quis feugiat purus porta. Aenean eleifend vehicula dolor vitae tempor. Nullam id elit pharetra, tempor odio posuere, aliquet neque. Nullam in justo ex. Nunc gravida fermentum erat eget cursus. Nam venenatis porttitor tortor ut molestie. Ut vitae sem arcu. </p>
        <CardSection data={smallPrintsData} >

        </CardSection>
      </WhiteSection>

      <Footer />
    </div>
  )
}
