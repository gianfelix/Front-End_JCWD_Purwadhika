import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Cards = () => {
  const listName = [
    {
      title: "Mapping Geograph Data in Python",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*o9kgCrseDkOjKgoPItWmbg.jpeg",
      name: "Marcelo Rovai",
      article:
        "One great help when working in Data Science, is to visualize your data on a geo map and for that, several packages can take care of it, as GeoPandas for example. You can learn how to use GeoPandas, reading my article: How Safe are the Streets of Santiago.",
      category: "Mapping",
    },
    {
      title: "How to do Distributed Processing of Landsat Data in Python",
      image: "https://miro.medium.com/v2/resize:fit:640/0*KISZbFZDMQmWzNsx",
      name: "Lak Lakshamanan",
      article:
        "In this post, you learned how to process the public Landsat dataset on Google Cloud Storage in a distributed manner, the concepts of which can be applied to many other use cases. The key ingredient here was Google Cloud Dataflow, which lets you distribute your Python scripts over lots of machines without having to configure or manage servers.",
      category: "Remote-Sensing",
    },
    {
      title:
        "Using High-Resolution Satellite Images for Evironmental Monitoring from 530km in Space",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*lMiUWkwGIIRTbWaw8EclIA.jpeg",
      name: "Eric van Rees",
      article:
        "Meet Jose Manuel Lattus, a geologist from Chile. In the latest Soar Cast, he discusses his work in mineral exploration and environmental studies, and explains how he makes a living by creating valuable information products based on different types of satellite imagery, such as Soar’s SkyMap50 satellite imagery.",
      category: "Mining",
    },
    {
      title:
        "Our Urban Forest StoryMap: How we Tell the Complete Story of our Tree Canopy",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*MfvSlXsWs_tJWDBjeQGaXA.jpeg",
      name: "NYC Parks Deputy Chief of Data Systems & Analytics Uma Bhandaram",
      article:
        "Have you ever looked out your window and wondered about the trees you see? How has the tree canopy cover changed over time? Who takes care of these trees? What does the forest look like in another part of the City?",
      category: "Forest",
    },
    {
      title: "Welcome To Planet Earth",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*sEzAW8EHSoqpN4OP8J-Otw.png",
      name: "Caitlin Johnstone",
      article:
        "Welcome to Planet Earth, where books written by dead men tell the living how to live. Where children who do not know how to live teach their children how to live.",
      category: "Earth",
    },
  ];
  const [data, setData] = useState(listName);

  return (
    <>
      <Box>
        {data.map((item) => {
          return (
            <Card
              ml={"auto"}
              mr={"auto"}
              mt={"25px"}
              w={"1200px"}
              bgGradient="linear(to-r, #F1F2B5, #71c98e)"
              borderRadius={"30px"}
              shadow={"lg"}
            >
              <CardBody>
                <Flex spacing="3">
                  <Image
                    mr={"15px"}
                    w={"230px"}
                    maxH={"210px"}
                    src={item.image}
                  />
                  <Stack m={"auto"}>
                    <Heading fontSize={"22px"}>{item.title}</Heading>
                    <Text mb={"15px"} fontSize={"13px"}>
                      Author: {item.name}
                    </Text>
                    <Text textAlign={"justify"} color="black" fontSize="15px">
                      {item.article}
                    </Text>
                    <Flex align={"left"}>
                      <Button
                        bg={"#F1F2B5"}
                        _hover={{ bg: "teal" }}
                        color={"black"}
                        px={"15px"}
                        w={"auto"}
                      >
                        <Text>{item.category}</Text>
                      </Button>
                    </Flex>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
          );
        })}
      </Box>
    </>
  );
};
