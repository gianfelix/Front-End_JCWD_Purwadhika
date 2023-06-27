import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  // Form,
  Input,
  VStack,
  Button,
  Stack,
  Text,
  useToast,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import {
  useFormik,
  // Formik,
  // Form,
  // Field,
  // ErrorMessage
} from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";

import {
  loginSuccess,
  userEmail,
  userName,
  userPhone,
} from "../redux/reducer/AuthReducer";

import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ModalForgotPass } from "../components/password/ModalForgotPass";

const LoginSchema = Yup.object().shape({
  // username: Yup.string()
  //   .min(3, "Username must be 3 characters minimum")
  //   .required("Username is required"),
  // email: Yup.string()
  //   .email("Invalid email address format")
  //   .required("Email is required"),
  // phone: Yup.string()
  //   .matches(/^[0-9]+$/, "Phone number must be number")
  //   .required("Phone number is required"),
  identifier: Yup.string()
  .required("Username/ Email/ Phone number is required"),
  password: Yup.string()
    .min(7, "Password must be 7 characters minimum")
    .max(35, "Password must be less than 16 character")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      "Password requires a special character"
    )
    .required("Password is required"),
});
export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onForgot = () => {
    onOpen();
  };
  const navigate = useNavigate();
  function toHome() {
    navigate("/");
  }
  const toast = useToast();
  const dispatch = useDispatch();
  const login = async (values) => {
    try {
      // const { username, email, phone, password } = values;
      console.log(values);
      const login = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
        {
          // username: username,
          // email: email,
          // phone: phone,
          // password: password,
          username: values.identifier,
          email: values.identifier,
          phone: values.identifier,
          password: values.password,
        }
      );
      console.log(login);
      if (login.status === 200) {
        dispatch(loginSuccess(login.data.token));
        // dispatch(userName(login.data.isAccountExist.username));
        // dispatch(userEmail(login.data.isAccountExist.email));
        // dispatch(userPhone(login.data.isAccountExist.phone));
        console.log(login.data.isAccountExist);
        toast({
          description: "Login Success",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        toHome();
      }
    } catch (err) {
      console.log(err);
      toast({
        description: "Login Failed",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      // username: "",
      // email: "",
      // phone: "",
      identifier: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      login(values);
      // fetchUser(values.email);
    },
  });
  return (
    <>
      <Box pt={"231px"} align={"center"} h={"auto"} bg={"teal"} pb={"240px"}>
        <Box
          w={"600px"}
          bg={"white"}
          h={"auto"}
          borderRadius={"20px"}
          p={"20px"}
        >
          <Stack>
            <form onSubmit={formik.handleSubmit}>
              <VStack>
                <Text fontSize={"30px"}>Login</Text>
                {/* <FormControl
                  sx={{
                    marginBottom: "25px",
                  }}
                  isInvalid={formik.touched.username && formik.errors.username}
                >
                  <FormLabel htmlFor="username">Username :</FormLabel>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    colorScheme={"black"}
                    placeholder="Insert Your Username"
                  />
                  {formik.touched.username && formik.errors.username && (
                    <FormErrorMessage>
                      {formik.errors.username}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  sx={{
                    marginBottom: "25px",
                  }}
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <FormLabel htmlFor="email">Email :</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Insert Your Email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  sx={{
                    marginBottom: "25px",
                  }}
                  isInvalid={formik.touched.phone && formik.errors.phone}
                >
                  <FormLabel htmlFor="phone">Phone :</FormLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder="Insert Your Phone"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                  )}
                </FormControl> */}
                <FormControl
                  isInvalid={formik.touched.identifier && formik.errors.identifier}
                >
                  <FormLabel htmlFor="identifier">Username, email, or phone number</FormLabel>
                  <Input
                    id="identifier"
                    name="identifier"
                    type="text"
                    rounded={"lg"}
                    onChange={formik.handleChange}
                    placeholder="Insert Your Username/ email/ phone number"
                    variant="filled"

                    value={formik.values.identifier}
                  />
                  {formik.touched.identifier && formik.errors.identifier && (
                    <FormErrorMessage>{formik.errors.identifier}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  sx={{
                    marginBottom: "25px",
                  }}
                  isInvalid={formik.touched.password && formik.errors.password}
                >
                  <FormLabel htmlFor="password">Password :</FormLabel>
                  <Input
                  
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Insert Your Password"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <FormErrorMessage>
                      {formik.errors.password}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Flex>
                  <Button
                    // onClick={() => dispatch(loginSuccess())}
                    type="submit"
                  >
                    Login
                  </Button>
                  <Button ml={"10px"} onClick={onForgot} variant={"ghost"}>
                    Forgot Password ?
                  </Button>
                  <ModalForgotPass
                    isOpen={isOpen}
                    onClose={onClose}
                    onOpen={onOpen}
                  />
                </Flex>
                <Text mt={"10px"} mb={"20px"}>
                  Don't have an account?
                  <Link to={"/register"}>
                    <Button ml={"10px"}>Register</Button>
                  </Link>
                </Text>
              </VStack>
            </form>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
