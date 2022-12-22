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
} from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

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
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}
