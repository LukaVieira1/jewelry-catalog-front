import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  Container,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import { postJewel } from "../services/jewels";

function Admin() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  // let schema = yup.object().shape({
  //   name: yup.required("Campo nome é necessário"),
  //   description: yup.required("Campo nome é necessário"),
  //   acessory: yup.required("Campo nome é necessário"),
  //   quality: yup.required("Campo nome é necessário"),
  //   img: yup.required("Campo nome é necessário"),
  //   price: yup.required("Campo preço é necessário"),
  // });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(
    { name, description, acessory, price, quality, img },
    event
  ) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("image", img[0]);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("acessory", acessory);
    formData.append("price", price);
    formData.append("quality", quality);

    try {
      await postJewel(formData);
      event.target.reset();
    } catch (error) {}
  }

  return (
    <Container maxW="3xl">
      <Flex direction={["column", "row"]}>
        <Flex
          width={["100%"]}
          p={["30px 32px 24px 32px", "60px 64px 50px 74px"]}
          direction={["column"]}
          alignItems={"center"}
        >
          <Text
            color={["#212121"]}
            fontSize={["24px"]}
            lineHeight={["40px"]}
            fontWeight={["600px"]}
            alignSelf={["flex-start"]}
          >
            Cadastro de Joias
          </Text>
          <FormControl
            as={"form"}
            onSubmit={handleSubmit(onSubmit)}
            mt={["32px"]}
            encType="multipart/form-data"
            method="post"
          >
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              type="text"
              placeholder="Ex: Colar em cordão baiano"
              {...register("name")}
            />
            <Text fontSize={["10px"]} mt={["4px"]}>
              {errors.name && <span>{errors.name.message}</span>}
            </Text>
            <FormLabel mt="16px" htmlFor="description">
              Descrição
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              type="text"
              placeholder="Ex: Banhado a ouro"
              {...register("description")}
            />
            <Text fontSize={["10px"]} mt={["4px"]}>
              {errors.description && <span>{errors.description.message}</span>}
            </Text>
            <FormLabel mt="16px" htmlFor="price">
              Preço
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              type="number"
              placeholder="EX.: 68"
              {...register("price")}
            />
            <Text fontSize={["10px"]} mt={["4px"]}>
              {errors.price && <span>{errors.price.message}</span>}
            </Text>

            <FormLabel mt="16px" htmlFor="accessory">
              Acessório
            </FormLabel>
            <FormControl>
              <Select
                id="accessory"
                placeholder="Selecione o tipo de acessório"
                {...register("acessory")}
              >
                <option>Anel</option>
                <option>Brinco</option>
                <option>Colar</option>
                <option>Pulseira</option>
                <option>Tornozeleira</option>
              </Select>
            </FormControl>
            <Text fontSize={["10px"]} mt={["4px"]}>
              {errors.category && <span>{errors.category.message}</span>}
            </Text>

            <FormLabel mt="16px" htmlFor="quality">
              Qualidade
            </FormLabel>
            <FormControl>
              <Select
                id="quality"
                placeholder="Selecione o tipo de qualidade"
                {...register("quality")}
              >
                <option>Prata 925</option>
                <option>Banhado a prata</option>
                <option>Banhado a ouro</option>
              </Select>
            </FormControl>
            <Text fontSize={["10px"]} mt={["4px"]}>
              {errors.quality && <span>{errors.quality.message}</span>}
            </Text>

            <FormLabel mt="16px" htmlFor="img">
              Foto
            </FormLabel>
            <Input
              width={["100%"]}
              height={["40px"]}
              type="file"
              {...register("img")}
            />
            <Text fontSize={["10px"]} mt={["4px"]}>
              {errors.price && <span>{errors.price.message}</span>}
            </Text>

            <Button
              backgroundColor={"#e0a6ae"}
              isLoading={isSubmitting}
              variant="solid"
              mt="40px"
              width={["100%"]}
              height={["40px"]}
              type="submit"
            >
              Cadastrar Joia
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Admin;
