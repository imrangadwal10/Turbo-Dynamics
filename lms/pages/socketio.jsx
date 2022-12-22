import { useEffect, useState } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";

const userName = nanoid(10);
const SocketIo = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  console.log(message);
  console.log(chat);

  const sendChat = useEffect(() => {
    fetch("/api/socketio").finally(() => {
      const socket = io();
      socket.emit("chat", { message, userName });
      setMessage("");
    });
  }, []);

  useEffect(() => {
    fetch("/api/socketio").finally(() => {
      const socket = io();
      socket.on("chat", (payload) => {
        setChat([...chat, payload]);
      });
    });
  });
  return (
    <div>
      <h1>Chat App</h1>
      {chat.map((payload, index) => {
        return (
          <p key={index}>
            {payload.message}: <span>user_{payload.userName}</span>
          </p>
        );
      })}
      <input
        type={"text"}
        name="chat"
        placeholder="send text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button type="submit" onClick={sendChat}>
        Send
      </button>
    </div>
  );
};

export default SocketIo;

// import { useEffect, useRef, useState } from "react";
// import io from "socket.io-client";
// import { nanoId } from "nanoid";
// const user = "User_" + String(new Date().getTime()).substr(-3);
// const messages = {
//   user: "",
//   msg: "",
// };
// export default () => {
//   const inputRef = useRef(null);
//   const [connected, setConnected] = useState(false);
//   const [chat, setChat] = useState({ ...messages });
//   const [msg, setMsg] = useState("");
//   useEffect(() => {
//     fetch("/api/socketio").finally(() => {
//       const socket = io();

//       socket.on("connect", () => {
//         console.log("connect");
//         setConnected(true);
//       });

//       socket.on("message", (messages) => {
//         chat.push(messages);
//         setChat([...chat]);
//       });

//       socket.on("a user connected", () => {
//         console.log("a user connected");
//       });

//       socket.on("disconnect", () => {
//         console.log("disconnect");
//       });
//     });
//   }, []);

//   const sendMessage = async () => {
//     if (msg) {
//       // build message obj
//       const message = {
//         user: "",
//         msg: "",
//       };

//       // dispatch message to other users
//       const resp = await fetch("/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(message),
//       });

//       // reset field if OK
//       if (resp.ok) setMsg("");
//     }

//     // focus after click
//     inputRef?.current?.focus();
//   };

//   return (
//     <div flex flex-col w-full h-screen>
//       <div py-4 text-white bg-blue-500 sticky top-0></div>
//       <div flex flex-col flex-1 bg-gray-200>
//         <div flex-1 p-4 font-mono>
//           {chat.length ? (
//             chat.map((chat, i) => (
//               <div key={"msg_" + i} mt-1>
//                 <span
//                   css={chat.user === user ? text - red - 500 : text - black}
//                 >
//                   {chat.user === user ? "Me" : chat.user}
//                 </span>
//                 : {chat.msg}
//               </div>
//             ))
//           ) : (
//             <div text-sm text-center text-gray-400 py-6>
//               No chat messages
//             </div>
//           )}
//         </div>
//         <div bg-gray-400 p-4 h-20 sticky bottom-0>
//           <div flex flex-row flex-1 h-full divide-gray-200 divide-x>
//             <div pr-2 flex-1>
//               <input
//                 ref={inputRef}
//                 type="text"
//                 value={msg}
//                 placeholder={connected ? "Type a message..." : "Connecting..."}
//                 w-full
//                 h-full
//                 rounded
//                 shadow
//                 border-gray-400
//                 border
//                 px-2
//                 disabled={!connected}
//                 onChange={(e) => {
//                   setMsg(e.target.value);
//                 }}
//                 onKeyPress={(e) => {
//                   if (e.key === "Enter") {
//                     sendMessage();
//                   }
//                 }}
//               />
//             </div>
//             <div flex flex-col justify-center items-stretch pl-2>
//               <button
//                 bg-blue-500
//                 rounded
//                 shadow
//                 text-sm
//                 text-white
//                 h-full
//                 px-2
//                 onClick={sendMessage}
//                 disabled={!connected}
//               >
//                 SEND
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
