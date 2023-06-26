import { Avatar, Box, Grid, Stack, Text } from "@chakra-ui/react";
export const TopWriters = () => {
  return (
    <>
      <Text mt={"50px"} fontSize={"2xl"}>
        Top Writers
      </Text>
      <Box ml={"auto"} mr={"30px"} w={"auto"} mt={"10px"}>
        <Stack>
          <Grid gridTemplateColumns={"1fr 2fr"}>
            <Box>
              <Avatar size={"md"} src={"https://bit.ly/sage-adebayo"} />
            </Box>
            <Box align="left">
              <Text fontWeight={"bold"}>Segun Adebayo</Text>
              <Text>Creator of Chakra UI, Designer & Software Engineer</Text>
            </Box>
          </Grid>
          <Grid gridTemplateColumns={"1fr 2fr"} >
            <Box>
              <Avatar size={"md"} src={"https://bit.ly/dan-abramov"} />
            </Box>
            <Box align="left">
              <Text fontWeight={"bold"}>Dan Abramov</Text>
              <Text>
                Software Engineer, and Front End Developer
              </Text>
            </Box>
          </Grid>
          <Grid gridTemplateColumns={"1fr 2fr"}>
            <Box>
              <Avatar
                size={"md"}
                src={
                  "https://media.licdn.com/dms/image/C4D03AQFcT-gcjMuPwQ/profile-displayphoto-shrink_800_800/0/1632494646958?e=2147483647&v=beta&t=W4GUISIt74rp6LLOE0ZSetPMdB9ZQH5K_KBlpxjEVHI"
                }
              />
            </Box>
            <Box align="left">
              <Text fontWeight={"bold"}>Gian Felix Ramadan</Text>
              <Text>
                GIS Analyst, Content Creator, and Junior Web Development
              </Text>
            </Box>
          </Grid>
          <Grid gridTemplateColumns={"1fr 2fr"}>
            <Box>
              <Avatar size={"md"} src={"https://bit.ly/prosper-baba"} />
            </Box>
            <Box align="left">
              <Text fontWeight={"bold"}>Prosper Otemuyiwa</Text>
              <Text>Senior Developer Advocate, Co-Funder forLoop Africa, Co-Founder Eden Life Inc</Text>
            </Box>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
