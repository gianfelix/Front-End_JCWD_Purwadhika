import {
  Box,
  Text,
  Button,
  Grid,
  Avatar,
  HStack,
  AvatarGroup,
} from "@chakra-ui/react";
import { AvatarIcon } from "./AvatarIcon";
import { TopWriters } from "./TopWriters";
export const Sidebar = () => {
  return (
    <>
      <Box
        position={"sticky"}
        top={"70px"}
        bg={"#c8d8e4"}
        h={"867px"}
        w={"auto"}
      >
        <Box mr={"40px"}>
          <Grid
            gridTemplateColumns={"1fr 1fr"}
            mt={"50px"}
            fontSize={"2xl"}
            fontWeight={"bold"}
            ml={"20px"}
          >
            <Text>800+</Text>
            <Text>100+</Text>
          </Grid>
          <Grid gridTemplateColumns={"1fr 1fr"} fontSize={"lg"} ml={"20px"}>
            <Text>Articles</Text>
            <Text>Writer</Text>
          </Grid>
        </Box>

        <AvatarIcon />

        <Text mt={"40px"} fontSize={"2xl"}>
          Trending Topic:
        </Text>
        <Button mt={"20px"} mr={"10px"}>
          Teknologi
        </Button>
        <Button mt={"20px"} mr={"10px"}>
          Ekonomi
        </Button>
        <Button mt={"20px"} mr={"10px"}>
          Bisnis
        </Button>
        <Button mt={"20px"} mr={"10px"}>
          Fiksi
        </Button>
        <Button mt={"20px"} mr={"10px"}>
          Internasional
        </Button>
        <Button mt={"20px"} mr={"10px"}>
          Olahraga
        </Button>
        <Button mt={"20px"} mr={"10px"}>
          Kuliner
        </Button>
        <TopWriters  />
      </Box>
    </>
  );
};
