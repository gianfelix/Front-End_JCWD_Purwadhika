import React, { useState } from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/react";

export const ArticlesPaginationButton = () => {
    const totalPages = 100; // Jumlah total halaman
    const pageRange = 3; // Rentang halaman yang ingin ditampilkan di antara tombol "Previous" dan "Next"
    const [activePage, setActivePage] = useState(1);
  
    const handlePageChange = (page) => {
      setActivePage(page);
    };
  
    const getPageNumbers = () => {
      const pageNumbers = [];
      let startPage = activePage - pageRange;
      let endPage = activePage + pageRange;
  
      if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(startPage + pageRange * 2, totalPages);
      }
  
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(endPage - pageRange * 2, 1);
      }
  
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
  
      return pageNumbers;
    };
  
    return (
      <Box>
        <Flex justify="center" mt={4}>
          <Button
            mr={"15px"}
            size="sm"
            variant="solid"
            colorScheme="teal"
            disabled={activePage === 1}
            onClick={() => handlePageChange(activePage - 1)}
          >
            Previous
          </Button>
  
          {getPageNumbers().map((pageNumber) => (
            <Button
              key={pageNumber}
              size="sm"
              variant={pageNumber === activePage ? "solid" : "outline"}
              colorScheme="teal"
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
  
          <Button
            ml={"15px"}
            size="sm"
            variant="solid"
            colorScheme="teal"
            disabled={activePage === totalPages}
            onClick={() => handlePageChange(activePage + 1)}
          >
            Next
          </Button>
        </Flex>
        <Text mt={2} textAlign="center">
          Page {activePage} of {totalPages}
        </Text>
      </Box>
    );
  };