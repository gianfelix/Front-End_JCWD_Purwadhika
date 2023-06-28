import {
  Box,
  Button,
  Input,
  InputGroup,
  Select,
  Stack,
  Text,
  Textarea,

} from "@chakra-ui/react";

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeArticle } from "../../redux/reducer/ArticlesReducer";

export const CreateArticle = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const handleOption = (event) => {
    setSelected(event.target.value);
  };

  const [category, setCategory] = useState();
  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    /////

    const data = {
      title: document.getElementById("title").value,
      country: document.getElementById("country").value,
      CategoryId: selected,
      url: "/",
      keywords: document.getElementById("keywords").value,
      content: document.getElementById("content").value,
    };
    const file = document.getElementById("file").files[0];
    dispatch(makeArticle(data, file));
  };

  return (
    <>
      <Box align={"center"}>
        <Stack>
          <InputGroup mt={"20px"}>
            <form onSubmit={handleSubmit}>
              <Stack>
                <Input
                  placeholder="Input your title here"
                  id="title"
                  name="title"
                  w={"800px"}
                  minH={"100px"}
                  fontSize={"25px"}
                  fontWeight={"bold"}
                  border={"1px"}
                />
                <Input
                  placeholder="Country"
                  id="country"
                  name="country"
                  w={"800px"}
                  border={"1px"}
                />
                <Select w={"800px"} border={"1px"} value={selected} onChange={handleOption}>
                  <option value={""}>Category</option>
                  {category &&
                    category.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </Select>
                <Input
                  placeholder="Keyword"
                  w={"800px"}
                  id="keywords"
                  name="keywords"
                  border={"1px"}
                />
                <Textarea
                  placeholder="Input your article here.."
                  id="content"
                  name="content"
                  w={"800px"}
                  minH={"250px"}
                  border={"1px"}
                ></Textarea>

                <Box > 
                  <Stack
                    border={"1px"}
                    w={"800px"}
                    borderRadius={"10px"}
                  >
                    <Text
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      color={"blackAlpha.400"}
                    >
                     Input Image Here
                    </Text>
                    <Input 
                      type="file"
                      id="file"
                      placeholder="Input your image "
                      variant={""}
                    ></Input>
                  </Stack>
                </Box>
                <Box align={"center"}>

                <Button
                  w={"200px"}
                  mt={"20px"}
                  mb={"40px"}
                  type="submit"
                  colorScheme={"teal"}
                  >
                  Write and Publish
                </Button>
                  </Box>
              </Stack>
            </form>
          </InputGroup>
        </Stack>
      </Box>
    </>
  );
};
