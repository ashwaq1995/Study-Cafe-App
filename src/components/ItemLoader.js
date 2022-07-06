// import Button from "../UI/Button/Button";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Link,
} from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
const IMAGE = "https://bit.ly/2k1H1t6";

const Sections = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/cafe/all", {
        auth: {
          username: "Ashwaq",
          password: "Abc12345",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const item = data.map((data1, index) => {
    return (
      <Center py={12} key={index}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg="gray.800"
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={data1.image}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Link
              color={"white"}
              href="/details"
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {data1.name}
            </Link>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {/* {data1.name} */}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text color="white"></Text>
              <Text color={"white"}>{data1.location}</Text>
            </Stack>
            <Flex mt={2} align="center">
              <Box as={MdStar} color="orange.400" />
              <Text ml={1} fontSize="sm" color="white">
                <b>4.84</b> (190)
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Center>
    );
  });
  return <>{item}</>;
};

export default Sections;
