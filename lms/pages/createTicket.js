import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineEye } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Container,
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Textarea,
  Image,
  Button,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

export default function createTicket() {
  return (
    <Container maxW maxH={"max-content"} bg="teal.300">
      <Text fontSize={"2xl"} pb="8" pt={"5"} textAlign={"center"}>
        Create Support Ticket
      </Text>
      <Container>
        <Text pb={"2"}>CATEGORY</Text>
        <Select placeholder="Select option">
          <option value="option1">Withdrawl</option>
          <option value="option2">Counselling Support</option>
          <option value="option3">Missed Evaluation Submission</option>
          <option value="option4">Leave</option>
          <option value="option5">MAC</option>
          <option value="option6">Product Support</option>
          <option value="option7">Coding Platform</option>
          <option value="option8">Attendance Query</option>
        </Select>
        <Text pt={"10"} pb="2">
          TITLE
        </Text>
        <Input></Input>
        <Text pt={"10"} pb="2">
          MESSAGE
        </Text>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab
              alignItems={"center"}
              justifyContent="space-between"
              gap={"1.5"}
            >
              <TfiWrite />
              <Text>Write</Text>
            </Tab>
            <Tab
              alignItems={"center"}
              justifyContent="space-between"
              gap={"1.5"}
            >
              <AiOutlineEye />
              <Text>Preview</Text>
            </Tab>
            <Tab
              alignItems={"center"}
              justifyContent="space-between"
              gap={"1.5"}
            >
              <BiHelpCircle />
              <Text>Help</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Textarea></Textarea>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel>
              <Image
                src="https://www.manageengine.com/products/service-desk/help-desk-software/images/what-is-help-desk-software.png"
                alt="help"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box pb={"10"}>
          <Link href="/ticket">
            <Button colorScheme="blue">Submit Ticket</Button>
          </Link>
        </Box>
      </Container>
    </Container>
  );
}
