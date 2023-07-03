import { Box, Flex, Text, Image, Button, Stack, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ChangeUsernameButton from "../username/ChangeUsernameButton";
import { ChangeEmailButton } from "../email/ChangeEmailButton";
import { ChangePhoneButton } from "../phone/ChangePhoneButton";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import { setProfileImage } from "../../redux/reducer/AuthReducer";
import { useDispatch } from "react-redux";

export const ProfileUser = () => {
  const [userData, setUserData] = useState(null);
  const [profileImageURL, setProfileImageURL] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch(
          "https://minpro-blog.purwadhikabootcamp.com/api/auth",
          {
            headers,
          }
        );

        const data = await response.json();
        setUserData(data);
        if (data.user.imgProfile) {
          setProfileImageURL(data.user.imgProfile);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  // change foto
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file); // Menampilkan gambar sebelum diunggah
  };

  const handleImageSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };

      const formData = new FormData();
      formData.append("profileImage", selectedImage);

      const response = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded",
        formData,
        {
          headers,
        }
      );

      const imageURL = response.data.result.url;
      setProfileImageURL(imageURL);
      dispatch(setProfileImage(imageURL));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box mt={"10px"} minH={"621px"}>
        <Flex>
          <Box fontWeight={"bold"} fontSize={"18px"}>
            <Text mb={"30px"}>Username</Text>
            <Text mb={"30px"}> Email</Text>
            <Text mb={"30px"}>Phone</Text>
          </Box>
          <Box ml={"5px"} mr={"10px"} fontWeight={"bold"} fontSize={"18px"}>
            <Text mb={"30px"}>:</Text>
            <Text mb={"30px"}>:</Text>
            <Text mb={"30px"}>:</Text>
          </Box>
          <Box align="left" fontSize={"18px"}>
            <Text mb={"30px"}>{userData?.username}</Text>
            <Text mb={"30px"}>{userData?.email}</Text>
            <Text mb={"30px"}>{userData?.phone}</Text>
          </Box>
          <Box align="left">
            <Box>
              <ChangeUsernameButton />
            </Box>
            <Box>
              <ChangeEmailButton />
            </Box>
            <Box>
              <ChangePhoneButton />
            </Box>
          </Box>
        </Flex>
        <Stack>
        <Box align="center">
            {selectedImage ? (
              <Image
                src={URL.createObjectURL(selectedImage)}
                borderRadius={"20px"}
                w={"180px"}
                h={"150px"}
                alignItems={"center"}
              />
            ) : (
              <Flex
                alignItems="center"
                justifyContent="center"
                borderRadius={"20px"}
                w={"180px"}
                h={"150px"}
                bg="gray.200"
              >
                <Icon as={FaCamera} boxSize={6} color="gray.400" />
              </Flex>
            )}
          </Box>
          <Box ml={4}>
            <input type="file" onChange={handleImageUpload} />
            <Button
              mt={2}
              colorScheme="teal"
              onClick={handleImageSubmit}
              isDisabled={!selectedImage}
            >
              Upload Photo
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
