import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  font-family: "Pretendard-Regular", sans-serif;
  //margin-bottom: 30px;
  font-size: 12px;
  p {
    color: #c6c6c6;
    padding-bottom: 3px;
  }
  h1 {
    color: #2a4d7c;
    padding-top: 5px;
    font-size: 15px;
    font-family: "Archivo", sans-serif;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <p>서비스 소개 / Github</p>
      <p>Copyright 2023 (YamEat) All rights reserved.</p>
      <h1>YAM EAT</h1>
    </Wrapper>
  );
}
export default Footer;
