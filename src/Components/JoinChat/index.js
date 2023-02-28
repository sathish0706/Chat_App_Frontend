import { useState } from "react";
import Chat from "../Chat";
import Header from "../Header";

const JoinChat = ({ socket }) => {
  const [userName, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (userName && room) {
      socket.emit("join-room", room);
      console.log("Joining room....");
      setShowChat(true);
    }
  };

  return (
    <>
      <Header />
      <div className="App">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Join the Chat room</h3>
            <input
              type="text"
              placeholder="Enter the username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter the room ID"
              onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join room</button>
          </div>
        ) : (
          <Chat socket={socket} userName={userName} room={room} />
        )}
      </div>
    </>
  );
};

export default JoinChat;
