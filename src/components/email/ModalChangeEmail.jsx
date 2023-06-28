import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
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

const EmailSchema = Yup.object().shape({
  currentEmail: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  newEmail: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
});

export const ModalChangeEmail = ({ isOpen, onClose }) => {
    const toPageHome = useNavigate();
    function toHome() {
        toPageHome("/");
    }
  const toast = useToast();
  const emailChange = async (values) => {
    const token = localStorage.getItem("token");
    const { currentEmail, newEmail } = values;
    try {
      const respon = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changeEmail",
        {
          currentEmail: currentEmail,
          newEmail: newEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("respon change email", respon);
      toast({
        title: "Change Email Success",
        description: "check your email for verification",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      toHome();
    } catch (error) {
      console.log(error);
      toast({
        title: "Change Email Error",
        description: error.response.data,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      currentEmail: "",
      newEmail: "",
    },
    validationSchema: EmailSchema,
    onSubmit: (values) => {
      emailChange(values);
      onClose();
    },
  });

  return (
    <>
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change Email</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={formik.handleSubmit}>
                <FormLabel>Current Email:</FormLabel>
                <FormControl
                  isInvalid={
                    formik.errors.currentEmail && formik.touched.currentEmail
                  }
                >
                  <Input
                    required
                    id="currentEmail"
                    name="currentEmail"
                    placeholder="Current Email"
                    type="email"
                    value={formik.values.currentEmail}
                    onChange={formik.handleChange}
                    w={"400px"}
                  />
                  {formik.errors.currentEmail &&
                    formik.touched.currentEmail && (
                      <FormErrorMessage>
                        {formik.errors.currentEmail}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormLabel mt={"22px"}>New Email:</FormLabel>
                <FormControl
                  isInvalid={formik.errors.newEmail && formik.touched.newEmail}
                >
                  <Input
                    required
                    id="newEmail"
                    name="newEmail"
                    placeholder="New Email"
                    type="email"
                    value={formik.values.newEmail}
                    onChange={formik.handleChange}
                    w={"400px"}
                  />
                  {formik.errors.newEmail && formik.touched.newEmail && (
                    <FormErrorMessage>
                      {formik.errors.newEmail}
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
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
