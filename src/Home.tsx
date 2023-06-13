import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const SearchBox = styled.div<{ isPc: boolean }>`
  border: 2px solid #2a4d7c;
  border-radius: 5px;
  width: ${(props) => (props.isPc ? "40vw" : "70vw")};
  margin-left: ${(props) => (props.isPc ? "30vw" : "15vw")};
  text-align: center;
  line-height: 40px;
  height: 40px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  font-family: "Pretendard-Regular", sans-serif;
  margin-top: 10px;
  cursor: pointer;
  svg {
    display: block;
    position: absolute;
    right: ${(props) => (props.isPc ? "15px" : "5px")};
    height: 20px;
    top: 10px;
    float: right;
    fill: rgb(42, 77, 124, 0.7);
  }
  p {
    display: inline;
  }
`;

const Title = styled.div<{ isPc: boolean }>`
  font-size: ${(props) => (props.isPc ? "60px" : "50px")};
  color: #2a4d7c;
  text-align: center;
  margin-top: 50vh;
  font-family: "Archivo", sans-serif;
  span {
    color: white;
  }
  cursor: pointer;
`;

const Test = styled.div<{ imgUrl: string }>`
  position: absolute;
  left: 0px;
  top: 0px;
  background-size: cover;
  background-image: url(${(props) => props.imgUrl});
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

function Home() {
  const isPc = useMediaQuery({ query: "(min-width: 720px)" });
  const navigate = useNavigate();
  const onSearchClick = () => {
    navigate("/search");
  };
  const [imgUrl, setImgUrl] = useState("img/5.jpg");
  useEffect(() => {
    if (isPc) {
      setImgUrl("img/5.jpg");
    } else {
      setImgUrl("img/4.jpg");
    }
  }, [isPc]);

  return (
    <>
      <Test imgUrl={imgUrl} />
      <Title isPc={isPc}>
        <span>YAM</span> EAT
      </Title>
      <SearchBox isPc={isPc} onClick={onSearchClick}>
        <p>궁금한 제품을 검색해보세요! :p</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </SearchBox>
    </>
  );
}

export default Home;
