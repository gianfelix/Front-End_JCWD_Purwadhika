import { Box, Text, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const NameNavbar = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Include the JWT in the request headers
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
      <Box mt={'3px'} fontSize={"15px"} fontWeight={"bold"}>
        <Stack>
          <Text mb={'-10px'}>Welcome,</Text>
          <Text> {userData?.username}</Text>
        </Stack>
      </Box>
    </>
  );
};
