import {

  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,

  ModalHeader,
  ModalOverlay,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UsernameSchema = Yup.object().shape({
  currentUsername: Yup.string().required("Username is required"),
  newUsername: Yup.string()
    .min(4, "Username must be 4 characters minimum")
    .required("Username is required"),
});

export const ModalChangeUsername = ({ isOpen, onClose }) => {
  const { user } = useSelector((state) => state.AuthReducer);
  const toPageHome = useNavigate();
  function toHome() {
    toPageHome("/");
  }

  const dispatch = useDispatch();
  const toast = useToast();

  const change = async (values, newValues) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const { currentUsername, newUsername } = values;
    try {
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changeUsername",
        {
          currentUsername: currentUsername,
          newUsername: newUsername,
          FE_URL: "http://localhost:3000",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("respon change username", res);
      toast({
        title: "Change username success",
        description: "check your email for verification",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      toHome();
    } catch (error) {
      console.log(error);
      toast({
        title: "Change username failed",
        description: "try again later",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      currentUsername: "",
      newUsername: "",
    },
    validationSchema: UsernameSchema,
    onSubmit: (values) => {
      change(values);
      onClose();
    },
  });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <form onSubmit={formik.handleSubmit}>
                <FormLabel >Current Username:</FormLabel>
                <FormControl
                  isInvalid={
                    formik.touched.currentUsername &&
                    formik.errors.currentUsername
                  }
                >
                  <Input
                    required
                    id="currentUsername"
                    type="currentUsername"
                    placeholder="Current Username"
                    name="currentUsername"
                    value={formik.values.currentUsername}
                    onChange={formik.handleChange}
                    w={"400px"}
                  />
                  {formik.touched.currentUsername &&
                    formik.errors.currentUsername && (
                      <FormErrorMessage>
                        {" "}
                        {formik.errors.currentUsername}{" "}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormLabel mt={"22px"}>New Username:</FormLabel>
                <FormControl
                  isInvalid={
                    formik.touched.newUsername && formik.errors.newUsername
                  }
                >
                  <Input
                    required
                    id="newUsername"
                    type="newUsername"
                    placeholder="New Username"
                    name="newUsername"
                    value={formik.values.newUsername}
                    onChange={formik.handleChange}
                    w={"400px"}
                  />
                  {formik.touched.newUsername && formik.errors.newUsername && (
                    <FormErrorMessage>
                      {" "}
                      {formik.errors.newUsername}{" "}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Button
                  mt={"20px"}
                  mr={"20px"}
                  w="70px"
                  onClick={onClose}
                  colorScheme="red"
                >
                  Close
                </Button>
                <Button mt={"20px"} w="125px" type="submit" colorScheme="teal">
                  Save Change
                </Button>
              </form>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
