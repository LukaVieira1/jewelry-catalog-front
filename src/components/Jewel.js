import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "../context/auth-context";

const Jewel = (props) => {
  const {
    imageUrl,
    imageAlt,
    name,
    price,
    description,
    id,
    handleRemoveJewel,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  let auth = useAuth();

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
        width="300px"
        height="300px"
        src={`https://res.cloudinary.com/dm2qzifkf/image/upload/v1655834644/${imageUrl
          .split("\\")
          .join("/")}.jpeg`}
        alt={imageAlt}
      />

      <Box p="6">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex direction="column">
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
            <Box>R${price}</Box>
          </Flex>
        </Flex>
        {auth.user && (
          <Button onClick={onOpen} size="sm">
            Remover joia
          </Button>
        )}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deseja remover {name}?</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                handleRemoveJewel({
                  id,
                  imageUrl,
                });
              }}
            >
              Remover
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Jewel;
