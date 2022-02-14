import React, { useState } from "react";
import { dbService, storageServiece } from "../fBase";
import {
  NweetButtonContainer,
  NweetDeleteButton,
  NweetImg,
  NweetItem,
  NweetItemContainer,
  NweetEditButton,
  NweetEditInput,
  NweetEditSubmitBtn,
  NweetEditCancleBtn,
  NweetEditContainer,
} from "./Nweet_style";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
    //nweet 삭제하기 함수
    const ok = window.confirm("Are you sure want to delete this nweet?");
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete(); //nweet 지우기
      await storageServiece.refFromURL(nweetObj.attachmentUrl).delete(); //nweet에 첨부된 사진 지우기
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  return (
    <div>
      {editing ? ( //editing이 true인지 false인지에 따라 form을 보여주기
        <>
          <NweetEditContainer>
            <form onSubmit={onSubmit}>
              <NweetEditInput
                type="text"
                placeholder="Edit your nweet"
                value={newNweet}
                required
                onChange={onChange}
              />
              <NweetEditSubmitBtn type="submit" value="Edit" />
            </form>
            <NweetEditCancleBtn onClick={toggleEditing}>
              Cancel
            </NweetEditCancleBtn>
          </NweetEditContainer>
        </>
      ) : (
        <>
          <NweetItemContainer>
            <NweetItem>{nweetObj.text}</NweetItem>
            {nweetObj.attachmentUrl && (
              <NweetImg
                alt={nweetObj.attachmentUrl}
                src={nweetObj.attachmentUrl}
                width="50px"
                height="50px"
              />
            )}
          </NweetItemContainer>
          <NweetButtonContainer>
            {isOwner && (
              <>
                <NweetDeleteButton onClick={onDeleteClick}>
                  DELETE
                </NweetDeleteButton>
                <NweetEditButton onClick={toggleEditing}>EDIT</NweetEditButton>
              </>
            )}
          </NweetButtonContainer>
        </>
      )}
    </div>
  );
};

export default Nweet;
