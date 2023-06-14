import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LoginState } from "../atoms";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
  cursor: pointer;
`;

function Bar() {
  const navigate = useNavigate();
  //const location = useLocation(); //현재 경로 알 수 있음
  const onHomeClick = () => {
    navigate("/");
  };
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const onMenuClick = () => {
    //로그인 상태가 아니라면 login 페이지로 이동
    //로그인 상태라면 mypage 페이지로 이동
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/mypage");
    }
  };

  return (
    <Nav>
      <LogoBox onClick={onHomeClick}>
        <p>YAM EAT</p>
        <Logo />
      </LogoBox>
      <Menu onClick={onMenuClick} />
    </Nav>
  );
}
export default Bar;
