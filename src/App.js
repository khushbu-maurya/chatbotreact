import React, { useState } from "react";
import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import "./chatbot/custom.scss";
import closeIcon from "../src/assets/images/close-button.png";
import openIcon from "../src/assets/images/chat.png";

function App() {
  const [shoeMessageToggle, setShoeMessageToggle] = useState(false);

  return (
    <div className="ab-chatbox-section">
      <div className="chatbox-inner-box">
        {shoeMessageToggle && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        )}
      </div>

      <div className="open-close-btn">
        {shoeMessageToggle ? (
          <button onClick={() => setShoeMessageToggle(false)}>
            <img src={closeIcon} />
          </button>
        ) : (
          <button onClick={() => setShoeMessageToggle(true)}>
            {" "}
            <img src={openIcon} />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
