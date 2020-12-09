import React, { useState } from "react";
import "./App.css";
import { Compose } from "./components/Compose";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { Tweet } from "./components/Tweet";
import { Toast } from "./components/Toast";

const initialTweetData = [
  {
    name : "Newton",
    handle: "@SirIsaac",
    profile: "https://avatars.dicebear.com/4.4/api/avataaars/Newton.svg",
    text: "If I have seen further it is by standing on the shoulders of giants",
    date: 1606966861236,
  },
  {
    name : "Descartes",
    handle: "@rd",
    profile: "https://avatars.dicebear.com/4.4/api/avataaars/Descartes.svg",
    text: "Je pense , donc je suis",
    date: 1607053261236,
  },
  {
    name : "Reginald",
    handle: "Reginald",
    profile: "https://avatars.dicebear.com/4.4/api/avataaars/Reginald.svg",
    text: "Just posted a photo @ MASC",
    date: 1607139661236,
  },
  {
    name : "Alice",
    handle: "@LeBoop",
    profile: "https://avatars.dicebear.com/4.4/api/avataaars/Alice.svg",
    text: "Stadia: You can play Unreal games in your browser. Twitter: LOL! This is stupid.",
    date: 1607226061236,
  },
  {
    name : "Baker",
    handle: "@CandlestickMaker",
    profile: "https://avatars.dicebear.com/4.4/api/avataaars/Baker.svg",
    text: "I hated utility CSS until every argument I had against it was proven invalid. I couldn’t imagine going back to my old way.",
    date: 1607312461236,
  },
];

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData);

  const tweets = tweetData.map((tweetData, index) => {
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} profile={tweetData.profile} text={tweetData.text} date={tweetData.date}/>
  });

  const addNewTweet = text => {
    const newTweet = {
      name : "Baker",
      handle: "@CandlestickMaker",
      profile: "https://avatars.dicebear.com/4.4/api/avataaars/Baker.svg",
      text,
      date: 1607312461236,
    };

    setTweetData([newTweet, ...tweetData]);
  };

  return (
    <div className="App">
      <Toast />
      <Navigation />
        <div id="meta-container">
        <Profile />
        <main id="page-content">
          <Compose addNewTweet={addNewTweet}/>
          <section id="postlist" className="container">
            {tweets}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
