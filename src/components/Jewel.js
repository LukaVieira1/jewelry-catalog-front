import { Box, Image } from "@chakra-ui/react";

const Jewel = (props) => {
  const { imageUrl, imageAlt, name, formattedPrice, type } = props;

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
        src={imageUrl}
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
          {type}
        </Box>

        <Box>{formattedPrice}</Box>
      </Box>
    </Box>
  );
};

export default Jewel;
