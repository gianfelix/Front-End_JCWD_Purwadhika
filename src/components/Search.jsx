import React from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSistrix } from "react-icons/fa";
export const Search = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement>
          <FaSistrix mr="5px" size={"30px"} color="teal" />
        </InputLeftElement>
        <Input
          w={"500px"}
          _placeholder={{ opacity: 1, color: "teal" }}
          placeholder="Search"
          isInvalid
          errorBorderColor="teal"
        />
      </InputGroup>
    </Box>
  );
};
