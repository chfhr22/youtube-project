import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoSearch from '../components/video/VideoSearch';
import { fetchFromAPI } from '../utils/api';



const Search = () => {
  const {searchId} = useParams();
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);

  useEffect(() => {
    setVideos([]);
    fetchVideos(searchId);
  }, [searchId]);

  // --더보기--
  const fetchVideos = (query, pageToken = '') => {
    fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
      .then((data) => {
        setNextPageToken(data.nextPageToken);
        setVideos((prevVideos) => [...prevVideos, ...data.items])
        console.log(data)
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      })
  }

  const handleLoadMore = () => {
    if(nextPageToken){
      fetchVideos(searchId, nextPageToken);
    }
  }
  // --더보기--

  return (
    <>
    <section id="searchPage">
      <h2>🔎{searchId} 검색 결과</h2>

      <div className='video__inner'>
                <VideoSearch videos={videos} showInfo={true}/>
            </div>
    </section>

    <div className="video__more">
      <button className='button__more' onClick={handleLoadMore}>더보기</button>
    </div>
    </>
  )
}

export default Search