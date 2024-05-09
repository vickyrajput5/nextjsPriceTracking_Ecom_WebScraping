"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
const heroImage = [
    {src:'/assets/images/hero-1.svg', alt:'Smartwatch'},
    {src:'/assets/images/hero-2.svg', alt:'bag'},
    {src:'/assets/images/hero-3.svg', alt:'lamp'},
    {src:'/assets/images/hero-4.svg', alt:'air fryer'},
    {src:'/assets/images/hero-5.svg', alt:'chair'}
]
const HeroCarousal = () => {
    return(
        <div className="hero-carousel">
            <Carousel
            showThumbs={false}
            // autoPlay
            // infiniteLoop
            // interval={2000}
            showArrows={false}
            showStatus={false}
            >
                {heroImage.map((hero)=>(
                 
                        <Image
                        src={hero.src}
                        alt={hero.alt}
                        key={hero.alt}
                        width={484}
                        height={484}
                        className="object-contain"
                        />
                   
                ))} 
            </Carousel>
            <Image 
            src='assets/icons/hand-drawn-arrow.svg'
            alt="arrow"
            width={175}
            height={175}
            className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
            />
        </div>
    )
}
export default HeroCarousal