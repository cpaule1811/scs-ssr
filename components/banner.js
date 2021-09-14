import Image from "next/dist/client/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import bannerImgOne from '../img/NewYork.jpg'
import bannerImgTwo from '../img/London.jpg'
import bannerImgThree from '../img/Sydney.jpg'
import bannerImgFour from '../img/NewYork2.jpg'

export default function Banner() { 

     const slides = [
         {
             name: "First", 
             bannerImg: bannerImgOne,
             caption: "Specialist Scalable International Structured Funding and investment products",
             captionPos: "bottom-right-positioning",
             alt: ""
         },
         {
             name: "Second", 
             bannerImg: bannerImgTwo,
             caption: "Intelligent, sophisticated & robust solutions.",
             captionPos: "top-right-positioning",
             alt: ""
         },
         {
             name: "Third", 
             bannerImg: bannerImgThree,
             caption: "SCS are experts in international tax, finance, strategy & funding products and services",
             captionPos: "top-left-positioning",
             alt: ""
         },
         {
             name: 'Fourth',
             bannerImg: bannerImgFour,
             caption: "SCS is a team of skilled senior executives with market-leading experience",
             captionPos: "bottom-right-positioning",
             alt: ""
         }
     ]

     return (
         <div>
         <Swiper
             modules={[Autoplay, Navigation]}
             autoplay={{ delay: 6000 }}
             slidesPerView={1}
             navigation
             
             >
             {slides.map(item => {
                 return <SwiperSlide key={item.name}>
                        <div className="banner">
                        <Image className="banner-img" src={item.bannerImg} alt={item.alt} /> 
                        </div>
                        <div className={`${item.captionPos} caption-text`}>{item.caption}</div>
                    </SwiperSlide>
                 }
             )}
         </Swiper>
         
         </div>
     )
}