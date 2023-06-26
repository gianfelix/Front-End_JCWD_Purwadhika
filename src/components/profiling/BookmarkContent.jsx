import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { BookmarkItem } from "./BookmarkItem";

export const BookmarkContent = () => {
  const bookmarkArticles = useSelector(
    (state) => state.ArticlesReducer.articles
  );
  return (
    <>
      <Box>
        <BookmarkItem bookmark={bookmarkArticles} />
      </Box>
    </>
  );
};
