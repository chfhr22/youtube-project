import React from 'react'

import { youtuberText } from '../../data/youtuber'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Youtuber = () => {
    return (
        <section id="youtuber">
            <h2>🍳요리 유튜버 모음</h2>

            <div className="youtuber__inner">
                <Swiper
                    slidesPerView={9}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation, Autoplay, Pagination]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        960: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        },
                        1600: {
                            slidesPerView: 7,
                            spaceBetween: 20
                        }
                    }}

                >
                    {youtuberText.map((youtuber, key) => (
                        <SwiperSlide className="youtuber play__icon" key={key}>
                            <div className="youtuber__img">
                                <Link to={`/channel/${youtuber.channel}`}>
                                    <img src={youtuber.img} alt="" />
                                </Link>
                            </div>
                            <div className="youtuber__info">{youtuber.author}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}

export default Youtuber