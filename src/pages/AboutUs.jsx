import { Box, Button, Text, Flex, Stack, Link } from "@chakra-ui/react";
import SimpleAccordion from "../components/SimpleAccordion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const AboutUs = () => {
  return (
    <>
      <Box pt={"70px"} w={"auto"} h={"auto"} bg={"#F2F2F2"}>
        <Stack align={"center"}>
          <Text
            mt={"70px"}
            fontSize={"40px"}
            mb={"40px"}
            fontFamily={"amarillo"}
          >
            Create the space for your thinking to take off.
          </Text>
          <Box p={"20px"} w={"1060px"} bg={"#F2FFF2"}>
            <Text p={"5px"} fontSize={"22px"} align={"justify"}>
              Anyone can write on Earth Wall. Thought-leaders, journalists,
              experts, and individuals with unique perspectives share their
              thinking here. You’ll find pieces by independent writers from
              around the globe, stories we feature and leading authors, and
              smart takes on our own suite of blogs and publications.
            </Text>
          </Box>
        </Stack>
        <Box mt={"40px"}>
          <Text mb={"20px"} fontSize={"25px"} fontWeight={"25px"}>
            Frequently Asked Questions
          </Text>
          <SimpleAccordion />
        </Box>
        <Box mt={"20px"}>
          <Text mt={"40px"} fontSize={"25px"} align={"center"} mb={"20px"}>
            Contact Us
          </Text>

          <Flex justify={"center"} h={"250px"}>
            <Stack>
              <Link href={"mailto:gfelixramadan@gmail.com"}>
                <Button w={"60px"} colorScheme="teal">
                  <AiOutlineMail size={"30px"} />
                </Button>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/gianfelixramadan/"}
                target="_blank"
              >
                <Button w={"60px"} colorScheme="teal">
                  <FaLinkedin size={"30px"} />
                </Button>
              </Link>
              <Link href={"https://www.github.com/gianfelix"} target="_blank">
                <Button w={"60px"} colorScheme="teal">
                  <FaGithub size={"30px"} />
                </Button>
              </Link>
              <Link
                href={"https://www.instagram.com/gianfelixr/"}
                target="_blank"
              >
                <Button w={"60px"} colorScheme="teal">
                  <FaInstagram size={"30px"} />
                </Button>
              </Link>
            </Stack>
            <Stack align={"left"} ml={"10px"}>
              <Button colorScheme="teal">gfelixramadan@gmail.com</Button>
              <Button colorScheme="teal">linkedin.com/gianfelixramadan</Button>
              <Button colorScheme="teal">github.com/gianfelixramadan</Button>
              <Button colorScheme="teal">instagram.com/gianfelixr</Button>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
