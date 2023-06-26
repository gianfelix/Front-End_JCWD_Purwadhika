import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import axios from "axios";

export const CarouselArticles = () => {
  const [latest, setLatest] = useState([]);
  async function latestArticles() {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=&sort=asc"
      );
      setLatest(res.data.result);
    } catch (error) {
      console.log(error);
    }
  }
  latestArticles();

  const [slider, setSlider] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Box h={"600px"} id="carousel" mt={"20px"}>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Stack>
          <IconButton
            bgColor={"teal.500"}
            aria-label="left-arrow"
            position="absolute"
            left={"50px"}
            top={"1250px"}
            transform="translate(0%, -50%)"
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <BiLeftArrowAlt size="40px" />
          </IconButton>

          <IconButton
            bgColor={"teal.500"}
            aria-label="right-arrow"
            position="absolute"
            left={"1410px"}
            top={"1250px"}
            transform="translate(0%, -50%)"
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <BiRightArrowAlt size="40px" />
          </IconButton>
        </Stack>
        <Text
          mb={"10px"}
          fontSize={"35px"}
          fontFamily={"bauhaus"}
          color={"white"}
          fontWeight={"bold"}
        >
          Latest Articles
        </Text>

        <Slider {...settings} ref={setSlider}>
          {latest.map((item) => {
            return (
              <Card  minW={'400px'} maxW={"400px"} minH={'450px'} maxH={"450px"}>
                <CardBody align={"center"}>
                  <Center>
                    <Image
                      src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
                      borderRadius={"20px"}
                      w={"300px"}
                      h={"150px"}
                      alignItems={"center"}
                    />
                  </Center>
                  <Stack mt="10px" spacing="2">
                    <Heading size="18px">{item.title}</Heading>
                    <Text align='justify' fontSize={"16px"}>{item.content}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup>
                    <Button>Like</Button>
                    
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Slider>
      </Box>
    </>
  );
};
