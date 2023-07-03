import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/reducer/AuthReducer";
import { Avatar } from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";
import { IoCreateOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { NameNavbar } from "./profiling/NameNavbar";
export const LoginButton = () => {
  const navigate = useNavigate();
  const toLoginPage = () => {
    navigate("/login");
  };
  const toHomePage = () => {
    navigate("/");
  }
  const toProfilePage = () => {
    navigate("/profile");
  };

  const toWritePage = () => {
    navigate("/write");
  };
  const login = useSelector((state) => state.AuthReducer.login);
  // const profileImageURL = useSelector((state) => state.AuthReducer.profileImageURL);
  const profileImageURL = useSelector((state) => state.AuthReducer.user.imgProfile);
  const dispatch = useDispatch();

useEffect(() => {
  // changeNavbarAvatar(profileImageURL);
}, [profileImageURL]);

  return (
    <>
      {!login ? (
        <Button onClick={toLoginPage} colorScheme="teal" variant={"outline"}>
          Login
        </Button>
      ) : (
        <Menu>
          <MenuButton as={Avatar} src="{profileImageURL}"></MenuButton>
          <Text >
            <NameNavbar />
          </Text>
          <MenuList>
            <MenuItem onClick={toProfilePage}>
              <Box mr={"7px"}>
                <FiSettings />
              </Box>
              Profile Settings
            </MenuItem>
            <MenuItem onClick={toWritePage}>
              <Box mr={"7px"}>
                <IoCreateOutline />
              </Box>
              Write
            </MenuItem>

            <MenuItem onClick={() => dispatch(logoutSuccess(), toHomePage())}>
              <Box mr={"7px"}>
                <LuLogOut />
              </Box >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
        // <Button onClick={() => dispatch(logoutSuccess())} colorScheme="teal"> Logout</Button>
      )}
    </>
  );
};
