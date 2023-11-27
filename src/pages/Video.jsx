import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import Main from '../components/section/Main';


const Video = () => {
    const {videoId} = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
        .then((data) => {
            console.log(data)
            setVideoDetail(data.items[0])
            setLoading(false)
        })

        fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`)
        .then((data) => {
            setComments(data.items.slice(0,10))
        })
    }, [videoId])

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main
        title="비디오 페이지"
        description="선택하신 영상을 볼 수 있는 페이지입니다."
    >
        <section id="videoPage" className={channelPageClass}>
            <h2 className='blind'>비디오</h2>
            {videoDetail && (
                <div className="video__view">
                <div className="video__play">
                    <ReactPlayer 
                        playing={true}
                        url={`https://www.youtube.com/watch?v=${videoId}`}
                        width="100%"
                        height="100%"
                        style={{position: "absolute", top:0, left: 0}}
                    />
                </div>
                <div className="video__info">
                    <h2 className='video__title'>{videoDetail.snippet.title}</h2>
                    <div className="video__channel">
                        <div className="id">
                            <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                        </div>
                        <div className="count">
                            <span className='view'>👁‍🗨{videoDetail.statistics.viewCount}</span>
                            <span className='like'>👍{videoDetail.statistics.likeCount}</span>
                            <span className='comment'>💬{videoDetail.statistics.commentCount}</span>
                        </div>
                    </div>
                    <div className="video__desc">
                    {videoDetail.snippet.description}
                    </div>
                </div>
            </div>
            )}

            <h2 className='comment__title'>댓글</h2>
            <ul className='comment__wrap'>
                {comments.map(comment => (
                    <li key={comment.id} className='comment'>
                        <h3 className='comment__author'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                        <p className='comment__cont'>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                    </li>
                ))}
            </ul>
            
        </section>
    </Main>
  )
}

export default Video