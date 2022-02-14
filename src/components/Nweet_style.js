import styled from "styled-components";

const NweetItemContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;

const NweetItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  background-color: whitesmoke;
  border-radius: 20px;
`;

const NweetImg = styled.img`
  max-width: 50px;
  border-radius: 50%;
  margin-left: -40px;
  margin-top: 20px;
  border: 1px solid black;
`;

const NweetButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const NweetDeleteButton = styled.button`
  color: #b83521;
  margin-bottom: 50px;
  cursor: pointer;
  margin-right: 5px;
`;

const NweetEditButton = styled.button`
  color: #23a1dc;
  margin-bottom: 50px;
  cursor: pointer;
  margin-left: 5px;
`;

const NweetEditInput = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
`;

const NweetEditSubmitBtn = styled.input`
  width: 50px;
  height: 40px;
  border-radius: 20px;
  margin-left: -50px;
  padding: 0;
  background-color: #23a1dc;
  color: whitesmoke;
  cursor: pointer;
`;

const NweetEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NweetEditCancleBtn = styled.button`
  color: whitesmoke;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 40px;
  cursor: pointer;
`;

export {
  NweetItem,
  NweetImg,
  NweetItemContainer,
  NweetButtonContainer,
  NweetDeleteButton,
  NweetEditButton,
  NweetEditInput,
  NweetEditSubmitBtn,
  NweetEditCancleBtn,
  NweetEditContainer,
};
