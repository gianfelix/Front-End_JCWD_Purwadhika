import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IoEarthSharp } from "react-icons/io5";

import { RegisterButton } from "./RegisterButton";
import { LoginButton } from "./LoginButton";

export const Navbar = () => {
  return (
    <Box
      bg={"#ffffff"}
      h={"70px"}
      pos={"fixed"}
      w={"100%"}
      zIndex={"3"}
      shadow={"lg"}
    >
      <Flex justify={"center"} pt={"13px"}>
        <Link to={"/"}>
          <Flex>
            <IoEarthSharp size={40} color="#2b6777" />
            <Text
              color={"#2b6777"}
              textShadow={"0.5px 0.2px black"}
              fontFamily={"Roboto"}
              mt={"2px"}
              fontSize={"25px"}
              ml={"10px"}
            >
              EARTH WALL
            </Text>
          </Flex>
        </Link>
        <Box ml={"1100px"}> </Box>
        <Flex gap={"20px"}>
          <Link to={"/"}>
            <Button colorScheme="teal" variant={"solid"}>
              Home
            </Button>
          </Link>
          
          <Link to={"/aboutus"}>
            <Button colorScheme="teal" variant={"outline"}>
              About Us
            </Button>
          </Link>
          <RegisterButton />
          <LoginButton />
        </Flex>
      </Flex>
    </Box>
  );
};
