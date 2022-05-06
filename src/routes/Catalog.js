import React, { useEffect, useState } from "react";
import Jewel from "../components/Jewel";
import { Container, Flex } from "@chakra-ui/react";
import { getAllJewels } from "../services/jewels.js";

function Catalog() {
  const [jewels, setJewels] = useState([]);

  useEffect(() => {
    try {
      const request = async () => {
        const response = await getAllJewels();
        setJewels(response.data.jowels);
      };
      request();
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container maxW="1500px">
        <Flex wrap="wrap" justifyContent="space-evenly">
          {jewels?.map((jewel) => (
            <Jewel
              imageUrl={jewel.img}
              imageAlt="Jewel"
              name={jewel.name}
              description={jewel.description}
              price={jewel.price}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
}

export default Catalog;
