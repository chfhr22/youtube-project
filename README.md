# 요리 레시피 유튜브 사이트 만들기
유튜브 API를 이용하여 요리 레시피를 모아보기.
요리 유튜버 / 추천 레시피 / 1분 레시피 / 다이어트 레시피

## 라이브러리 설치
npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper <br>

react-router-dom : React 애플리케이션에서 다양한 페이지 간의 네비게이션을 처리하고 URL을 관리하기 위한 라우팅 라이브러리입니다. 주로 단일 페이지 애플리케이션 (SPA)에서 사용되며, 여러 페이지 간의 전환 및 상태 관리를 용이하게 만들어줍니다.<br>
axios : 웹 애플리케이션에서 서버와의 HTTP 요청을 쉽게 만들고 처리하기 위해 사용됩니다.<br>
react-icon : React 애플리케이션에서 아이콘을 사용하기 쉽게 만들어진 라이브러리입니다.<br>
react-player : 동영상 및 음악을 재생하기 위한 컴포넌트를 제공하는 라이브러리입니다. 이 라이브러리는 다양한 동영상 및 오디오 소스에 대한 플레이어를 구현하는 데 도움이 됩니다.<br>
sass : CSS를 더 강력하고 효율적으로 작성할 수 있도록 도와주는 CSS 확장 언어입니다.<br>
react-helmet-async :  React 애플리케이션에서 동적으로 <head> 요소를 조작하기 위한 라이브러리입니다. <br>
swiper : 모바일 및 데스크톱에서 터치 슬라이드 기능을 제공하는 강력한 슬라이더 라이브러리입니다.

## swiper 적용
(https://swiperjs.com/demos)에서 원하는 디자인을 찾은 후
CodeSandbox에서 React를 클릭하면 코드가 나오는데 해당 문서를 보면서 적용

## .env파일 활용
보안상 다른 사람에게 공유되면 안되는 정보들을 env파일에 저장한 후 gitignore에 등록하면 git에 등록해도 해당 정보는 올라가지 않는데,
사용은 만약 API키를 가져온다고 예시를 들으면 API키의 값이 들어가는 곳에 env파일에 API키값을 저장해 두고 저장된 변수를 해당 위치에 적용시켜 사용할 수 있습니다.

process.env.변수이름

## 주소창의 정보 가져오기
const {searchId} = useParams();

## useState와 useEffect
const [변수, 함수] = useState([]);

  useEffect(() => {
    fetch(``)
  });

React Hooks로, 함수형 컴포넌트에서 상태와 생명주기와 관련된 작업을 수행하는 데 사용됩니다.
페이지에 변화가 생기면 useState의 함수가 알아차리고 변화를 변수에 할당해 주며,
변화가 생겼을 시 useEffect의 함수가 실행되어 fetch로 데이터를 주는 것입니다.

### useState
상태를 함수형 컴포넌트에서 사용할 수 있게 해주는 Hook입니다.
useState는 배열을 반환하며, 첫 번째 요소는 상태 변수의 현재 값이고, 두 번째 요소는 해당 상태를 갱신할 함수입니다.

### useEffect
함수형 컴포넌트에서 생명주기 메서드와 비슷한 기능을 제공하는 Hook입니다. 컴포넌트가 마운트, 언마운트, 업데이트될 때 특정 작업을 수행하도록 설정할 수 있습니다.
## postman 사용하기
### postman이란?
Postman은 API개발을 위한 협업 및 테스트 도구로 널리 사용되는 프로그램입니다. Postman을 사용하면 API를 만들고 테스트하며, API 엔드포인트 간에 데이터를 주고받는 데 도움이 됩니다.

## 로딩속도 차이에 의한 오류
map을 사용

## search페이지에 더보기 만들기
const [nextPageToken, setNextPageToken] = useState(null); 을 만든 뒤,
만약 setNextPageToken함수가 실행되어 값이 변하면 setVideos함수를 실행해 새로운 데이터를 출력하도록 fetchVideos를 선언했습니다.
더보기 버튼을 만들어 버튼에 onClick={handleLoadMore}를 해두고 버튼을 클릭하면 handleLoadMore가 실행되도록 했는데, handleLoadMore함수의 내용은 nextPageToken가 있다면 fetchVideos를 실행하여 더보기가 작동되도록 했습니다.
