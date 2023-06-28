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

const PhoneSchema = Yup.object().shape({
  currentPhone: Yup.string()
    .min(10, "Phone must be 10 characters minimum")
    .required("Phone is required"),
  newPhone: Yup.string()
    .min(10, "Phone must be 10 characters minimum")
    .required("Phone is required"),
});

export const ModalChangePhone = ({ isOpen, onClose }) => {
  const toPageHome = useNavigate();
  function toHome() {
    toPageHome("/");
  }
  const toast = useToast();
  const phoneChange = async (values) => {
    const token = localStorage.getItem("token");
    const { currentPhone, newPhone } = values;
    try {
      const respon = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePhone",
        {
          currentPhone: currentPhone,
          newPhone: newPhone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("respon change phone", respon);
      toast({
        title: "Change Phone Success",
        description: "check your email for verification",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      toHome();
    } catch (error) {
      console.log(error);
      toast({
        title: "Change Phone Failed",
        description: error.response.data,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      currentPhone: "",
      newPhone: "",
    },
    validationSchema: PhoneSchema,
    onSubmit: (values) => {
      phoneChange(values);
      onClose();
    },
  });

  return (
    <>
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change Phone</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <form onSubmit={formik.handleSubmit}>
                  <FormControl
                    isInvalid={
                      formik.errors.currentPhone && formik.touched.currentPhone
                    }
                  >
                    <Input
                      required
                      id="currentPhone"
                      name="currentPhone"
                      type="number"
                      placeholder="Current Phone"
                      value={formik.values.currentPhone}
                      onChange={formik.handleChange}
                      w={"400px"}
                    />
                    {formik.touched.currentPhone &&
                      formik.errors.currentPhone && (
                        <FormErrorMessage>
                          {formik.errors.currentPhone}
                        </FormErrorMessage>
                      )}
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.errors.newPhone && formik.touched.newPhone
                    }
                  >
                    <Input
                      required
                      id="newPhone"
                      name="newPhone"
                      type="number"
                      placeholder="New Phone"
                      value={formik.values.newPhone}
                      onChange={formik.handleChange}
                      w={"400px"}
                    />
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
                  <Button
                    mt={"20px"}
                    w="125px"
                    type="submit"
                    colorScheme="teal"
                  >
                    Save Change
                  </Button>
                </form>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
