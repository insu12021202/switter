import { authService, firebaseInstance } from "../../fBase";
import AuthForm from "../AuthForm";
import {
  Container,
  Content,
  InputContainer,
  SocialButton,
  SocialBtnContainer,
  Logo,
  Header,
  Footer,
  FooterSpan,
} from "./Auth_style";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <Container>
      <Content>
        <Header>
          <Logo>Insu's Twitter</Logo>
        </Header>
        <InputContainer>
          <AuthForm />
          <SocialBtnContainer>
            <SocialButton onClick={onSocialClick} name="google">
              Continue with Google
            </SocialButton>
            <SocialButton onClick={onSocialClick} name="github">
              Continue with GitHub
            </SocialButton>
          </SocialBtnContainer>
        </InputContainer>
        <Footer>
          <FooterSpan>&copy; {new Date().getFullYear()} Insu Yeo</FooterSpan>
        </Footer>
      </Content>
    </Container>
  );
};

export default Auth;
