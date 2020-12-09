import React, { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import './Compose.css';

export const Compose = props => {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState("");
  const tweetRemainingLength = 140 - tweetText.length;
  const spanStyle = {color: tweetRemainingLength >= 0 ? "black" :  "red"};

  const submitTweet = e => {
    e.preventDefault();
    if(tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet( tweetText );
      setTweetText("");
    }
  };

  return (
    <section id="compose-section" className="compose container card new-tweet">
      <form onSubmit={ submitTweet } id="compose-form" action="/tweets/" method="post">
        <div className="form-textinput">
          <label id="tweet-message" htmlFor="tweet-text">I can tell this is going to be a good one...</label>
          <TextareaAutosize value={tweetText} onChange={e => setTweetText(e.target.value)} name="text" id="tweet-text" title="tweet-text"/>
        </div>
        <div className="form-extrabits mt-3">
          <button id="compose-submit" className="button is-primary" type="submit">Tweet</button>
          <span style={spanStyle} id="compose-counter" name="counter" className="counter" htmlFor="tweet-text">{140 - tweetText.length}</span>
        </div>
      </form>
    </section>
  )
};
