import * as React from "react";
import Image from "next/image";
import AppProps from "next/app";
import NextLink from "next/link";
import styles from "./page.module.css";
import { SaasProvider, LinkProps } from "@saas-ui/react";

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <SaasProvider>
      <h1>Hello</h1>
    </SaasProvider>
  );
}
