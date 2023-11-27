import { GiCook } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { PiBowlFoodFill } from "react-icons/pi";
// import { AiOutlineCaretRight } from "react-icons/ai";
import { AiFillGithub, AiFillCodepenCircle, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

export const menuText = [
    {
        title: "메인 메뉴",
        icon: <FaBowlFood />,
        src: "/"
    },
    {
        title: "오늘 뭐먹지?",
        icon: <PiBowlFoodFill />,
        src: "/today"
    },
    {
        title: "요리 유튜버 소개",
        icon: <GiCook />,
        src: "/youtuber"
    },
]

export const keywordText = [
    {
        title: "1분요리 뚝딱이형",
        src: "/search/뚝딱이형",
    },
    {
        title: "먹어볼래TryToEat",
        src: "/search/먹어볼래",
    },
    {
        title: "취미로 요리하는 남자",
        src: "/search/취미로 요리하는 남자",
    },
    {
        title: "백종원",
        src: "/search/백종원",
    },
    {
        title: "자취요리신",
        src: "/search/자취요리신",
    },
    {
        title: "쿠킹하루",
        src: "/search/쿠킹하루",
    },
    {
        title: "육식맨",
        src: "/search/육식맨",
    },
    {
        title: "하미마미",
        src: "/search/하미마미",
    },
    {
        title: "꿀주부",
        src: "/search/꿀주부",
    },
    {
        title: "이남자의cook",
        src: "/search/이남자의cook",
    },
    {
        title: "쿠킹하루",
        src: "/search/쿠킹하루",
    },
    {
        title: "메리즈니부엌",
        src: "/search/메리즈니부엌",
    },
    {
        title: "쿡언니네",
        src: "/search/쿡언니네",
    },
    {
        title: "요리왕비룡",
        src: "/search/요리왕비룡",
    },
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/chfhr22/webs2024",
        icon: <AiFillGithub />
    },
    {
        title: "codepen",
        src: "https://codepen.io",
        icon: <AiFillCodepenCircle />
    },
    {
        title: "youtube",
        src: "https://youtube.com",
        icon: <AiFillYoutube />
    },
    {
        title: "instagram",
        src: "https://instagram.com",
        icon: <AiOutlineInstagram />
    },
]