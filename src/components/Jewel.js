import { Box, Image } from "@chakra-ui/react";

const Jewel = (props) => {
  const { imageUrl, imageAlt, name, price, description } = props;

  return (
    <Box
      mt="30px"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="#e0a6ae"
    >
      <Image
        maxHeight="300px"
        minHeight="300px"
        src={`http://localhost:5000/${imageUrl.split("\\").join("/")}`}
        alt={imageAlt}
      />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>
        <Box as="span" color="gray.600" fontSize="sm">
          {description}
        </Box>

        <Box>{price}</Box>
      </Box>
    </Box>
  );
};

export default Jewel;
