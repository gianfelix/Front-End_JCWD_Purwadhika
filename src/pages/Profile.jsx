import { Box, Stack, Tabs, Text, TabList, TabPanel, TabPanels, Tab } from "@chakra-ui/react";
import { userName } from "../redux/reducer/AuthReducer";
import { BookmarkContent } from "../components/profiling/BookmarkContent";
import { ChangePassword } from "../components/password/ChangePassword";


export const Profile = () => {
  return (
    <>
      
      <Box ml={"auto"} mr={"auto"} pl={"150px"} pr={"150px"} pt={"120px"} w={"100%"} h={"auto"}>
        <Stack>
          
          <Box>
            <Text ml={"50px"} fontSize={"2xl"}>Profile Settings</Text>
          </Box>
          <Tabs variant={"soft-rounded"} colorScheme="teal">
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Change Password</Tab>
              <Tab>My Bookmark</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>username, dkk</TabPanel>
              <TabPanel> <ChangePassword /> </TabPanel>
              <TabPanel>
                <BookmarkContent />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Box>
    </>
  );
};
