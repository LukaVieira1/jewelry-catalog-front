import React, { useEffect, useState } from "react";
import Jewel from "../components/Jewel";
import { Container, Flex } from "@chakra-ui/react";
import { delJewels, getAllJewels } from "../services/jewels.js";

function Catalog() {
  const [jewels, setJewels] = useState([]);
  const [jewelsUpdate, setJewelsUpdate] = useState(false);

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

  const handleRemoveJewel = async (jowel) => {
    try {
      await delJewels(jowel.id);

      setJewelsUpdate(!jewelsUpdate);
    } catch (error) {}
  };

  return (
    <>
      <Container maxW="1500px">
        <Flex wrap="wrap" justifyContent="space-evenly">
          {jewels?.map((jewel) => (
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
