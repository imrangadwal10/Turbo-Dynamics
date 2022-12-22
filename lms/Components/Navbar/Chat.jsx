import {
  Button,
  Container,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import { BsChatRightDots } from "react-icons/bs";
export default function Chat() {
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
          <PopoverBody>
            <Input></Input>
            <Button>Enter</Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Container>
  );
}
