import React from 'react'
import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom'

const Youtuber = () => {
    return (
        <section id="youtuberPage">
            <h2>🍳요리 유튜버 모음</h2>

            <div className="youtuber__inner">
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
    )
}

export default Youtuber