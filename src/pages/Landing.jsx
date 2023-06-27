import { Box, Grid, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";

// import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { HeroBanner } from "../components/HeroBanner";
import { Content } from "../components/content/content";
import { CarouselArticles } from "../components/carousel/CarouselArticles";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <Box pt={"70px"}>
        <HeroBanner />

        <Flex bg={"#2b6777"}>
          <Grid gridTemplateColumns={"1fr 1fr"}>
            <Grid gridTemplateRows={"0fr 0fr"}>
              <Box h={"500px"} w={"1500px"} mb={"80px"}>
                <CarouselArticles />
              </Box>

              <Content />
            </Grid>
            <Sidebar />
          </Grid>
        </Flex>
      </Box>
    </>
  );
};
