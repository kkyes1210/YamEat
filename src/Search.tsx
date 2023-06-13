import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

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
  p {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 5px;
  }
`;

const Content = styled.div<{ isPc: boolean }>`
  font-family: "Pretendard-Regular", sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.isPc ? "70%" : "100%")};
  background-color: pink;
  z-index: -1;
  margin-left: ${(props) => (props.isPc ? "15%" : "0")};
  ${MonthNewMenu} {
    background-color: #b3b3eb;
    padding-top: 120px;
    p {
      padding-left: ${(props) => (props.isPc ? "" : "10px")};
    }
  }
`;

const SlideBox = styled.div`
  background-color: yellow;
  margin: 0px;
  padding: 0px;
`;

function Search() {
  const navigate = useNavigate();
  const isPc = useMediaQuery({ query: "(min-width: 720px)" });
  const onHomeClick = () => {
    navigate("/");
  };

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
          <p>이달의 인기 신메뉴</p>
        </MonthNewMenu>
      </Content>
    </>
  );
}

export default Search;
