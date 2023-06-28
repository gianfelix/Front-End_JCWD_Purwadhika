import { Button, useDisclosure } from "@chakra-ui/react";
import { RiMailSettingsLine } from "react-icons/ri";
import { ModalChangeEmail } from "./ModalChangeEmail";

export const ChangeEmailButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
      mt={"10px"}
      w={'200px'}
        ml={"35px"}
        colorScheme="teal"
        leftIcon={<RiMailSettingsLine size={"22px"} />}
        onClick={onOpen}
        variant={"solid"}
      >
        Change Email
        <ModalChangeEmail isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Button>
    </>
  );
};
