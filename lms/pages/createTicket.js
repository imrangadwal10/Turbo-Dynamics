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
} from "@chakra-ui/react";

export default function createTicket() {
  return (
    <div>
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
              <Input width="full" h={"200px"}></Input>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
}
