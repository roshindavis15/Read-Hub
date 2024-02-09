import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000,
        cssEase: "linear"
    };

    return (
        <div className="container mx-auto">
            
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={slide.id}>
                        <img src={slide.imageUrl} alt={slide.id} className="w-full" />
                        <div className="text-center"><h1 className="text-3xl font-bold mb-4">{slide.content}</h1></div>
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
