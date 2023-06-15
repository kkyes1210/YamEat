import Bar from "./Components/Bar";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Footer from "./Components/Footer";

const Bottom = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: #2a4d7c;
  text-align: center;
  font-family: "Archivo", sans-serif;
`;

const Logo = styled.div`
  height: 50px;
  width: 50px;
  background-image: url("/img/logo_color.png");
  background-size: cover;
  margin: 0 auto;
`;

const Exp = styled.div`
  font-size: 13px;
  color: #2a4d7c;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  padding-left: 10px;
  border-radius: 10px;
  :focus {
    border: 1px solid #c6c6c6;
    outline: 0;
    text-align: left;
  }
  //background-color: #f5fbff;
  border: 1px solid #c6c6c6;
`;

const Id = styled(Input)`
  margin-bottom: 10px;
`;
const Password = styled(Input)`
  margin-bottom: 10px;
`;

const Wrapper = styled.div<{ isPc: boolean }>`
  font-family: "Pretendard-Regular", sans-serif;
  position: absolute;
  width: ${(props) => (props.isPc ? "40vw" : "80vw")};
  //min-height: 100px;
  top: ${(props) => (props.isPc ? "120px" : "100px")};
  left: ${(props) => (props.isPc ? "30vw" : "10vw")};
  //right: 0;
  margin-left: auto;
  margin-right: auto;
`;

function Signup() {
  const isPc = useMediaQuery({ query: "(min-width: 720px)" });
  return (
    <>
      <Bar />
      <Wrapper isPc={isPc}>
        <Logo />
        <Title>SIGN UP</Title>
        <Exp>아이디</Exp>
        <Id></Id>
        <Exp>비밀번호</Exp>
        <Password />
        <Exp>비밀번호 재확인</Exp>
        <Password />
      </Wrapper>
      <Bottom>
        <Footer />
      </Bottom>
    </>
  );
}

export default Signup;
