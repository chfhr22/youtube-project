# 요리 레시피 유튜브 사이트 만들기
유튜브 API를 이용하여 요리 레시피를 모아보기.
요리 유튜버 / 추천 레시피 / 1분 레시피 / 다이어트 레시피

<img src=https://chfhr22.github.io/youtube-project/src/assets/img/image.png>

## 라이브러리 설치
npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper                                                                                  

react-router-dom : React 애플리케이션에서 다양한 페이지 간의 네비게이션을 처리하고 URL을 관리하기 위한 라우팅 라이브러리입니다. 주로 단일 페이지 애플리케이션 (SPA)에서 사용되며, 여러 페이지 간의 전환 및 상태 관리를 용이하게 만들어줍니다.                  
axios : 웹 애플리케이션에서 서버와의 HTTP 요청을 쉽게 만들고 처리하기 위해 사용됩니다.                                                                       
react-icon : React 애플리케이션에서 아이콘을 사용하기 쉽게 만들어진 라이브러리입니다.                                                                                    
react-player : 동영상 및 음악을 재생하기 위한 컴포넌트를 제공하는 라이브러리입니다. 이 라이브러리는 다양한 동영상 및 오디오 소스에 대한 플레이어를 구현하는 데 도움이 됩니다.                                                    
sass : CSS를 더 강력하고 효율적으로 작성할 수 있도록 도와주는 CSS 확장 언어입니다.                                                                    
react-helmet-async :  React 애플리케이션에서 동적으로 <head> 요소를 조작하기 위한 라이브러리입니다.                                                               
swiper : 모바일 및 데스크톱에서 터치 슬라이드 기능을 제공하는 강력한 슬라이더 라이브러리입니다.

