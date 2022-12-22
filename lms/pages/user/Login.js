import { Box,  Input,  Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    
    
  });
  // console.log(data)

  const postData = () => {
    axios({
      method: "post",
      url: "./api/lecture/Login",
      data: {
        email: email,
        password: pass,
      },
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
        mt={"2rem"}
        color={"teal"}
      >
        Login Page
      </Text>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        m={"auto"}
        h={"20rem"}
        mt={"6rem"}
        w={"40rem"}
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

export default Login;