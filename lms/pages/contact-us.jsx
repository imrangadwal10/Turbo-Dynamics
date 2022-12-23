import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { BsChatRightDots } from "react-icons/bs";
const Message = {
  author: "",
  message: "",
};
export default function ContactUs() {
  const [username, setUsername] = useState("");
  const [chosenUsername, setChosenUsername] = useState("");
  const [landing, setLanding] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    await fetch("/api/socketio");

    let socket = io();

    socket.on("newIncomingMessage", (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: msg.author, message: msg.message },
      ]);
      console.log(messages);
    });
  };

  const sendMessage = async () => {
    let socket = io();
    socket.emit("createdMessage", { author: chosenUsername, message });
    setMessages((currentMsg) => [
      ...currentMsg,
      { author: chosenUsername, message },
    ]);
    setMessage("");
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  return (
    <Container>
      <Popover>
        <PopoverTrigger>
          <Button
            colorScheme="teal"
            gap={"2"}
            borderRadius="25"
            variant="outline"
            border={"2px"}
            position="fixed"
            bottom="15px"
            right="25px"
          >
            <BsChatRightDots size={"25"} /> Contact Us
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader background-color={"blue.100"}>
            Message Us!
          </PopoverHeader>
          <PopoverBody gap={"50px"}>
            <Image
              src="https://www.manageengine.com/products/service-desk/help-desk-software/images/what-is-help-desk-software.png"
              alt="help"
            />
            <Text textAlign={"center"} fontSize="xl" pb={"3"} pt="3">
              LMS Support Panel
            </Text>
            <Text
              border={"2px"}
              borderRadius="15"
              textAlign={"center"}
              mb="20px"
            >
              Welcome! We are excited to offer you messaging, allowing you to
              respond to us in your own time. Click here to get started.
            </Text>
            <Flex alignItems={"end"} gap="2">
              <Textarea borderRadius={"15"}></Textarea>
              <Button borderRadius={"15"}>Enter</Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Container>
  );
}
