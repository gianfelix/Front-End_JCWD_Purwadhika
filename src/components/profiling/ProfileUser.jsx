import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
            <Text mb={"10px"}>Username</Text>
            <Text mb={"10px"}> Email</Text>
            <Text mb={"10px"}>Phone</Text>
          </Box>
          <Box ml={"5px"} mr={"10px"} fontWeight={"bold"} fontSize={"18px"}>
            <Text mb={'10px'}>:</Text>
            <Text mb={'10px'}>:</Text>
            <Text mb={'10px'}>:</Text>
          </Box>
          <Box align="left" fontSize={"18px"}>
            <Text mb={'10px'}>{userData?.username}</Text>
            <Text mb={'10px'}>{userData?.email}</Text>
            <Text mb={'10px'}>{userData?.phone}</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
