import React from "react";
import {
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
export default function Search() {
  const [Search, setSearch] = React.useState(false);
  const handleClick = () => setSearch(!Search);

  return (
    <Center>
      <InputGroup size="md" width="500px">
        <Input
          pr="4.5rem"
          type={Search ? "text" : "Searh"}
          placeholder="Enter Cafe name "
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {Search ? "search" : "search"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  );
}
