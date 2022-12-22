import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function () {
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
        <Link href="/createTicket">
          <Button colorScheme="blue">Create Ticket</Button>
        </Link>
      </Flex>
    </div>
  );
}
