import { Center, Box, Text  } from "@chakra-ui/react";
import React from "react";
import { CreateArticle } from "../components/profiling/CreateArticle";

export const Write = () => {
  return (
    <>
      <Box pt={"70px"}  bg={"#f2f2f2"} minH={'867px'}>
        <Box >
          <Text
            fontFamily={"bauhaus"}
            fontWeight={"bold"}
            pt={"20px"}
            fontSize={"3xl"}
          >
            Write Your Article Here
          </Text>
          <Center>
            <CreateArticle />
          </Center>
        </Box>
      </Box>
    </>
  );
};
