import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Tooltip,
} from "@chakra-ui/react";
import { getAuth } from "firebase/auth";
import { Link, PersonaAvatar } from "@saas-ui/react";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";

export const SignInMenu = () => {
  const auth = getAuth();

  return (
    <>
      <Tooltip label="Sign In">
        <IconButton
          variant="ghost"
          aria-label="sign in"
          icon={<FiLogIn size="22" />}
          borderRadius="md"
          as={Link}
          href="/sign-in"
        />
      </Tooltip>

      <Tooltip label="Sign Up">
        <IconButton
          variant="ghost"
          aria-label="sign up"
          icon={<AiOutlineUserAdd size="22" />}
          borderRadius="md"
          as={Link}
          href="/sign-up"
        />
      </Tooltip>
    </>
  );
};
