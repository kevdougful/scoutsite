import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Auth, getAuth } from "firebase/auth";
import { PersonaAvatar } from "@saas-ui/react";

const signOut = async (auth: Auth) => {
  console.log("signing out");
  await auth.signOut();
  console.log("signed out");
};

export const UserMenu = () => {
  const auth = getAuth();

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<PersonaAvatar size="xs" />}
          variant="ghost"
        />
        <MenuList>
          <MenuItem onClick={() => signOut(auth)}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
