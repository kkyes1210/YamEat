import styled from "styled-components";
import Bar from "./Components/Bar";
import Footer from "./Components/Footer";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const Bottom = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;

const Logo = styled.div`
  height: 50px;
  width: 50px;
  background-image: url("/img/logo_color.png");
  background-size: cover;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: #2a4d7c;
  text-align: center;
  font-family: "Archivo", sans-serif;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  padding-left: 10px;
  :focus {
    border-bottom: 1px solid #c6c6c6;
    outline: 0;
    text-align: left;
  }
  //background-color: #f5fbff;
  border-bottom: 1px solid #c6c6c6;
`;

const Id = styled(Input)`
  margin-top: 20px;
  margin-bottom: 5px;
`;

const PassWord = styled(Input)`
  //background-color: #c9e1f6;
`;

const Btn = styled.div`
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;

const Exp = styled.p`
  padding-top: 40px;
  font-size: 12.5px;
  margin-bottom: 5px;
  color: #656565;
  span {
    font-weight: 600;
    color: #2a4d7c;
  }
`;

const LoginBtn = styled(Btn)`
  background-color: #2a4d7c;
  margin-top: 10px;
  color: white;
`;

const SignUpBtn = styled(Btn)`
  background-color: #c9e1f6;
  //border: 1px solid #2a4d7c;
`;

const Wrapper = styled.div<{ isPc: boolean }>`
  font-family: "Pretendard-Regular", sans-serif;
  position: absolute;
  width: ${(props) => (props.isPc ? "40vw" : "80vw")};
  //min-height: 100px;
  top: ${(props) => (props.isPc ? "150px" : "120px")};
  left: ${(props) => (props.isPc ? "30vw" : "10vw")};
  //right: 0;
  margin-left: auto;
  margin-right: auto;
`;

function Login() {
  const isPc = useMediaQuery({ query: "(min-width: 720px)" });
  const navigate = useNavigate();
  const onSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <Bar />
      <Wrapper isPc={isPc}>
        <Logo />
        <Title>L O G I N</Title>
        <Id placeholder="아이디를 입력하세요" />
        <PassWord placeholder="비밀번호를 입력하세요" />
        <LoginBtn>로 그 인</LoginBtn>
        <Exp>
          <span>YAM EAT</span>이 처음이신가요?
        </Exp>
        <SignUpBtn onClick={onSignUpClick}>회원가입 하기</SignUpBtn>
      </Wrapper>
      <Bottom>
        <Footer />
      </Bottom>
    </>
  );
}

export default Login;
