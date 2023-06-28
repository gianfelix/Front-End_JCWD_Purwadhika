import { Button, useDisclosure } from "@chakra-ui/react";
import { TbPhoneCalling } from "react-icons/tb";
import { ModalChangePhone } from "./ModalChangePhone";


export const ChangePhoneButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
      mt={"10px"}
      w={'200px'}
        ml={"35px"}
        colorScheme="teal"
        leftIcon={<TbPhoneCalling size={"22px"} />}
        onClick={onOpen}
        variant={"solid"}
      >
        Change Phone
        <ModalChangePhone isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Button>
    </>
  );
};
