import { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/api';

import Youtuber from '../components/contents/Youtuber'
import Today from '../components/contents/Today'
import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider';


const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);
    const [channelVideo5, setChannelVideo5] = useState([]);

    useEffect(() => {
        const v1 = 'UCyozK5OFN5lDrwim5wqQnLA';
        const v2 = 'UC0htUSwcxfSGNfK_5Q28JkA';
        const v3 = 'UCyn-K7rZLXjGl7VXGweIlcA';
        const v4 = 'UCC9pQY_uaBSa0WOpMNJHbEQ';
        const v5 = 'UCPWFxcwPliEBMwJjmeFIDIg';

        const fetchResults = async() => {
            try {
                const videosData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
                setChannelVideo(videosData.items);

                const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
                setChannelVideo2(videosData2.items);

                const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
                setChannelVideo3(videosData3.items);

                const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
                setChannelVideo4(videosData4.items);

                const videosData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
                setChannelVideo5(videosData5.items);
            } catch (error) {
                console.log("Error -> ", error);
            } 
        }
        fetchResults();
    }, [])
    return (
        <Main
            title="요리 유튜버"
            description="요리 유튜버 모음 사이트에 오신것을 환영합니다."
        >
            <Today />
            <Youtuber />

            <VideoSlider videos={channelVideo} title='🍖취미로 요리하는 남자 최신 영상' name='v1' />
            <VideoSlider videos={channelVideo2} title='🥐뚝딱이형 최신 영상' name='v2' />
            <VideoSlider videos={channelVideo3} title='🍔백종원 최신 영상' name='v3' />
            <VideoSlider videos={channelVideo4} title='🍕자취요리신 최신 영상' name='v4' />
            <VideoSlider videos={channelVideo5} title='🍗하루한끼 최신 영상' name='v5' />
        </Main>
    )
}

export default Home