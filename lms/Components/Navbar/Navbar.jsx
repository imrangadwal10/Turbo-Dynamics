import React from "react";
import { Text, Container, Center, Box, Flex, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  const {
    data: { isAuthenticated, user },
  } = useSelector((state) => state.auth);

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
        <Box w={"10%"}>
          <Image
            src="https://thumbs.dreamstime.com/z/lms-letter-technology-logo-design-white-background-lms-creative-initials-letter-logo-concept-lms-letter-design-lms-letter-252935662.jpg"
            alt="LMS"
            w={"7.5rem"}
            h="4rem"
          />
        </Box>

        <Box
          w={"75%"}
          h={"5rem"}
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          fontSize="1.5rem"
          cursor="pointer"
        >
          <Link href={"../"}>
            <Text>Home</Text>
          </Link>
          <Link href={"./lecture/lectures"}>
            <Text>Lectures</Text>
          </Link>
          <Text>Assignments</Text>
          <Link href={"../ticket"}>
            <Text>Tickets</Text>
          </Link>
          <Link href={"../user/signup"}>
            <Text>SignUp</Text>
          </Link>
          <Link href={"../user/login"}>
            <Text>
              {isAuthenticated ? (
                <Box display={"flex"} gap="22px">
                  <Text display={"flex"} justifyContent={"center"} gap="6px" alignItems={"center"}>
                    <BiUserCircle />
                    {user.name}
                  </Text>
                  <Text>Logout</Text>
                </Box>
              ) : (
                "Login"
              )}
            </Text>
          </Link>
          <Text>{user.role==="Lecturer" ? <Link href={"../lecture/createlectures"}><Button color={"teal"}>Create Lecture</Button></Link> : null}</Text>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;

