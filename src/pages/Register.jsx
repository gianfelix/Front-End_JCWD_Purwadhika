import {

  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  VStack,
  HStack,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username must be 4 characters minimum")
    .required("Username is required"),
  email: Yup.string()
    .email("In valid email address format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be number")
    .min(10, "Phone number must be 10 characters minimum")
    .max(15, "Phone number must be less than 16 characters")
    .required("Phone number is required"),
  password: Yup.string()
    .min(7, "Password must be 7 characters minimum")
    .max(15, "Password must be less than 16 character")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, "Password requires a special character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password not match")
    .required("Confirm password is required"),
});

export const Register = () => {
  const toastReg = useToast();
  const register = async (values) => {
    try {
      console.log(values);
      const { username, email, phone, password, confirmPassword } = values;
      console.log(values);
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
        {
          username: username,
          email: email,
          phone: phone,
          password: password,
          confirmPassword: confirmPassword,
          FE_URL: "http://localhost:3000",
        }
      );
      console.log("Register: ",res);
      if (res.status === 200) {
        toastReg({
          title: "Register Success",
          description: "Check your email for verification link",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
      
    } catch (error) {
      console.log(error);
      toastReg({
        title: "Register Error",
        description: error.response.data,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
      register(values);
    },
  });
  return (
    <>
      <Stack pt={"70px"}>
        <Box
          pt={"52px"}
          pb={"52px"}
          align="center"
          bg={"teal"}
          h={"auto"}
          w={"100%"}
        >
          <Box
            w={"600px"}
            bg={"white"}
            h={"auto"}
            borderRadius={"20px"}
            p={"20px"}
          >
            <form onSubmit={formik.handleSubmit}>
              <VStack>
                <Text fontSize={"30px"}> Register Form </Text>
                <FormControl
                  isInvalid={formik.touched.username && formik.errors.username}
                  sx={{
                    marginBottom: "20px",
                  }}
                >
                  <FormLabel>Username:</FormLabel>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    variant="filled"
                    placeholder="Username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <FormErrorMessage>
                      {formik.errors.username}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  isInvalid={formik.touched.email && formik.errors.email}
                  sx={{
                    marginBottom: "20px",
                  }}
                >
                  <FormLabel htmlFor="email">Email :</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.phone && formik.errors.phone}
                  sx={{
                    marginBottom: "20px",
                  }}
                >
                  <FormLabel htmlFor="email">Phone :</FormLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    variant="filled"
                    placeholder="Input Phone Number"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.password && formik.errors.password}
                  sx={{
                    marginBottom: "20px",
                  }}
                >
                  <FormLabel htmlFor="password">Password :</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    placeholder="Enter Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <FormErrorMessage>
                      {formik.errors.password}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  sx={{
                    marginBottom: "20px",
                  }}
                  isInvalid={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                >
                  <FormLabel mt={"10px"} htmlFor="confirmPassword">
                    Confirm Password :
                  </FormLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    variant="filled"
                    placeholder="Confirm Password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <FormErrorMessage>
                        {formik.errors.confirmPassword}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <HStack>
                  <Button type="submit">Register</Button>
                  <Button onClick={() => formik.resetForm()}>Reset Form</Button>
                </HStack>
                <Text mt={"2px"}>
                  Already have an account?
                  <Link to="/login">
                    <Button ml={"10px"}>Login</Button>
                  </Link>
                </Text>
              </VStack>
            </form>
          </Box>
        </Box>
      </Stack>
    </>
  );
};
