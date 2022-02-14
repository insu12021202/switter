import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

const FormInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
`;

const SubmitInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
`;

const SingInSpan = styled.span`
  font-size: 18px;
  margin-top: 20px;
  color: whitesmoke;
`;

export { Form, FormInput, SubmitInput, SingInSpan };
