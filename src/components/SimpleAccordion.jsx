import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Box,
  Text,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function SimpleAccordion() {
  return (
    <Box>
      <Flex bg={"#F2F2F2"}>
        <Container ml={"660px"}>
          <Accordion allowMultiple width="550px" bg="#c8d8e4" rounded="lg">
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: "gray.100" }}
              >
                <Text fontSize="lg">How do I make an article?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text align={"justify"}>
                  First, you can create an account by clicking on the "Register"
                  option available. Once you have registered, you can access the
                  "Write" menu located in the account icon section at the upper
                  right corner. From there, you can start writing the article
                  you want.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: "gray.100" }}
              >
                <Text fontSize="lg">What is meant by Earth Wall?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text align={"justify"}>
                  Earth Wall is a blog for sharing knowledge, articles, and
                  opinions with anyone about everything that exists on our
                  earth. Through this blog you can read, write, and expand your
                  world for everyone.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: "gray.100" }}
              >
                <Text fontSize="lg">
                  How is account security from Earth Wall?
                </Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text align={"justify"}>
                  Your account will be safe, and we are very committed to
                  protecting your account and not sharing it for any purpose.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Flex>
    </Box>
  );
}
