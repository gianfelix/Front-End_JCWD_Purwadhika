import { Box, Grid, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";

// import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { HeroBanner } from "../components/HeroBanner";
import { Content } from "../components/content/content";
import { CarouselArticles } from "../components/carousel/CarouselArticles";

export const Landing = () => {
  return (
    <>
      <Box pt={"70px"}>
        <HeroBanner />

        <Flex bg={"#2b6777"}>
          <Grid gridTemplateColumns={"1fr 1fr"}>
            <Grid gridTemplateRows={"0fr 0fr"}>
              <Box h={"500px"} w={"1500px"}>
                <CarouselArticles />
              </Box>

              <Grid
                gridTemplateColumns={"repeat(7, 1fr)"}
                pt={"15px"}
                pb={"15px"}
                mt={"60px"}
                ml={"auto"}
                mr={"auto"}
                h={"auto"}
                w={"full"}
                gap={"20px"}
                pos={"sticky"}
                top={"70px"}
                zIndex={1}
                bg={"#2b6777"}
              >
                <Button ml={"20px"} colorScheme="teal">
                  Bisnis
                </Button>
                <Button colorScheme="teal">Ekonomi</Button>
                <Button colorScheme="teal">Teknologi</Button>
                <Button colorScheme="teal">Olahraga</Button>
                <Button colorScheme="teal">Kuliner</Button>
                <Button colorScheme="teal">Internasional</Button>
                <Button mr={"20px"} colorScheme="teal">
                  Fiksi
                </Button>
              </Grid>

              <Content />
            </Grid>
            <Sidebar />
          </Grid>
        </Flex>
      </Box>
    </>
  );
};
