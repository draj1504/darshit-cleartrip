import { useEffect } from "react";
import "./singleChat.css";

export default function SingleChat({
  singleChat,
  setSelectedChat,
  selectedChat
}) {
  useEffect(() => {
    // console.log("singleChat:", singleChat);
  }, [singleChat]);

  const msgTitle =
    singleChat.messageList.length > 0
      ? singleChat.messageList[singleChat.messageList.length - 1].message
      : "";

  let msgDate = new Date(singleChat.latestMessageTimestamp);
  msgDate = msgDate.toLocaleDateString("en-US");
  // console.log("date:", msgDate);

  // console.log("single msg", msgTitle);
  return (
    <div
      className="single-chat"
      id={selectedChat.id === singleChat.id ? "selected" : ""}
      onClick={() => {
        console.log("selecting:", singleChat);
        setSelectedChat(singleChat);
      }}
    >
      <div className="single-chat-avatar">
        <img
          src={singleChat.imageURL}
          alt="img-alt"
          height="30px"
          width="30px"
        />
      </div>
      <div className="single-chat-body">
        <div className="single-chat-tilte">{singleChat.title}</div>
        <div className="single-chat-orderID">{singleChat.orderId}</div>
        <div className="single-chat-lastmsg">{msgTitle}</div>
      </div>
      <div className="single-chat-date">{msgDate}</div>
    </div>
  );
}
