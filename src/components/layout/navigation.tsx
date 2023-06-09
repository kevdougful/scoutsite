import * as React from 'react'
import {
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { GiFleurDeLys } from "react-icons/gi";
import { useRouter } from "next/router";

import headerNav from "@/data/header-nav";
import NavLink from "@/components/nav-link";
import { useScrollSpy } from "@/hooks/use-scrollspy";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";

import ThemeToggle from "./theme-toggle";
import { Br } from "@/components/typography";
import { AuthMenu } from "@/components/auth/auth-menu";
import { MobileNavButton, MobileNavContent } from "../mobile-nav";
import { PersonaAvatar } from "@saas-ui/react";
import { useUser } from "reactfire";

const Header = () => {
  const mobileNav = useDisclosure();
  const router = useRouter();
  const activeId = useScrollSpy(
    headerNav.filter(({ id }) => id).map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );
  const { data: user } = useUser();

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <HStack flex="1" ps="4">
      <HStack spacing="2" flexShrink={0} flex="1" justifyContent="flex-end">
        {headerNav.map(({ href, id, ...props }, i) => {
          return (
            <NavLink
              display={["none", null, "block"]}
              href={href || `/#${id}`}
              key={i}
              isActive={
                (id && activeId === id) ||
                (href && !!router.asPath.match(new RegExp(href)))
              }
              {...props}
            />
          );
        })}

        <Tooltip label={<>stlbsa.org</>}>
          <IconButton
            variant="ghost"
            aria-label="council"
            icon={<GiFleurDeLys size="22" />}
            borderRadius="md"
            as={Link}
            href="https://www.stlbsa.org"
          />
        </Tooltip>

        <Tooltip label="Facebook">
          <IconButton
            variant="ghost"
            aria-label="facebook"
            icon={<FaFacebook size="22" />}
            borderRadius="md"
            as={Link}
            href="https://www.facebook.com/groups/pack572photos"
          />
        </Tooltip>

        <AuthMenu />

        <ThemeToggle />

        <MobileNavButton
          ref={mobileNavBtnRef}
          aria-label="Open Menu"
          onClick={mobileNav.onOpen}
        />

        <MobileNavContent
          isOpen={mobileNav.isOpen}
          onClose={mobileNav.onClose}
        />
      </HStack>
    </HStack>
  );
};

export default Header
