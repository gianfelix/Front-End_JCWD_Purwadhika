import React, { useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
export const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setState("submitting");

    // Implement your submit logic here
    setTimeout(() => {
      if (email === "fail@example.com") {
        setError(true);
        setState("initial");
        return;
      }

      setState("success");
    }, 1000);
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Container
        maxW={"300px"}
        maxH={"50px"}
        bg={'teal'}
        boxShadow={"15px"}
        rounded={"15px"}
        direction={"column"}
        pb={'12px'}
      >
        <Text fontSize={"14px"} color={"white"}>Subscribe to our Newsletter</Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          onSubmit={handleSubmit}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Your Email"}
              aria-label={"Your Email"}
              value={email}
              size={"5px"}
              disabled={state !== "initial"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl w={"100px"}>
            <Button
            fontSize={"12px"}
            size={"xs"}
              colorScheme={state === "success" ? "green" : "teal"}
              isLoading={state === "submitting"}
             
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <CheckIcon /> : "Submit"}
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
};
