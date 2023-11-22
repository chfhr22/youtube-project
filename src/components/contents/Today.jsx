import React from 'react'

import { todayText } from '../../data/today'
import { Link } from 'react-router-dom'


const Today = () => {
    return (
        <section id='today'>
            <h2>🍙오늘의 추천 메뉴</h2>
            <div className="today__inner">
                <div className="today__thumb">
                    <Link
                        to={`/video/${todayText[0].videoId}`}
                        style={{backgroundImage: `url(${todayText[0].img})`}}
                    >
                    </Link>
                </div>
                <div className="today__text">
                    <span className='today'>오늘 뭐먹지?</span>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>{todayText[0].desc}</p>
                    <div className='info'>
                        <span className="author">{todayText[0].author}</span>
                        <span className="date">{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today