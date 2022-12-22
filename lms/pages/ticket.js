import {
  Button,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    category: "LMS",
    title: "Add a button on LMS",
    message: "Please add a button on LMS ticket page",
  },
  {
    id: 2,
    category: "Lecture",
    title: "Add a button on LMS",
    message: "Please add a button on LMS ticket page",
  },
  {
    id: 3,
    category: "Leave",
    title: "Add a button on LMS",
    message: "Please add a button on LMS ticket page",
  },
  {
    id: 4,
    category: "MAC",
    title: "Add a button on LMS",
    message: "Please add a button on LMS ticket page",
  },
  {
    id: 5,
    category: "Attendance Query",
    title: "Add a button on LMS",
    message: "Please add a button on LMS ticket page",
  },
];
export default function Ticket() {
  return (
    <div>
      <Flex
        justifyContent={"space-around"}
        mt="5"
        border={"1px"}
        height="50px"
        alignItems={"center"}
        borderColor="gray.500"
        borderRadius="25px"
      >
        <Text fontSize={"2xl"}>Support Tickets</Text>
        <Link href="api/ticket/createticket">
          <Button colorScheme="blue">Create Ticket</Button>
        </Link>
      </Flex>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>category</Th>
              <Th>title</Th>
              <Th>message</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(({ id, category, title, message }) => (
              <Tr key={id}>
                <Td>{category}</Td>
                <Td>{title}</Td>
                <Td>
                  <Popover>
                    <PopoverTrigger>
                      <Button colorScheme="teal">
                        Click to seen your Message
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader background-color={"blue.100"}>
                        Your Message!
                      </PopoverHeader>
                      <PopoverBody>{message}</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
