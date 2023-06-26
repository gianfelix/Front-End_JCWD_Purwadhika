import { IoEarthSharp } from "react-icons/io5";
import { Text, Flex } from "@chakra-ui/react";
export const FooterLogo = () => {
  return (
    <>
      <Flex>
        <IoEarthSharp size={38} color="#000000" />
        <Text
          color={"#000000"}
          
          fontFamily={"Roboto"}
          mt={"5px"}
          fontSize={"21px"}
          ml={"10px"}
          
        >
          EARTH WALL
        </Text>
      </Flex>
    </>
  );
};
