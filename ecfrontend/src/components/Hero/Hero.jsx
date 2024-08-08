import React from 'react'
import Slider from "react-slick";
import Image1 from "../../assets/hero/banner.png";
import Image2 from "../../assets/hero/banner1.png";
import Image3 from "../../assets/hero/banner2.png";
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Airpods Pro Max",
        title: "Wireless",
        title2: "HeadSets",
        
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Onyx ",
        title: "Speakers",
        title2: "Onyx Speakers",
        
    },
    {
        id: 3,
        img: Image3,
        subtitle: "MacBook",
        title: "macbook",
        title2: "pro",
        
    },
]

const Hero = () => {
    const settings ={
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplayspeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
    // rounded-3xl 
  return (
    <div className='container'>
        <div className='overflow-hidden min-h-[550px] sm:min-h-[650px] hero-bg-color from-gray-300/80 flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
            {/* hero page */}
                <Slider {...settings}>
                    {
                        HeroData.map((data) =>(
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/* text section */}
                                    <div className='flex flex-col justify-center gap-5 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                                        <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                        <h1 className='text-5xl uppercase  dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                        <a href="/products">
                                            <div>
                                                <Button 
                                                text="Shop Now"
                                                bgColor="bg-primary"
                                                textColor="text-white"
                                                />
                                            </div>
                                        </a>
                                    </div>

                                    {/* image section */}
                                    <div className='order-1 sm:order-2'>
                                        <div>
                                            <img src={data.img} alt="" 
                                            className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-150 lg:scale-100 object-contain mx-auto drop-shadow-[-8px_4px_6px_ rgba(0,0,0,.4)] relative z-40'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Hero