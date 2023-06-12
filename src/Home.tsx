import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const SearchBox = styled.div<{ isPc: boolean }>`
  border: 2px solid #2a4d7c;
  border-radius: 5px;
  width: ${(props) => (props.isPc ? "40vw" : "80vw")};
  margin-left: ${(props) => (props.isPc ? "30vw" : "10vw")};
  text-align: center;
  line-height: ${(props) => (props.isPc ? "40px" : "30px")};
  height: ${(props) => (props.isPc ? "40px" : "30px")};
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  font-family: "Pretendard-Regular";
  margin-top: 10px;
  cursor: pointer;
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
        궁금한 제품을 검색해보세요! :p
      </SearchBox>
    </>
  );
}

export default Home;
