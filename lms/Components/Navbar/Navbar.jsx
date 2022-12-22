import React from "react";
import { Text, Container, Center, Box, Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Container
        maxW={"100%"}
        borderBottom={"2px solid lightgray"}
        display="flex"
        justifyContent={"space-around"}
        alignItems="center"
        p={"0 2rem 0 2rem"}
        bg="teal"
        color={"white"}
      >
        <Box w={"10%"} >
          <Image
            src="https://thumbs.dreamstime.com/z/lms-letter-technology-logo-design-white-background-lms-creative-initials-letter-logo-concept-lms-letter-design-lms-letter-252935662.jpg"
            alt="LMS"
            w={"7.5rem"}
            h="4rem"
          />
        </Box>

        <Box
          w={"75%"}
          //   border={"1px solid black"}
          h={"5rem"}
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          fontSize="1.5rem"
          cursor="pointer"
        >
          <Text>Lectures</Text>
          <Text>Assignments</Text>
          <Text>Tickets</Text>
          <Text>SignUp</Text>
          <Text>Login</Text>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
