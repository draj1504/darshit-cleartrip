import { useEffect, useState } from "react";
import ChatLists from "./components/Chats";
import MsgDisplay from "./components/Messages";
import "./styles.css";

export default function App() {
  const [chatData, setChatData] = useState([]);
  const [filterText, setFilteredValue] = useState("");
  const [filteredChat, setfilteredChat] = useState([]);
  const [selectedChat, setSelectedChat] = useState({});

  const chatToShow = filteredChat.length > 0 ? filteredChat : chatData;

  useEffect(() => {
    console.log("filtered text:", filterText, chatData);
    if (filterText.length > 0) {
      const newChatData = [];
      chatData.forEach((chat) => {
        if (
          chat.title.toLowerCase().includes(filterText) ||
          chat.orderId.toLowerCase().includes(filterText)
        ) {
          newChatData.push(chat);
          return chat;
        }
      });
      console.log("filtered chat found:", newChatData);
      setfilteredChat(newChatData);
    } else setfilteredChat([]);

    // console.log("filtered chats:", newChatData);
  }, [filterText, chatData]);

  // console.log("selectedChat:", selectedChat);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/codebuds-fk/chat/chats")
      .then((data) => data.json())
      .then((data) => {
        // console.log("data is:", data);
        setChatData(data);
      });
  }, []);

  return (
    <div className="App">
      <ChatLists
        chatData={chatToShow}
        setSelectedChat={setSelectedChat}
        filterText={filterText}
        selectedChat={selectedChat}
        setFilteredValue={setFilteredValue}
      />
      {selectedChat.id && (
        <MsgDisplay
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      )}
    </div>
  );
}
