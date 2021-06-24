import React from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "./firebase";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.fieldValue.serverTimestamp(),
      profilePic: user.photoUrl,
      username: user.displayName,
      image: imageURL,
    });
    setInput("");
    setImageURL("");
  };
  return (
    <div className="message-sender">
      <div className="message-sender-top">
        <Avatar src={user.photoUrl} />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="message-sender-input"
            placeholder={`What's on your mind ${user.displayName}?`}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="message-sender-bottom">
        <div className="message-sender-option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message-sender-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message-sender-option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
