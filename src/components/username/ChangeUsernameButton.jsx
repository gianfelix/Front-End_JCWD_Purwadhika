import { Button, useDisclosure } from "@chakra-ui/react";

import { CgRename } from "react-icons/cg";
import { ModalChangeUsername } from "./ModalChangeUsername";

export default function ChangeUsernameButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button w={'200px'} ml={"35px"} colorScheme="teal" leftIcon={<CgRename  size={'22px'}/>} onClick={onOpen} variant={'solid'}>
        Change Username
      <ModalChangeUsername isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Button>
    </>
  );
}