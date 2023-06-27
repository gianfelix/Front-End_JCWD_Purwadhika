import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/reducer/AuthReducer";
import { Avatar } from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";
import { IoCreateOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
export const LoginButton = () => {
  const navigate = useNavigate();
  const toLoginPage = () => {
    navigate("/login");
  };
  const toProfilePage = () => {
    navigate("/profile");
  };

  const toWritePage = () => {
    navigate("/write");
  };
  const login = useSelector((state) => state.AuthReducer.login);
  const dispatch = useDispatch();
  return (
    <>
      {!login ? (
        <Button onClick={toLoginPage} colorScheme="teal" variant={"outline"}>
          Login
        </Button>
      ) : (
        <Menu>
          <MenuButton as={Avatar}></MenuButton>
          <MenuList>
            <MenuItem onClick={toProfilePage}>
              <Box mr={"7px"}>
                <FiSettings />
              </Box>
              Profile Settings
            </MenuItem>
            <MenuItem onClick={toWritePage}>
              <Box mr={"7px"}>
                <IoCreateOutline/>
              </Box>
              Write</MenuItem>

            <MenuItem onClick={() => dispatch(logoutSuccess())}>
             <Box mr={"7px"}>
<LuLogOut/>
             </Box>
             Logout
            </MenuItem>
          </MenuList>
        </Menu>
        // <Button onClick={() => dispatch(logoutSuccess())} colorScheme="teal"> Logout</Button>
      )}
    </>
  );
};
