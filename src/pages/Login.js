import {
  Flex,
  VStack,
  Text,
  Input,
  Button,
  useToast,
  Stack,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link as Link2 } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login, isLogged } = useContext(AuthContext);

  useEffect(() => {
    if (isLogged) {
      navigate("/login");
    }
  }, []);

  const onClick = () => {
    login(username, password);
  };
  return (
    <Flex height="95vh" justifyContent="center" alignItems="center">
      <VStack
        border="solid 3px"
        width="30rem"
        spacing="3rem"
        padding="4"
        borderRadius="1rem"
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          Login
        </Text>
        <VStack width="80%" spacing="1rem">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
        </VStack>

        <Button
          onClick={onClick}
          fontFamily={"heading"}
          mt={5}
          width="80%"
          bgGradient="linear(to-r, red.400,purple.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, red.400,purple.400)",
            boxShadow: "xl",
          }}
        >
          Login
        </Button>

        <Stack pt={5}>
          <Text align={"center"}>
            Don't have an account?{" "}
            <Link color={"blue.500"}>
              <Link2 to="/register">Register</Link2>
            </Link>
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Login;