## swiper 적용
(https://swiperjs.com/demos)에서 원하는 디자인을 찾은 후                                                                    
CodeSandbox에서 React를 클릭하면 코드가 나오는데 해당 문서를 보면서 적용

## .env파일 활용
보안상 다른 사람에게 공유되면 안되는 정보들을 env파일에 저장한 후 gitignore에 등록하면 git에 등록해도 해당 정보는 올라가지 않는데,                                                              
사용은 만약 API키를 가져온다고 예시를 들으면 API키의 값이 들어가는 곳에 env파일에 API키값을 저장해 두고 저장된 변수를 해당 위치에 적용시켜 사용할 수 있습니다.                                                  

process.env.변수이름

## youtube API로 원하는 정보 가져오기
[youTubeAPI](https://developers.google.com/youtube/v3/docs)
[youTubeV3](https://rapidapi.com/Glavier/api/youtube-v311)
<!-- api.js -->

import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 48,
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};


이것을 통해 YouTube API에 요청을 보내고 axios.get을 사용하여 요청을 수행, RapidAPI의 인증 정보와 함께 설정된 options 객체를 사용합니다.
비동기 함수이므로 await를 사용하여 비동기 작업이 완료될 때까지 기다린 후 결과 데이터를 반환합니다.

## 주소창의 정보 가져오기
const {searchId} = useParams();

## useState와 useEffect
const [변수, 함수] = useState([]);

  useEffect(() => {
    fetch(``)
  }, [searchId]);

React Hooks로, 함수형 컴포넌트에서 상태와 생명주기와 관련된 작업을 수행하는 데 사용됩니다.                                                             
페이지에 변화가 생기면 useState의 함수가 알아차리고 변화를 변수에 할당해 주며,                                                                              
변화가 생겼을 시 useEffect의 함수가 실행되어 fetch로 데이터를 주는 것입니다.

### useState
상태를 함수형 컴포넌트에서 사용할 수 있게 해주는 Hook입니다.                                                                     
useState는 배열을 반환하며, 첫 번째 요소는 상태 변수의 현재 값이고, 두 번째 요소는 해당 상태를 갱신할 함수입니다.

### useEffect
함수형 컴포넌트에서 생명주기 메서드와 비슷한 기능을 제공하는 Hook입니다.                                                                             
컴포넌트가 마운트, 언마운트, 업데이트될 때 특정 작업을 수행하도록 설정할 수 있습니다.

## postman 사용하기
### postman이란?
Postman은 API개발을 위한 협업 및 테스트 도구로 널리 사용되는 프로그램입니다.                                                                    
Postman을 사용하면 API를 만들고 테스트하며, API 엔드포인트 간에 데이터를 주고받는 데 도움이 됩니다.

## search페이지에 더보기 만들기
const [nextPageToken, setNextPageToken] = useState(null); 을 만든 뒤,                                                                 
만약 setNextPageToken함수가 실행되어 값이 변하면 setVideos함수를 실행해 새로운 데이터를 출력하도록 fetchVideos를 선언했습니다.                                                              
더보기 버튼을 만들어 버튼에 onClick={handleLoadMore}를 해두고 버튼을 클릭하면 handleLoadMore가 실행되도록 했는데,                                                                               
handleLoadMore함수의 내용은 nextPageToken가 있다면 fetchVideos를 실행하여 더보기가 작동되도록 했습니다.


## 영상 클릭시 영상 보여주기
비디오를 보여주는 Video페이지를 만들어 준 뒤,                                                                      
```js
const Video = () => {
    const {videoId} = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
        .then((data) => {
            console.log(data)
            setVideoDetail(data.items[0])
        })
    }, [videoId])
}  
```   

로 해당 비디오의 정보를 가져왔습니다.                                                

콘솔에 보여진 data를 토대로 원하는 데이터를 뽑아서 해당 페이지에 보여지게 했습니다.

## component의 정보를 조건에 따라 원하는 것만 가져오기
VideoSearch가 video와 channel에서 보여지는데,                                                                                                     
VideoSearch의 info를 video에서는 보여주고 channel에서는 안보이게 하려했습니다.                                                                                     
이는 VideoSearch에 prop을 이용해, video에서 true를 주고 channel에서 false를 줘서 보이고 안보이게 처리했습니다.                                                                                                       

## scrollTo
페이지가 전환되면 최상단으로 이동
```js
const ScrollTo = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname]);

    return null;
}
```
useEffect로 경로 변화를 인지하면 window.scrollTo(0,0)으로 최상단으로 이동

## SEO란?
Search Engine Optimization(SEO)은 검색 엔진에서 웹 페이지가 노출되는 최적화를 의미합니다. SPA인 경우에는 초기 로딩 이후에 페이지가 동적으로 갱신되기 때문에, 검색 엔진이 페이지의 초기 렌더링을 인지하기 어려울 수 있습니다. 이로 인해 SPA는 SEO에 불리한 면이 있습니다.                                                                                  

이러한 문제를 해결하기 위해 react-helmet과 같은 라이브러리를 사용하여 페이지 전환 시에 메타데이터를 동적으로 변경할 수 있습니다. react-helmet은 React 애플리케이션에서 헤더 태그를 조작하는 데 사용되며, 이를 통해 각 페이지의 타이틀, 설명, 키워드 등의 메타데이터를 설정하여 검색 엔진이 페이지를 더 잘 이해하고 색인(index)할 수 있도록 도와줍니다.                                                                  

## Helmet
import { Helmet } from 'react-helmet';

<!-- Main.jsx -->
<Helmet
    titleTemplate="%s | Cooking Youtube"
    defaultTitle="Cooking Youtube"
    defer={false}
>
    {props.title && <title>{props.title}</title>}
    <meta name="description" content={props.description} />
</Helmet>


<!-- 그 외의 components -->
<Main
  title="요리 유튜버"
  description="요리 유튜버 모음 사이트에 오신것을 환영합니다."
>
이렇게 메인에 기본값을 설정한 후 각 component마다 원하는 meta데이터를 넣어주면 react도 SEO최적화로 인해 노출빈도가 올라갈 수 있다.

## Suspense.js (App.js에서 사용)
[사용법](https://react.dev/reference/react/Suspense)

Suspense는 리액트에서 비동기적으로 데이터를 가져올 때 사용되는 기능입니다.                                                                        
이를 사용하면 데이터를 가져오는 동안 로딩 상태를 처리하고, 데이터가 준비되면 컴포넌트가 렌더링되도록 할 수 있습니다.                                                     

const Home = lazy(() => import('./pages/Home'))
const Today = lazy(() => import('./pages/Today'))

<Suspense fallback={<Main />}>
  <Route path="/" element={<Home />} /> 
  <Route path="/today" element={<Today />} />
</Suspense>
비동기로 불러올 컴포넌트를 Suspense로 감싼 후 lazy를 사용하여 비동기적으로 컴포넌트를 로딩하여 컴포넌트가 필요한 시점에만 로딩되게 했습니다.

## 클릭시 해당 위치를 가져와 active 붙여주기

```js
import { useLocation } from 'react-router-dom';

<ul className='menu'>
    {headerMenus.map((menu, key) => (
        <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
            <Link to={menu.src}>
                {menu.icon}{menu.title}
            </Link>
        </li>
    ))}
</ul>
```

useLocation을 이용하여 현재 페이지의 경로(주소창의 주소)를 추출하고, 3항연산자를 이용하여 location.pathname과 menu.src이 같으면 active가 붙도록 하였습니다.

## 트러블슈팅
<details>
<summary>npx create-react-app 실패</summary>

```js                                    
npm install -g npm@latest                                                                  
```                                    
   
이 명령어를 통해 npm을 최신 버전으로 업데이트한 후, 다시 명령어를 실행하니 에러가 사라졌습니다.                                                                            
이 문제는 Node.js와 npm의 버전 차이로 인해 발생한 문제였고, 최근에 Node.js를 새로 설치한 이후에 npm이 업데이트 되지 않아 발생한 문제로 보입니다.                                             
이로 인해 npm 버전이 뒤떨어져 있었고, 이로 인해 발생한 호환성 문제가 이러한 에러를 초래되었습니다.                                    
</details>
