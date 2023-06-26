import { Flex, Text, Center, Box, Textarea, Button } from "@chakra-ui/react";
import React from "react";


export const Write = () => {
  return (
    <>
      
      <Box pt={"70px"}>
        <Box bg={"#f2f2f2"} h={"auto"}>
          <Text fontFamily={'bauhaus'} fontWeight={"bold"} pt={"20px"} fontSize={"3xl"}>
            Write Your Article Here
          </Text>
          <Center>
            <Box mt={"20px"} w={"1000px"}>
              <Textarea
                borderColor={"teal"}
                fontSize={"5xl"}
                placeholder=" Write title here.. "
                h={"100px"}
              />
              <Textarea
                borderColor={"teal"}
                mt={"20px"}
                mb={"20px"}
                fontSize={"1xl"}
                h={"512px"}
                placeholder="Tell your story here.."

              />
              <Button mb={"20px"} type="submit" colorScheme={"teal"}>Create</Button>
            </Box>
          </Center>
        </Box>
      </Box>
      
    </>
  );
};
