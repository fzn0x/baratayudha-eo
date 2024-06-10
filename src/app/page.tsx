"use client"

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Box
        minH={"102vh"}
        bg="#3b444b"
        className="banner-container"
        position={"relative"}
      >
        <Box className="banner-img"></Box>
        <Flex direction={"column"} align="center" py={10}>
          <Text fontSize={["1rem", "1rem", "1.5rem"]} color="white">
            Baratayudha.eo
          </Text>
          <Text
            fontSize={["1.5rem", "2rem", "3rem"]}
            whiteSpace={"nowrap"}
            color="white"
          >
            Your happiness is our priority
          </Text>
          <Text
            mt={"250px"}
            fontSize={["1.5rem", "2rem", "3rem"]}
            whiteSpace={"nowrap"}
            color="white"
          >
            Coming Soon!
          </Text>
        </Flex>
      </Box>
    </div>
  );
}
