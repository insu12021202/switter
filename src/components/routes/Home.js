import React, { useState, useEffect } from "react";
import { dbService } from "../../fBase";
import Nweet from "../Nweet";
import NweetFactory from "../NweetFactory";
import { HomeContainer, NweetContainer } from "./Home_style";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  return (
    <HomeContainer>
      <NweetFactory userObj={userObj} />
      <NweetContainer>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </NweetContainer>
    </HomeContainer>
  );
};
export default Home;
