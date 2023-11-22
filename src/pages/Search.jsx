import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoSearch from '../components/video/VideoSearch';
import { fetchFromAPI } from '../utils/api';
import Main from '../components/section/Main';



const Search = () => {
  const {searchId} = useParams();
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setVideos([]);
    fetchVideos(searchId);
    setLoading(true)
  }, [searchId]);

  // --더보기--
  const fetchVideos = (query, pageToken = '') => {
    fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
      .then((data) => {
        setNextPageToken(data.nextPageToken);
        setVideos((prevVideos) => [...prevVideos, ...data.items])
        console.log(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false)
      })
      
  }

  const handleLoadMore = () => {
    if(nextPageToken){
      fetchVideos(searchId, nextPageToken);
    }
  }
  // --더보기--


  const channelPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main
      title="요리 유튜버 검색 결과"
      description="요리 유튜버 검색 결과가 나오는 페이지입니다."
    >
    <section id="searchPage">
      <h2>🔎{searchId} 검색 결과</h2>

      <div className={`video__inner ${channelPageClass}`}>
                <VideoSearch videos={videos} showInfo={true}/>
            </div>
    </section>

    <div className="video__more">
      <button className='button__more' onClick={handleLoadMore}>더보기</button>
    </div>
    </Main>
  )
}

export default Search