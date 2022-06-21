import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    setIsLoading(false);
    navigate(from, { replace: true });
  }

  return (
    <Flex alignSelf={"center"}>
      <FormControl as={"form"} onSubmit={handleSubmit} mt={["32px"]}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          width={["100%"]}
          height={["40px"]}
          name="email"
          type="email"
          placeholder="Email"
        />
        <Flex justify={["space-between"]}>
          <FormLabel mt="32px" htmlFor="senha">
            Senha
          </FormLabel>
        </Flex>
        <InputGroup>
          <Input
            width={["100%"]}
            height={["40px"]}
            name="password"
            type="password"
            placeholder="Senha"
          />
        </InputGroup>
        <Button
          isLoading={isLoading}
          variant="solid"
          mt="40px"
          width={["100%"]}
          height={["40px"]}
          type="submit"
        >
          Entrar
        </Button>
      </FormControl>
    </Flex>
  );
}

export default Login;
