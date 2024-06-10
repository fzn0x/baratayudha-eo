"use client"

import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { ContentFont, SubTitleFont, TitleFont } from "./font";
import Slideshow from "@/components/SlideShow";
import InstagramEmbed from "@/components/InstagramEmbed";
import WithSpeechBubbles from './../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Box
        minH={["75vh", "112vh"]}
        bg="#3b444b"
        className="banner-container"
        position={"relative"}
      >
        <Box className="banner-img"></Box>
        <Flex direction={"column"} align="center" py={10}>
          <Text
            fontSize={["1rem", "1rem", "1.5rem"]}
            color="white"
            className={TitleFont.className}
            textShadow={"0px 7px 2px rgba(0,0,0,0.6)"}
          >
            Baratayudha.eo
          </Text>
          <Text
            mt={10}
            fontSize={["1.5rem", "2rem", "3rem"]}
            whiteSpace={"nowrap"}
            color="white"
            className={SubTitleFont.className}
          >
            Your <b className="text-yellow-300">happiness</b> is our{" "}
            <u className="text-red-300">priority</u>❤️
          </Text>
          <Text
            fontSize={["0.5rem", "1rem", "2rem"]}
            whiteSpace={"pre-wrap"}
            textAlign={"center"}
            color="white"
            className={ContentFont.className}
          >
            Kita disini ada membantu Anda {"\n"}
            merencanakan pernikahan {"\n"}
            yang Anda <b>mimpikan.</b> {"\n"}
          </Text>
          <Button mt={5} zIndex={99}>
            Hubungi Official CP (Yunita)
          </Button>
          <Flex direction={"column"} align="center" py={10} zIndex={99} w="100%">
            <Slideshow
              slides={[
                {
                  src: "/bannerImage1.png",
                  alt: "Event Organizer Termurah dan Terlengkap Bandung",
                },
                {
                  src: "/bannerImage2.png",
                  alt: "Event Organizer Termurah dan Terlengkap Bandung",
                },
                {
                  src: "/bannerImage3.png",
                  alt: "Event Organizer Termurah dan Terlengkap Bandung",
                },
                {
                  src: "/bannerImage4.png",
                  alt: "Event Organizer Termurah dan Terlengkap Bandung",
                },
                {
                  src: "/bannerImage5.png",
                  alt: "Event Organizer Termurah dan Terlengkap Bandung",
                },
                {
                  src: "/bannerImage6.png",
                  alt: "Event Organizer Termurah dan Terlengkap Bandung",
                },
              ]}
            />
          </Flex>
        </Flex>
      </Box>
      <Box bg="white" position={"relative"} w="80%" mx="auto">
        <Flex direction={"column"} align="center" pt={10}>
          <Text
            my={5}
            fontSize={["1.5rem", "2rem", "3rem"]}
            whiteSpace={"wrap"}
            color="black"
            textAlign={"center"}
            className={SubTitleFont.className}
          >
            Professional Event Planner Based in Bandung
          </Text>
        </Flex>
      </Box>
      <Box bg="white" position={"relative"} w="80%" mx="auto">
        <Flex direction={"column"} align="center" py={10}>
          <Text
            my={10}
            fontSize={["1.5rem", "2rem", "3rem"]}
            whiteSpace={"nowrap"}
            color="black"
            className={SubTitleFont.className}
          >
            Meet Us
          </Text>
          <InstagramEmbed />
        </Flex>
      </Box>
      <Box bg="white" position={"relative"} w="80%" mx="auto">
        <Flex direction={"column"} align="center" py={5}>
          <Text
            my={10}
            fontSize={["1.5rem", "2rem", "3rem"]}
            whiteSpace={"nowrap"}
            color="black"
            className={SubTitleFont.className}
          >
            Testimonials
          </Text>
          <WithSpeechBubbles />
        </Flex>
      </Box>
      <Box bg="white" position={"relative"} w="80%" mx="auto">
        <Flex direction={"column"} align="center" py={5}>
          <Text
            my={10}
            fontSize={["0.5rem", "1rem"]}
            whiteSpace={"nowrap"}
            color="black"
            className={SubTitleFont.className}
          >
            Copyright (c) 2024 Baratayudha, SpellCode.inc. Powered By Next.js.
          </Text>
        </Flex>
      </Box>
    </div>
  );
}
