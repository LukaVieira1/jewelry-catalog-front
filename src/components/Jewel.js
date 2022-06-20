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
        maxHeight="300px"
        minHeight="300px"
        src={`http://localhost:4000/${imageUrl.split("\\").join("/")}`}
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
          {auth.user && (
            <Button onClick={onOpen} size="sm">
              Remover joia
            </Button>
          )}
        </Flex>
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
