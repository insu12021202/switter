import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { authService, dbService } from "../../fBase";
import { NweetInput, NweetSubmitBtn } from "../NweetFactory_style";
import {
  ChaneNameSpan,
  ChangeNameBtn,
  ChangeNameInput,
  LogOutBtn,
  ProfileContainer,
} from "./Profile_style";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newDisplayName, setDisplayName] = useState(userObj.displayName);
  const onLogOut = () => {
    authService.signOut();
    history.push("/");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  const getMyNweets = async () => {
    //userObj의 아이디와 nweets에 저장돼있는 nweet들의 creatorId를 대조해서 사용자의 nweet만 가져오기
    const nweet = await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();
    console.log(nweet.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getMyNweets();
  }, []);
  return (
    <>
      <ProfileContainer>
        <ChaneNameSpan>Change Your Name</ChaneNameSpan>
        <form onSubmit={onSubmit}>
          <ChangeNameInput
            onChange={onChange}
            type="text"
            value={newDisplayName}
            placeholder="Display name"
          />
          <ChangeNameBtn type="submit" placeholder="Update profile" value=">" />
        </form>
        <LogOutBtn onClick={onLogOut}>Log Out</LogOutBtn>
      </ProfileContainer>
    </>
  );
};
export default Profile;
