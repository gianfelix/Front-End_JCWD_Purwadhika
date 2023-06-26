import React from "react";
import { Link, Button, Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const ButtonBanner = () => {
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/register");
    
  };
  const toAboutUs = () => {
    navigate("/aboutus");
  }
  return (
    <Flex zIndex={1}>
      <Button
        onClick={toRegister}
        rounded={"full"}
        px={6}
        size={"lg"}
        bg={"teal.600"}
        color={"white"}
        _hover={{ bg: "teal.800" }}
        mr={"10px"}
      >
        Get Started
      </Button>

      
        <Button
          onClick={toAboutUs}
          rounded={"full"}
          px={6}
          size={"lg"}
          bg={"#5c5b5b"}
          color={"white"}
          _hover={{ bg: "#363535" }}
          ml={"10px"}
        >
          About Us
        </Button>
     

    </Flex>
  );
};
