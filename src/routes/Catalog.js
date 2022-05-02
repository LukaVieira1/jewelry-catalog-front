import React from "react";
import Jewel from "../components/Jewel";
import { Container, Flex } from "@chakra-ui/react";
import img from "../assets/img/jowel.jpeg";

function Catalog() {
  const jowels = [
    {
      imageUrl: img,
      imageAlt: "Rear view of modern home with pool",
      name: "Colar em cordão baiano",
      type: "Banhado a ouro",
      formattedPrice: "R$68",
    },
    {
      imageUrl: img,
      imageAlt: "Rear view of modern home with pool",
      name: "Colar em cordão baiano",
      type: "Banhado a ouro",
      formattedPrice: "R$68",
    },
    {
      imageUrl: img,
      imageAlt: "Rear view of modern home with pool",
      name: "Colar em cordão baiano",
      type: "Banhado a ouro",
      formattedPrice: "R$68",
    },
    {
      imageUrl: img,
      imageAlt: "Rear view of modern home with pool",
      name: "Colar em cordão baiano",
      type: "Banhado a ouro",
      formattedPrice: "R$68",
    },

    {
      imageUrl: img,
      imageAlt: "Rear view of modern home with pool",
      name: "Colar em cordão baiano",
      type: "Banhado a ouro",
      formattedPrice: "R$68",
    },
    {
      imageUrl: img,
      imageAlt: "Rear view of modern home with pool",
      name: "Colar em cordão baiano",
      type: "Banhado a ouro",
      formattedPrice: "R$68",
    },
    {
      imageUrl: img,
      imageAlt: "Rear view of modern home with pool",
      name: "Colar em cordão baiano",
      type: "Banhado a ouro",
      formattedPrice: "R$68",
    },
    {
      imageUrl: img,
      imageAlt: "Rear view of modern home with pool",
      name: "Colar em cordão baiano",
      type: "Banhado a ouro",
      formattedPrice: "R$68",
    },
    {
      imageUrl: img,
      imageAlt: "Rear view of modern home with pool",
      name: "Colar em cordão baiano",
      type: "Banhado a ouro",
      formattedPrice: "R$68",
    },
  ];

  return (
    <>
      <Container maxW="1500px">
        <Flex wrap="wrap" justifyContent="space-evenly">
          {jowels?.map((jowel) => (
            <Jewel
              imageUrl={jowel.imageUrl}
              imageAlt={jowel.imageAlt}
              beds={jowel.beds}
              baths={jowel.baths}
              name={jowel.name}
              type={jowel.type}
              formattedPrice={jowel.formattedPrice}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
}

export default Catalog;
