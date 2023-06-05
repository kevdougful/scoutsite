import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Tooltip,
} from "@chakra-ui/react";
import { PersonaAvatar } from "@saas-ui/react";
import { getAuth } from "firebase/auth";
import { signOut } from "./handlers";
import { useUser } from "reactfire";
import { FiLogIn } from "react-icons/fi";
import { UserMenu } from "./user-menu";
import { SignInMenu } from "./sign-in-menu";

export const AuthMenu = () => {
  const auth = getAuth();
  const { data: user } = useUser();

  return <>{user ? <UserMenu /> : <SignInMenu />}</>;
};
