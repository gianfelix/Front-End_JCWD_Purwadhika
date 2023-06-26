import { Text, Box, Flex, Button, Stack, Spacer, Grid } from "@chakra-ui/react";
import { FooterLogo } from "./FooterLogo";

import { SocialButton } from "./SocialButton";
import { NewsLetter } from "./NewsLetter";

export const Footer = () => {
  return (
    <>
      <Grid
        
        bg={"#52ab98"}
        h={"70px"}
        gridTemplateColumns={"repeat(4, 1fr)"}
      >
        <Box ml={"40px"} pt={"17px"}>
          <FooterLogo />
        </Box>

        <Box  pt={"24px"}>
          <Text> © 2023 Earth Wall | Gian Felix Ramadan</Text>
        </Box>

        <NewsLetter/>
        <Box pt={"15px"}>

        <SocialButton />
        </Box>
      </Grid>
    </>
  );
};
