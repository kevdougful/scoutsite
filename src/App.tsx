import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavMenu } from "./NavMenu";

export interface AppProps {
  name: string;
}

export const App = (props: AppProps) => {
  return <NavMenu />;
};
