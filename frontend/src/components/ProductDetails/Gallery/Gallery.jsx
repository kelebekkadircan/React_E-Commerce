import { useState } from "react";
import "./Gallery.css";
import productsData from '../../../data.json';
import PropTypes from 'prop-types';
import Slider from "react-slick";


function NextBtn({ onClick }) {
    return (
        <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
            onClick={onClick}
            style={{ zIndex: "2" }}
        >
            <i className="bi bi-chevron-right"></i>
        </button>
    );
}

NextBtn.propTypes = {
    onClick: PropTypes.func
}

function PrevBtn({ onClick }) {
    return (
        <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
            onClick={onClick}
            style={{ zIndex: "2" }}
        >
            <i className="bi bi-chevron-left"></i>
        </button>
    );
}


PrevBtn.propTypes = {
    onClick: PropTypes.func
}




const Gallery = () => {

    const [activeImg, setActiveImg] = useState({
        img: productsData[0].img.singleImage,
        imgIndex: 0
    });

    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
    };

    return (
        <div className="product-gallery">
            <div className="single-image-wrapper">
                <img src={`/${activeImg.img}`} id="single-image" alt="" />
            </div>
            <div className="product-thumb">
                <div className="glide__track" data-glide-el="track">
                    <ol
                        className="gallery-thumbs glide__slides"
                    >
                        <Slider {...sliderSettings} >
                            {productsData[0].img.thumbs.map((item, i) => (
                                <li
                                    key={i}
                                    className="glide__slide glide__slide--active"
                                    onClick={() => setActiveImg({
                                        img: productsData[0].img.thumbs[i],
                                        imgIndex: i
                                    })}
                                >
                                    <img
                                        src={`/${item}`}
                                        alt=""
                                        className={`img-fluid ${activeImg.imgIndex === i ? "active" : ""}`}
                                    />
                                </li>
                            ))}
                        </Slider>


                    </ol>
                </div>
                <div className="glide__arrows" data-glide-el="controls">


                </div>
            </div>
        </div>
    );
};

export default Gallery;