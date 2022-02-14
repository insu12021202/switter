import React, { useState } from "react";
import { dbService, storageServiece } from "../fBase";
import { v4 as uuidv4 } from "uuid";
import {
  NweetForm,
  NweetFormContainer,
  NweetImgCancleBtn,
  NweetImgPreviewContainer,
  NweetImgSubmitBtn,
  NweetImgSubmitContainer,
  NweetImgSubmitInput,
  NweetInput,
  NweetSubmitBtn,
  NweetSubmitContainer,
} from "./NweetFactory_style";

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      //attachment가 있으면 사진의 url을 attachmentUrl 변수에 업데이트
      const attachmentRef = storageServiece
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("nweets").add(nweetObj);
    setNweet("");
    setAttachment("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  const onFileChange = (event) => {
    //사진 첨부 이벤트 처리 함수
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader(); //FileReader 생성해서 이미지 보기
    reader.onloadend = (finishedEvent) => {
      // 밑의 readAsDataURL이 실행되면 finishedEvent 발생
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => setAttachment(null);
  return (
    <NweetFormContainer>
      <NweetForm onSubmit={onSubmit}>
        <NweetSubmitContainer>
          <NweetInput
            type="text"
            value={nweet}
            onChange={onChange}
            placeholder="What's on your mind?"
            maxLength={120}
          />
          <NweetSubmitBtn type="submit" value=">" />
        </NweetSubmitContainer>
        <NweetImgSubmitContainer>
          <NweetImgSubmitBtn htmlFor="img_submit">
            Add photos +
          </NweetImgSubmitBtn>
          <NweetImgSubmitInput
            id="img_submit"
            onChange={onFileChange}
            type="file"
            accept="image/*"
          />
          {attachment && (
            <NweetImgPreviewContainer>
              <img
                alt={attachment}
                src={attachment}
                width="50px"
                height="50px"
              />
              <NweetImgCancleBtn onClick={onClearAttachment}>
                Cancel
              </NweetImgCancleBtn>
            </NweetImgPreviewContainer>
          )}
        </NweetImgSubmitContainer>
      </NweetForm>
    </NweetFormContainer>
  );
};
export default NweetFactory;
