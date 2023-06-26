import { Avatar, Box, Text } from "@chakra-ui/react";
import axios from "axios";

export const ProfileUser = () => {
  const getAvatar = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/Public/Avatar-6.png"
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box>
        <Avatar
          src={`https://minpro-blog.purwadhikabootcamp.com/Public/Avatar-6.png`}
          size={"xl"}
        />
        <Text fontSize={"20px"} fontWeight={"medium"}>
          Nama Pengguna
        </Text>
      </Box>
    </>
  );
}
