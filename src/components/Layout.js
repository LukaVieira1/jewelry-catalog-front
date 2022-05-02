import { Outlet } from "react-router-dom";
import { Flex, Heading, Image } from "@chakra-ui/react";
import headerImg from "../assets/img/header.png";

function Layout() {
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
            alt="Dan Abramov"
          />
        </Flex>
      </Heading>
      <Outlet />
    </>
  );
}

export default Layout;
