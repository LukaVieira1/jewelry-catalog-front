import React, { useEffect, useState } from "react";
import Jewel from "../components/Jewel";
import {
  Button,
  Container,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import { delJewels, getAllJewels } from "../services/jewels.js";
import { SearchIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

function Catalog() {
  const [jewels, setJewels] = useState([]);
  const [jewelsUpdate, setJewelsUpdate] = useState(false);
  const [filteredJewels, setFilteredJewels] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [fieldReset, setFieldReset] = useState(false);
  const [inputValue, setInputValue] = useState("");

  let auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const request = async () => {
        const response = await getAllJewels();
        setJewels(response?.data?.jowels);
      };
      request();
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jewelsUpdate]);

  useEffect(() => {
    const lowerInputFilter = filterValue.toLowerCase();

    setFilteredJewels(
      jewels.filter(
        (jewel) =>
          (lowerInputFilter &&
            jewel.name.toLowerCase().includes(lowerInputFilter)) ||
          jewel.description.toLowerCase().includes(lowerInputFilter) ||
          jewel.acessory.toLowerCase().includes(lowerInputFilter) ||
          jewel.quality.toLowerCase().includes(lowerInputFilter)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue]);

  const handleRemoveJewel = async (jowel) => {
    try {
      await delJewels(jowel.id, jowel.imageUrl);
      setJewelsUpdate(!jewelsUpdate);
    } catch (error) {}
  };

  return (
    <>
      <Container maxW="1500px">
        <Flex mt={"20px"} justify="flex-end" gap="10px" alignItems={"center"}>
          {auth.user && (
            <Button
              onClick={() => navigate("/admin", { replace: true })}
              size="sm"
            >
              Adicionar joia
            </Button>
          )}
          <FormControl
            key={fieldReset}
            width={"20%"}
            onChange={(event) => setFilterValue(event.target.value)}
          >
            <Select
              focusBorderColor="#e0a6ae"
              id="quality"
              placeholder="Qualidade"
            >
              <option>Prata 925</option>
              <option>Banhado a prata</option>
              <option>Banhado a ouro</option>
            </Select>
          </FormControl>
          <FormControl
            focusBorderColor="#e0a6ae"
            width={"20%"}
            onChange={(event) => setFilterValue(event.target.value)}
          >
            <Select
              key={fieldReset}
              focusBorderColor="#e0a6ae"
              id="accessory"
              placeholder="Tipo"
            >
              <option>Anel</option>
              <option>Brinco</option>
              <option>Colar</option>
              <option>Pulseira</option>
              <option>Tornozeleira</option>
            </Select>
          </FormControl>
          <InputGroup width={"20%"}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              value={inputValue}
              focusBorderColor="#e0a6ae"
              placeholder="Nome ou Descrição"
              onChange={(event) => {
                setFilterValue(event.target.value);
                setInputValue(event.target.value);
              }}
            />
          </InputGroup>

          <Button
            backgroundColor={"#e0a6ae"}
            variant="solid"
            size={"sm"}
            onClick={() => {
              setFilterValue("");
              setFieldReset(!fieldReset);
              setInputValue("");
            }}
          >
            Limpar Filtros
          </Button>
        </Flex>
        <Flex wrap="wrap" justifyContent="space-evenly">
          {filterValue === ""
            ? jewels?.map((jewel) => (
                <Jewel
                  key={jewel.id}
                  imageUrl={jewel.img}
                  imageAlt="Jewel"
                  name={jewel.name}
                  description={jewel.description}
                  price={jewel.price}
                  id={jewel.id}
                  handleRemoveJewel={handleRemoveJewel}
                />
              ))
            : filteredJewels?.map((jewel) => (
                <Jewel
                  key={jewel.id}
                  imageUrl={jewel.img}
                  imageAlt="Jewel"
                  name={jewel.name}
                  description={jewel.description}
                  price={jewel.price}
                  id={jewel.id}
                  handleRemoveJewel={handleRemoveJewel}
                />
              ))}
        </Flex>
      </Container>
    </>
  );
}

export default Catalog;
