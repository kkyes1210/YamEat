import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import Footer from "./Footer";

const Nav = styled.div`
  height: 50px;
  width: 100%;
  background-color: #2a4d7c;
  text-align: center;
  display: flex;
  //justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  p {
    color: white;
    font-family: "Archivo", sans-serif;
    font-size: 20px;
    line-height: 50px;
  }
`;

const Logo = styled.div`
  display: inline-block;
  height: 30px;
  width: 30px;
  line-height: 50px;
  background-image: url("img/logo.png");
  background-size: cover;
`;

const Menu = styled.div`
  height: 28px;
  width: 28px;
  line-height: 50px;
  background-image: url("img/menu.png");
  background-size: cover;
  position: absolute;
  right: 8px;
`;

const SearchBox = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #c6c6c6;
  svg {
    position: absolute;
    height: 25px;
    fill: rgb(42, 77, 124, 0.7);
    //background-color: whitesmoke;
    right: 12.5px;
    top: 62.5px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  padding-right: 50px;
  padding-left: 8px;
  border: none;
  :focus {
    border: none;
    outline: 0;
  }
  font-size: 1rem;
  font-family: "Pretendard-Regular", sans-serif;
`;

const MonthNewMenu = styled.div`
  width: 100%;
  //height: 300px;
  h1 {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 5px;
  }
  padding-bottom: 20px;
  border-bottom: 1px solid #c6c6c6;
`;

const Content = styled.div<{ isPc: boolean }>`
  font-family: "Pretendard-Regular", sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.isPc ? "70%" : "100%")};
  //background-color: pink;
  z-index: -1;
  margin-left: ${(props) => (props.isPc ? "15%" : "0")};
  ${MonthNewMenu} {
    //background-color: #b3b3eb;
    padding-top: 120px;
    h1,
    p {
      padding-left: 10px;
    }
  }
`;

const PImg = styled.div<{ url: string; isPc: boolean }>`
  height: ${(props) => (props.isPc ? "160px" : "120px")};
  background-color: #f6f5ec;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const Box = styled.div`
  //background-color: #c7c775;
  margin: 0px;
  padding: 0px;
  word-break: keep-all;
  cursor: pointer;
  h2 {
    font-size: 16px;
    padding-top: 5px;
    font-weight: 500;
  }
`;

const Rank = styled.div`
  //background-color: #fae2e2;
  width: 100%;
  margin-top: 40px;
  cursor: pointer;
  //height: 200px;
  border-bottom: 1px solid #c6c6c6;
  padding-bottom: 30px;
  margin-bottom: 30px;
  h1 {
    display: inline-block;
    padding-left: 10px;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 5px;
  }
  span {
    padding-left: 15px;
    font-size: 12px;
    color: #2a4d7c;
  }
`;

const List = styled.div`
  width: 100%;
  padding-left: 10px;
  height: 35px;
  line-height: 35px;
  //background-color: #c4b4b4;
  //border: 1px solid black;
  display: flex;
  span {
    //background-color: red;
    padding-left: 0px;
    font-size: 18px;
    padding-right: 10px;
  }
  h2 {
    //background-color: yellow;
    padding-left: 10px;
    display: inline-block;
    font-size: 18px;
  }
  img {
    padding-left: 10px;
    //background-color: yellow;
  }
`;

const Item = [
  ["배스킨라빈스", "스트로베리 하트 모찌", "02.png"],
  ["파리바게뜨", "오렌지&자몽 레어치즈 타르트", "04.png"],
  ["투썸플레이스", "스트로베리 초콜릿 생크림", "01.jpg"],
  ["GS25", "그릭 프로즌 요거트", "05.jpg"],
  ["던킨도너츠", "마이멜로디 딸기 츄이스티", "03.png"],
];

const ListItem = [
  ["연세우유 초코생크림 빵", "cu.jpg"],
  ["사랑에 빠진 딸기", "br.png"],
  ["쿠로미 초코 츄이스티", "dunkin.png"],
  ["자바 칩 프라푸치노", "starbucks.png"],
  ["스파이시 이탈리안", "subway.png"],
];

function Search() {
  const navigate = useNavigate();
  const isPc = useMediaQuery({ query: "(min-width: 720px)" });
  const onHomeClick = () => {
    navigate("/");
  };
  const [num, setNum] = useState(4);
  useEffect(() => {
    if (isPc) {
      setNum(4);
    } else {
      setNum(2.5);
    }
  }, [isPc]);

  return (
    <>
      <Nav>
        <LogoBox onClick={onHomeClick}>
          <p>YAM EAT</p>
          <Logo />
        </LogoBox>
        <Menu />
      </Nav>
      <SearchBox>
        <Input />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </SearchBox>
      <Content isPc={isPc}>
        <MonthNewMenu>
          <h1>이달의 인기 신메뉴</h1>
          <Swiper
            slidesPerView={num}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            style={{ marginLeft: "10px" }}
          >
            {Item.map((item, index) => (
              <SwiperSlide>
                <Box>
                  <PImg url={"/product/" + item[2]} isPc={isPc}></PImg>
                  <h2>{item[1]}</h2>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </MonthNewMenu>
        <Rank>
          <h1>리뷰 랭킹</h1>
          <span>2023.05.30-2023.06.12 기준</span>
          {ListItem.map((item, index) => (
            <List>
              <span>{index + 1}</span>
              <h2>{item[0]}</h2>
              <img src={"/logo/" + item[1]}></img>
            </List>
          ))}
        </Rank>
        <Footer />
      </Content>
    </>
  );
}

export default Search;
