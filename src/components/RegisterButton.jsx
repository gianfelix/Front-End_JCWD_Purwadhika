import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const RegisterButton = () => {
    const navigate = useNavigate();
    const toRegisterPage = () => {
        navigate("/register");
    }

    return (
        <>
        <Button onClick={toRegisterPage} colorScheme="teal" variant={"outline"}>Register
        </Button>
        </>
    )
}