import { useState } from "react";
import "./styles.css";

export default function MsgDisplay({ selectedChat, setSelectedChat }) {
  const [searchText, setSearchValue] = useState("");

  const msgHandler = (e) => {
    console.log("msg text:", e.target.value);
    setSearchValue(e.target.value);
  };
  console.log("chatData:", selectedChat);
  const sendHandler = (e) => {
    console.log("msg sent:", searchText);
    const msgObj = {};
  };

  return (
    <div className="MsgDisplay">
      <div className="msg-title">
        <img
          src={selectedChat.imageURL}
          height="30px"
          width="20px"
          alt="brand"
          style={{ width: "13%", marginLeft: "2%" }}
        />
        <div style={{ display: "flex" }}>
          <div style={{ width: "78%" }}>{selectedChat.title}</div>
          <img
            src="https://cdn-icons-png.flaticon.com/256/54/54972.png"
            style={{ width: "5%", cursor: "pointer" }}
            alt="close-btn"
            onClick={() => setSelectedChat({})}
          />
        </div>
      </div>
      <div className="msg-body">
        {selectedChat.messageList.length > 0 ? (
          <div>
            {selectedChat.messageList.map((msg) => {
              return <div>{msg.message}</div>;
            })}
          </div>
        ) : (
          "no messages to show"
        )}
      </div>
      <div className="msg-footer">
        <input
          type="text"
          className="chat-msg-input"
          value={searchText}
          placeholder="start typing to message"
          onChange={(e) => msgHandler(e)}
        ></input>
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/send-1985047-1677937.png"
          className="send-img"
          height="10px"
          width="10px"
          alt="send-img"
          onClick={(e) => {
            sendHandler(e);
          }}
        />
      </div>
    </div>
  );
}
