import axios from "axios";
import { Box, Button, Center, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import { userEmail } from "../redux/reducer/AuthReducer";
import { MdMarkEmailRead } from "react-icons/md";
export const Verify = () => {
  const toastVerif = useToast();
  const navigate = useNavigate();
  const url = window.location.href.split("/");
  const token = url[url.length - 1];
  const email = {
    email: userEmail,
  };
  const verify = async () => {
    try {
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toastVerif({
        title: "Your account has been verified",
        description: res.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      toastVerif({
        title: "Error",
        description: err.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Box pt={"237px"} mb={"220px"}>
        <Center>
          <Box bg={"#f2f2f2"} w={"550px"} borderRadius={"40px"}>
            <Center>
              <MdMarkEmailRead size={"200px"} color="teal" />
            </Center>

            <Text fontFamily={"bauhaus"} fontWeight={"bold"} fontSize={"3xl"}>
              Verify your email address
            </Text>

            <Center mt={"20px"}>
              <AiOutlineArrowDown size={"50px"} />
            </Center>
            <Button
              mt={"20px"}
              mb={"35px"}
              w={"300px"}
              fontSize={"20px"}
              type="submit"
              colorScheme="teal"
              onClick={verify}
            >
              CLICK TO VERIFY
            </Button>
          </Box>
        </Center>
      </Box>
    </>
  );
};
