import React, { useEffect, useState } from 'react'
import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main'

const Youtuber = () => {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
    })

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main
            title="요리 유튜버 모음"
            description="요리 유튜버를 한눈에 볼 수 있는 페이지입니다."
        >
            <section id="youtuberPage">
                <h2>🍳요리 유튜버 모음</h2>

                <div className={`youtuber__inner ${channelPageClass}`}>
                    {youtuberText.map((youtuber, key) => (
                        <div className="youtuber play__icon" key={key}>
                            <div className="youtuber__img">
                                <Link to={`/channel/${youtuber.channel}`}>
                                    <img src={youtuber.img} alt="" />
                                </Link>
                            </div>
                            <div className="youtuber__info">{youtuber.author}</div>
                        </div>
                    ))}
                </div>

            </section>
        </Main>
    )
}

export default Youtuber