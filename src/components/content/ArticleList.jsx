import React, { useState, useEffect } from "react";
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
import { BsBookmarksFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark } from "../../redux/reducer/ArticlesReducer";
import axios from "axios";
import { WiTime4 } from "react-icons/wi";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getArticles();
  }, [currentPage]);
  async function getArticles() {
    try {
      const responArticles = await axios.get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?sort=ASC&page=${currentPage}`
      );
      setArticles(responArticles.data.result);
      setTotalPages(responArticles.data.totalPages);
    } catch (err) {
      console.log(err);
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    const pageRange = 3; // Rentang halaman yang ingin ditampilkan di antara tombol "Previous" dan "Next"
    let startPage = currentPage - pageRange;
    let endPage = currentPage + pageRange;
    const totalPagesInRange = pageRange * 2 + 1;

    if (startPage < 1) {
      endPage = Math.min(totalPagesInRange, totalPages);
      startPage = 1;
    }

    if (endPage > totalPages) {
      startPage = Math.max(totalPages - totalPagesInRange + 1, 1);
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <Button
          key={i}
          size="sm"
          color={"white"}
          variant={i === currentPage ? "solid" : "outline"}
          colorScheme="teal"
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      );
    }

    return pageButtons;
  };

  return (
    <>
      <Box ml={"35px"} mb={"50px"}>
        <Text
          fontSize={"40px"}
          color={"#FFFFFF"}
          fontWeight={"bold"}
          fontFamily={"bauhaus"}
          mb={"10px"}
        >
          All Articles
        </Text>

        <Flex wrap={"wrap"} gap={"20px"}>
          {articles.map((item) => {
            return (
              <Card
                maxW={"340px"}
                minW={"340px"}
                maxH={"500px"}
                minH={"400px"}
                borderRadius={"20px"}
              >
                <CardBody justify="center">
                  <Center>
                    <Image
                      src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
                      borderRadius={"20px"}
                      w={"300px"}
                      h={"200px"}
                      alignItems={"center"}
                    />
                  </Center>
                  <Stack maxW="350px" maxH={"auto"}>
                    <Text fontWeight={"bold"}>{item.title}</Text>
                    <Text noOfLines={3}>{item.content}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <Text
                  align={"left"}
                  mt={"7px"}
                  ml={"15px"}
                  color={"teal"}
                  fontWeight={"bold"}
                >
                  Category: {item.Category.name}
                </Text>
                <Flex ml={"15px"} align={"left"}>
                  <Box mt={"3px"} mr={"3px"}>
                    <WiTime4 size={"20px"} />
                  </Box>
                  <Text>
                    {item.updatedAt.slice(0, 10)},{" "}
                    {item.updatedAt.slice(11, 16)}
                    WIB
                  </Text>
                </Flex>
                <CardFooter>
                  <ButtonGroup>
                    <Button>Like</Button>
                    {!login ? (
                      <Button
                        variant={"unstyled"}
                        rightIcon={<BsBookmarksFill />}
                        onClick={() => toastFailedBookmark()}
                      ></Button>
                    ) : (
                      <Button
                        variant={"unstyled"}
                        rightIcon={<BsBookmarksFill />}
                        onClick={() =>
                          dispatch(addToBookmark(articles), toastAddBookmark())
                        }
                      ></Button>
                    )}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Flex>
        {/* --Pagination-- */}
        <Flex justify="center" mt={4}>
          <Button
            mr={"15px"}
            size="sm"
            variant="solid"
            colorScheme="teal"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Box>{renderPageButtons()}</Box>

          <Button
            ml={"15px"}
            size="sm"
            variant="solid"
            colorScheme="teal"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </Flex>
      </Box>
    </>
  );
};
