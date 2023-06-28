import { Box, Flex,  Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ChangeUsernameButton from "../username/ChangeUsernameButton";
import { ChangeEmailButton } from "../email/ChangeEmailButton";
import { ChangePhoneButton } from "../phone/ChangePhoneButton";

export const ProfileUser = () => {
  const [userData, setUserData] = useState(null);

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
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

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
              <ChangePhoneButton/>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
