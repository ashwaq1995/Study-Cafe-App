import { HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import Register from "../pages/Register";
// import IdCard from '../images/logo.png';
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const { isLogged, logout } = useContext(AuthContext);

  return (
    <HStack color="purple" backgroundColor="white" width="100vw" height="8vh">
      <Text fontWeight="bold" fontSize="1.5rem" ml="3">
        <Link to="/">
          {/* <Image width="5rem" height="5rem" src={IdCard} /> */}
        </Link>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ColorModeSwitcher justifySelf="flex-end" />
        </Stack>
      </Text>
      <Spacer />
      <HStack
        fontWeight="bold"
        fontSize="1.5rem"
        marginRight="2rem !important"
        spacing="2rem"
      >
        {!isLogged && <Link to="/register">Register</Link>}
        {!isLogged && <Link to="/login">Login</Link>}

        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>

        {isLogged && (
          <Text cursor="pointer" onClick={logout}>
            Logout
          </Text>
        )}
      </HStack>
    </HStack>
  );
};

export default NavBar;
