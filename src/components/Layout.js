import { Outlet, useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  Image,
  Container,
  Stack,
  ButtonGroup,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import headerImg from "../assets/img/header.png";

function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <Heading
        maxW="100%"
        padding="0 20px 10px"
        textAlign="center"
        backgroundColor="#f0f0f0"
        textColor="white"
      >
        <Flex justify="center">
          <Image
            height={"100px"}
            borderRadius="full"
            src={headerImg}
            alt="DonnaMi"
            onClick={() => navigate("/", { replace: true })}
          />
        </Flex>
      </Heading>
      <Outlet />
      <Container
        as="footer"
        role="contentinfo"
        py={{
          base: "12",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "4",
            md: "0",
          }}
        >
          <Stack justify="space-between" direction="row" align="center">
            <Image
              height={"100px"}
              borderRadius="full"
              src={headerImg}
              alt="DonnaMi"
              onClick={() => navigate("/", { replace: true })}
            />
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.facebook.com/usedonnami"
                aria-label="Facebook"
                icon={<FaFacebook fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://instagram.com/usedonnami?igshid=NmZiMzY2Mjc="
                aria-label="Instagram"
                icon={<FaInstagram fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} DonnaMi, Inc. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </>
  );
}

export default Layout;
