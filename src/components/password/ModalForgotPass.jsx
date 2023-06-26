import React from "react";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
  Button,
  Input,
  FormControl,
  Text,
  ModalFooter,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

export const ModalForgotPass = ({ isOpen, onClose }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
  });

  const toast = useToast();

  const forgotPassword = async (values) => {
    try {
      await axios.put(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/forgotPass",
        {
          email: values.email,
          FE_URL: "http://localhost:3000",
        }
      );
      console.log("Check your email for reset password");
      toast({
        title: "Reset Password",
        description: "Check your email for reset password",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Reset Password",
        description: error.response.data,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      forgotPassword(values);
      onClose();
    },
  });
  return (
    <>
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Forgot Password</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={formik.handleSubmit}>
              <ModalBody>
                <Text
                  fontSize={"sm"}
                  mb={4}
                  fontWeight={400}
                  color={"gray.600"}
                >
                  Enter the email address you used when you joined and we'll
                  send you a link to reset your password.
                </Text>

                <FormControl
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    rounded={"lg"}
                    focusBorderColor="#C77DFF"
                    placeholder="yours@email.com"
                    _placeholder={{ fontSize: "sm", color: "gray.400" }}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" colorScheme="teal">
                  Send Request
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
