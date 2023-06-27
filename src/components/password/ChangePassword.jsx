import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const ChangePassSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  password: Yup.string()
    .min(7, "Password must be 7 characters minimum")
    .max(15, "Password must be less than 16 character")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password not match")
    .required("Confirm password is required"),
});

export const ChangePassword = () => {
  const navigate = useNavigate();
  function toHome() {
    navigate("/");
  }

  const toast = useToast();
  const changePassword = async (values) => {
    const token = localStorage.getItem("token");
    console.log("Token: ", token);
    const { currentPassword, password, confirmPassword } = values;
    try {
      const respon = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass",
        {
          currentPassword: currentPassword,
          password: password,
          confirmPassword: confirmPassword,
          FE_URL: "http://localhost:3000",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(respon);
      toast({
        title: "Change Password Success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      toHome();
    } catch (error) {
      console.log(error);
      toast({
        title: "Change Password Failed",
        description: error.response.data,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: ChangePassSchema,
    onSubmit: (values) => {
      changePassword(values);
    },
  });

  return (
    <>
      <Box mt={"50px"} h={'581px'}>
        <form onSubmit={formik.handleSubmit}>
          <Stack w={"700px"} mx={"auto"}>
            <FormControl
              isInvalid={
                formik.touched.currentPassword && formik.errors.currentPassword
              }
            >
              <FormLabel>Current Password</FormLabel>
              <Input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                rounded={"10px"}
                placeholder="Input your current password"
              />
              {formik.touched.currentPassword &&
                formik.errors.currentPassword && (
                  <FormErrorMessage>
                    {formik.errors.currentPassword}
                  </FormErrorMessage>
                )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.password && formik.errors.password}
            >
              <FormLabel>New Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                rounded={"10px"}
                placeholder="Input your new password"
              />
              {formik.touched.password && formik.errors.password && (
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            >
              <FormLabel>Confirm Password</FormLabel>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                rounded={"10px"}
                placeholder="Confirm your new password"
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <FormErrorMessage>
                    {formik.errors.confirmPassword}
                  </FormErrorMessage>
                )}
            </FormControl>
            <Box mt={"20px"} mb={"40px"}>
              <Button
                colorScheme="teal"
                type="submit"
                rounded={"10px"}
                w={"250px"}
              >
                Submit Change Password
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </>
  );
};
