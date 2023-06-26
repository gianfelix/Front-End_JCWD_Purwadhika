import {
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/reducer/AuthReducer";
import { Avatar } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const LoginButton = () => {
  const navigate = useNavigate();
  const toLoginPage = () => {
    navigate("/login");
  };
  const toProfilePage = () => {
    navigate("/profile");
  }

  const toWritePage = () => {
    navigate("/write");
  }
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
          <MenuButton as={Avatar} src="https://bit.ly/dan-abramov"></MenuButton>
          <MenuList>
            <MenuItem onClick={toProfilePage}>Your Profile</MenuItem>
            <MenuItem onClick={toWritePage}>Write</MenuItem>

            <MenuItem onClick={() => dispatch(logoutSuccess())}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
        // <Button onClick={() => dispatch(logoutSuccess())} colorScheme="teal"> Logout</Button>
      )}
    </>
  );
};
