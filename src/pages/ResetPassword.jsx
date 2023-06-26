import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,

  Text,

  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import * as Yup from "yup";
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const url = window.location.href.split("/");
  const token = url[url.length - 1];
  const navigate = useNavigate();
  const toast = useToast();

  const toLoginPage = () => {
    navigate("/login");
  };

  const resetSchema = Yup.object().shape({
    password: Yup.string()
      .min(7, "Password must be 7 characters minimum")
      .max(15, "Password must be less than 16 character")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[0-9]/, "Password requires a number")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password not match")
      .required("Confirm password is required"),
  });

  const resetPassword = async (values) => {
    try {
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/resetPass",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      toast({
        title: "Reset Password Success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Reset Password Error",
        description: error.response.data,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetSchema,
    onSubmit: (values) => {
      resetPassword(values);
      toLoginPage();
    },
  });

  return (
    <>
      <Box pt={"200px"} pb={"377px"} ml={"auto"} mr={"auto"} w={"500px"}>
        <Text fontSize="2xl">Reset Password</Text>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
          mt={"30px"}
            isRequired
            isInvalid={formik.touched.password && formik.errors.password}
          >
            <FormLabel>New Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                name="password"
                type="password"
                rounded={"10px"}
                placeholder="Input your new password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </InputGroup>
          </FormControl>
          <FormControl
          mt={"20px"}
            isRequired
            isInvalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          >
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                rounded={"10px"}
                placeholder="Confirm your new password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
            </InputGroup>
          </FormControl>
          <Button mt={"20px"} type="submit" colorScheme="teal" variant={"solid"}>
            Save
          </Button>
        </form>
      </Box>
    </>
  );
};
