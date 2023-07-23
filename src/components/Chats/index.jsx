import { useEffect } from "react";
import SingleChat from "./SingleChat";
import "./styles.css";

export default function ChatLists({
  chatData,
  setSelectedChat,
  filterText,
  setFilteredValue,
  selectedChat
}) {
  useEffect(() => {
    // console.log("chatData:", chatData);
  }, [chatData]);

  const searchHandler = (e) => {
    // console.log("filtered text:", e.target.value);
    setFilteredValue(e.target.value.toLowerCase());
  };

  return (
    <div
      className="chat-lists-wrapper"
      style={{ width: `${selectedChat.id ? "45%" : "100%"}` }}
    >
      <div className="chat-filter">
        <div className="chat-filter-text">Filter by title / Order ID</div>
        <input
          type="text"
          className="chat-filter-input"
          value={filterText}
          placeholder="start typing to search"
          onChange={(e) => searchHandler(e)}
        ></input>
      </div>
      <div className="chat-lists">
        {chatData.length > 0
          ? chatData.map((singleChat) => {
              return (
                <SingleChat
                  singleChat={singleChat}
                  setSelectedChat={setSelectedChat}
                  selectedChat={selectedChat}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
