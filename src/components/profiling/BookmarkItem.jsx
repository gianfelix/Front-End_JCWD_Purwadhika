import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const BookmarkItem = ({ bookmark }) => {
  return bookmark?.map((item) => {
    return (
      <>
        <Box key={item.id}> 
          <Card>
            <Image
              maxW={"120px"}
              minW={"120px"}
              maxH={"100px"}
              minH={"100px"}
              src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
              borderRadius={"20px"}
              alt="Image Bookmark"
            />
            <Stack>
              <CardBody>
                <Text>{item.title}</Text>
                <Text>{item.content}</Text>
              </CardBody>
              <CardFooter>
                <Button>Like</Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
      </>
    );
  });
};
