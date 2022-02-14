import styled from "styled-components";

const NweetFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;

const NweetForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const NweetSubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 50%;
`;

const NweetImgSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const NweetImgSubmitBtn = styled.label`
  margin-top: 20px;
  color: #23a1dc;
  cursor: pointer;
  &:hover {
    font-size: 17px;
  }
`;
const NweetImgSubmitInput = styled.input`
  display: none;
`;
const NweetSubmitBtn = styled.input`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #23a1dc;
  margin-left: -39px;
  color: whitesmoke;
  cursor: pointer;
  &:active {
    width: 39px;
    height: 39px;
  }
`;

const NweetInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  padding-left: 20px;
`;

const NweetImgPreviewContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const NweetImgCancleBtn = styled.button`
  color: whitesmoke;
  margin-left: 20px;
  cursor: pointer;
`;

export {
  NweetFormContainer,
  NweetForm,
  NweetInput,
  NweetSubmitContainer,
  NweetImgSubmitContainer,
  NweetSubmitBtn,
  NweetImgSubmitBtn,
  NweetImgSubmitInput,
  NweetImgPreviewContainer,
  NweetImgCancleBtn,
};
