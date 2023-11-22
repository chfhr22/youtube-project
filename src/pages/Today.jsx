import React, { useEffect, useState } from 'react'

import { todayText } from '../data/today'
import Main from '../components/section/Main'

const Today = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    })

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main
            title="오늘의 추천 메뉴"
            description="오늘의 추천 영상(메뉴)가 나오는 페이지입니다."
        >
            <section id="todayPage">
                <h2>🍙오늘의 추천 메뉴</h2>
                {todayText.map((today, key) => (
                    <div className={`today__inner ${channelPageClass}`} key={key}>
                        <div className="today__thumb"></div>
                        <div className="today__text">
                            <span className='today'>오늘 뭐먹지?</span>
                            <h3 className='title'>{today.title}</h3>
                            <p className='desc'>{today.desc}</p>
                            <div className='info'>
                                <span className="author">{today.author}</span>
                                <span className="date">{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Today