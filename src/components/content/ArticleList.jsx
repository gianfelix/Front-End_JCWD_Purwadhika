import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Card,
  CardBody,
  Center,
  Image,
  Divider,
  CardFooter,
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import {BsBookmarksFill} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark } from "../../redux/reducer/ArticlesReducer";
import axios from "axios";

export const ArticleList = () => {
const toast = useToast();
function toastAddBookmark() {
  toast({
    title: "Bookmark Article Success",
    status: "success",
    duration: 3000,
    isClosable: true,
  });
}
function toastFailedBookmark() {
  toast({
    title: "Bookmark Article Failed",
    description: "You must login first",
    status: "error",
    duration: 3000,
    isClosable: true,
  });
}

const login = useSelector((state) => state.AuthReducer.login);
const dispatch = useDispatch();

  const [articles, setArticles] = useState([]);
  async function getArticles() {
    try {
      const responArticles = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog"
      );
      setArticles(responArticles.data.result);
    } catch (err) {
      console.log(err);
    }
  }
  getArticles();
  return (
    <>
      <Box ml={'35px'} mb={"50px"} >
        <Text fontSize={"40px"} color={"#FFFFFF"} fontWeight={"bold"} fontFamily={"bauhaus"} mb={"10px"}>All Articles</Text>
        
        <Flex wrap={"wrap"} gap={"20px"}>
          {articles.map((item) => {
            return (
              <Card maxW={"340px"} minW={"340px"} maxH={"500px"} minH={"400px"} borderRadius={"20px"} >
                <CardBody justify="center" >
                  <Center>
                    <Image
                      src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
                      borderRadius={"20px"}
                      w={"300px"}
                      h={"200px"}
                      alignItems={"center"}
                    />
                  </Center>
                  <Stack maxW="350px" maxH={"auto"} >
                    <Text>{item.title}</Text>
                    <Text>{item.content}</Text>
                    
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup>
                    <Button>Like</Button>
                    {!login? (
                      <Button variant={"unstyled"}
                      rightIcon={<BsBookmarksFill/>}
                      onClick={() => toastFailedBookmark()}>
                      </Button>
                    ) : (
                      <Button variant={"unstyled"} 
                      rightIcon={<BsBookmarksFill/>}
                      onClick={() => dispatch(addToBookmark(articles), toastAddBookmark(), )}>
                      </Button>
                    )}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Flex>
      </Box>
    </>
  );
};
