import { useState, useEffect } from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import axios from 'axios';

const API_URL = 'https://minpro-blog.purwadhikabootcamp.com/api/blog';

const ArticlesPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${API_URL}?sort=ASC&page=${currentPage}`);
      const { data, totalPages } = response.data;
      setBlogs(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderBlogs = () => {
    return blogs.map((blog) => (
      <Box key={blog.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
        <Text fontWeight="bold">{blog.title}</Text>
        <Text mt={2}>{blog.content}</Text>
      </Box>
    ));
  };

  const renderPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button
          key={i}
          size="sm"
          variant={i === currentPage ? 'solid' : 'outline'}
          colorScheme="blue"
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      );
    }

    return pages;
  };

  return (
    <div>
      {renderBlogs()}
      <HStack justify="center" mt={4}>
        <Box>
          <Button
            size="sm"
            variant="outline"
            colorScheme="blue"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            leftIcon={<ChevronLeftIcon />}
          >
            Previous
          </Button>
        </Box>
        {renderPages()}
        <Box>
          <Button
            size="sm"
            variant="outline"
            colorScheme="blue"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            rightIcon={<ChevronRightIcon />}
          >
            Next
          </Button>
        </Box>
      </HStack>
    </div>
  );
};

export default ArticlesPagination;
