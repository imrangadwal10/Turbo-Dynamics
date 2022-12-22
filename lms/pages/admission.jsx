import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const Lectures = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  

  const postData = () => {
    axios({
      method: "post",
      url: "./api/lecture/createlecture",
      data: data
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     postData();
  };

  return (
    <Box>
      <Text
        textAlign={"center"}
        fontSize={"40px"}
        textDecoration={"underline"}
        mt={"2rem"}
        color={"teal"}
      >
        Admission
      </Text>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        m={"auto"}
        h={"30rem"}
        mt={"4rem"}
        w={"55rem"}
      >
        <Box lineHeight={"50px"} margin={"auto"} pt={"5rem"} w={"35rem"}>
          <form onSubmit={handleSubmit}>
            <Input
              type="name"
              onChange={handleChange}
              name="title"
              placeholder="Enter Title"
              value={data.title}
              required
            />
            <Input
              type="email"
              onChange={handleChange}
              name="subject"
              placeholder="Enter Subject"
              value={data.subject}
              required
            />
            <Input
            type={"submit"}
              bgColor={"teal"}
              color="white"
              w={"100%"}
              textAlign={"center"}
              value={"submit"}
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Lectures;
