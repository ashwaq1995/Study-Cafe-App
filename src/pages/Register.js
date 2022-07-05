import {
  Flex,
  VStack,
  Text,
  Input,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const toast = useToast();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [role, setRole] = useState("USER");

  const { register, isLogged } = useContext(AuthContext);

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, []);

  const onClick = async () => {
    register(username, email, password, password2, phoneNo, role);
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
          fontSize="4xl"
          fontWeight="extrabold"
        >
          Register{" "}
        </Text>
        <VStack width="80%" spacing="1rem">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
          <Input
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            value={password2}
          />
          <Input
            onChange={(e) => setPhoneNo(e.target.value)}
            type="phone"
            placeholder="phone No"
            value={phoneNo}
          />
        </VStack>

        {/* <Button width="80%" p="5" fontSize="1.2rem" onClick={onClick}>
          Register !
        </Button> */}

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
          Register
        </Button>

        <Stack pt={5}>
          <Text align={"center"}>
            Already a user? <Link color={"blue.500"}>Login</Link>
          </Text>
        </Stack>

      </VStack>
    </Flex>
  );
};

export default Register;
