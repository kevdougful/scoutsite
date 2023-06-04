import { Flex, HStack, IconButton, Stack, Text } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { FaFacebook } from "react-icons/fa";
import Footer, { Copyright, FooterLink } from "./layout/footer";

import Logo from "./logo";

const CustomFooter = () => {
  return (
    <Footer columns={{ base: 1, sm: 2 }}>
      <Stack flex="1">
        <Stack alignItems="flex-start">
          <Flex width="100px">
            <Logo />
          </Flex>
        </Stack>
        <Copyright>
          Built by{" "}
          <FooterLink href="https://github.com/kevdougful">
            Kevin Coffey
          </FooterLink>
        </Copyright>
      </Stack>
      <Stack flexDirection={{ base: "column-reverse" }}>
        <Stack
          justify="flex-end"
          spacing="4"
          alignSelf={{ base: "flex-start", sm: "flex-end" }}
          alignItems={{ base: "flex-start", sm: "flex-end" }}
          direction="row"
        >
          <FooterLink href="mailto:kevdougful@gmail.com">Contact</FooterLink>
        </Stack>
        <HStack />
        <HStack spacing="4" alignSelf={{ base: "flex-start", sm: "flex-end" }}>
          <IconButton
            variant="ghost"
            aria-label="github"
            icon={<FaFacebook size="14" />}
            borderRadius="md"
            as={Link}
            href="https://www.facebook.com/groups/pack572photos"
          />
        </HStack>
      </Stack>
    </Footer>
  );
};

export default CustomFooter
