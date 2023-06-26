import {
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  Link,
  Flex
} from "@chakra-ui/react";
import { ButtonBanner } from "./ButtonBanner";

export const HeroBanner = () => {
  return (
    <HStack w={"100%"} h={"867px"} align={"center"} justify={"center"} bg={'url("https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")'} bgSize={"cover"} bgPosition={"center"} bgOpacity={0.8}>
      
        <Stack spacing={6} w={"full"} maxW={"850px"} align={"center"}>
          <Heading fontSize={"70px"} color={"white"}>
            <Text fontFamily={'roboto'}>UNLOCK THE SECRETS OF MOTHER NATURE</Text>
            
          </Heading>
          <Text fontSize={"25px"} color={"white"} justifyContent="center">
          Welcome to the Earth Wall. We bring you to the depths of earth's knowledge to understand the power of mother nature
          </Text>
          <HStack direction={"column"} spacing={4}>
            <Flex>

            <ButtonBanner/>
            </Flex>
          </HStack>
        </Stack>
      
    </HStack>
  );
};
