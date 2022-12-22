import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    class: "",
  });

  const postData = () => {
    axios({
      method: "post",
      url: "../api/user/signup",
      data: data,
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
      <Text textAlign={"center"} fontSize={"40px"} mt={"2rem"} color={"teal"}>
        SignUp Page
      </Text>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        m={"auto"}
        h={"25rem"}
        mt={"6rem"}
        w={"55rem"}
      >
        <Box lineHeight={"50px"} margin={"auto"} pt={"3rem"} w={"35rem"}>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              onChange={handleChange}
              name="name"
              placeholder="Enter Your Name"
              value={data.name}
              required
            />
            <Input
              type="email"
              onChange={handleChange}
              name="email"
              value={data.email}
              placeholder="Enter Your email"
              required
            />
            <Input
              type="password"
              onChange={handleChange}
              value={data.password}
              name="password"
              placeholder="enter Yoye Password"
              required
            />
            <Input
              type="text"
              onChange={handleChange}
              name="age"
              value={data.age}
              placeholder="enter Your age"
              max="40"
              min="18"
              required
            />
            <Select value={data.class} name="class" onChange={handleChange}>
              <option>Select class</option>
              <option value={"class 10"}>class 10</option>
              <option value={"class 11"}>class 11</option>
              <option value={"class 12"}> class 12</option>
            </Select>
            <Input
              bgColor={"teal"}
              color="white"
              w={"100%"}
              textAlign={"center"}
              _hover={"none"}
              type="submit"
              value="submit"
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
