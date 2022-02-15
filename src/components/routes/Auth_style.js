import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 100vh;
  background-color: #0b0409;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const Logo = styled.span`
  font-size: 30px;
  color: whitesmoke;
`;

const InputContainer = styled.div`
  display: flex;
  height: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const SocialBtnContainer = styled.div`
  display: flex;
  height: 80px;
`;

const SocialButton = styled.button`
  color: whitesmoke;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid whitesmoke;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  margin-top: 20px;
  &:hover {
    background-color: whitesmoke;
    color: #0b0409;
  }
`;

const FooterSpan = styled.span`
  color: whitesmoke;
  font-size: 15px;
`;

export {
  Container,
  Content,
  InputContainer,
  SocialBtnContainer,
  SocialButton,
  Logo,
  Header,
  Footer,
  FooterSpan,
};
