import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBox = styled.div<{ isPc: boolean }>`
  border: 2px solid black;
  width: ${(props) => (props.isPc ? "40vw" : "80vw")};
  margin: 0 auto;
  margin-top: 60vh;
  text-align: center;
  line-height: ${(props) => (props.isPc ? "40px" : "30px")};
  height: ${(props) => (props.isPc ? "40px" : "30px")};
`;

function Home() {
  const isPc = useMediaQuery({ query: "(min-width: 1080px)" });
  const navigate = useNavigate();
  const onSearchClick = () => {
    navigate("/search");
  };

  return (
    <SearchBox isPc={isPc} onClick={onSearchClick}>
      원하는 제품을 검색하세요
    </SearchBox>
  );
}

export default Home;
