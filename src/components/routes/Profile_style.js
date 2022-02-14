import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

const ChaneNameSpan = styled.span`
  font-size: 20px;
  color: whitesmoke;
  margin-bottom: 20px;
`;

const ChangeNameInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  padding-left: 20px;
  text-align: center;
`;

const ChangeNameBtn = styled.input`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #23a1dc;
  margin-left: -39px;
  color: whitesmoke;
  padding: 0;
  cursor: pointer;
  &:active {
    width: 39px;
    height: 39px;
  }
`;

const LogOutBtn = styled.button`
  margin-top: 100px;
  color: whitesmoke;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid whitesmoke;
  padding: 10px;
  background-color: #0b0409;
  border-radius: 20px;
  &:hover {
    background-color: whitesmoke;
    color: #0b0409;
  }
`;

export {
  ProfileContainer,
  ChaneNameSpan,
  ChangeNameInput,
  ChangeNameBtn,
  LogOutBtn,
};
