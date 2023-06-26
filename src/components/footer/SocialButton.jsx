import React from "react";
import { Box, Button, Link } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const SocialButton = () => {
  return (
    <>
      <Box align={"right"} mr={"30px"}>
        <Link
          href={"https://www.linkedin.com/in/gianfelixramadan/"}
          target="_blank"
        >
          <Button
            bg={"whiteAlpha.700"}
            color={"black"}
            px={"10px"}
            _hover={{ bg: "whiteAlpha.900" }}
            mr={"10px"}
          >
            <FaLinkedin size={"20px"} />
          </Button>
        </Link>
        <Link href={"https://www.instagram.com/gianfelixr/"} target="_blank">
          <Button
            bg={"whiteAlpha.700"}
            color={"black"}
            px={"10px"}
            _hover={{ bg: "whiteAlpha.900" }}
            mr={"10px"}
          >
            <FaInstagram size={"20px"} />
          </Button>
        </Link>
        <Link href={"mailto:gfelixramadan@gmail.com"} target="_blank">
          <Button
            bg={"whiteAlpha.700"}
            color={"black"}
            px={"10px"}
            _hover={{ bg: "whiteAlpha.900" }}
          >
            <AiOutlineMail size={"20px"} />
          </Button>
        </Link>
      </Box>
    </>
  );
};
