import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

function Details() {
  //const { colorMode } = useColorMode();
  //const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />

      <Image
        alignSelf="center"
        mt={isNotSmallerScreen ? "0" : "12"}
        mb={isNotSmallerScreen ? "0" : "12"}
        borderRadius="full"
        backgroundColor="transparent"
        boxShadow="lg"
        boxSize="500px"
        src={""}
      />
      <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
        <Text fontSize="5xl" fontWeight="semibold" text>
          Coffee Break
        </Text>
        <p>asdnsac;sdnkcks</p>
        {/* <Text
          fontSize="7xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text"
        >
          Abdulrahmn Adnan Shater
        </Text> */}

        <Button
          mt={8}
          colorScheme="blue"
          onClick={() => window.open("https://pawan.live")}
        >
          Book
        </Button>
      </Box>
    </Stack>
  );
}

export default Details;
