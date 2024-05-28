import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./carousel.module.scss"

const Carousel = () => {
    const images = [
        "https://st12.stpulscen.ru/images/product/072/066/921_big.jpg",
        "https://st12.stpulscen.ru/images/product/072/063/785_big.jpg",
        'https://rosrealt.ru/pics/dom/dinskaya/2022/02/18/1185569_1b.jpg',
        // Добавьте ссылки на другие изображения
    ];

    const settings = {
        dots: false, // Показывать точки для навигации
        infinite: true, // Бесконечный цикл прокрутки
        speed: 500, // Скорость прокрутки
        slidesToShow: 1, // Количество отображаемых слайдов за раз
        slidesToScroll: 1 // Количество прокручиваемых слайдов за раз
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;