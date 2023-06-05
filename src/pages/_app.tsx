import { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from '@/components/layout'

import theme from '../styles/theme'

import {
  SaasProvider,
  ModalsProvider,
  AuthProvider as SaaSAuthProvider,
} from "@saas-ui/react";
import { NProgressNextRouter } from "@saas-ui/nprogress";
import { AuthProvider, FirebaseAppProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "firebase/auth";
import app from "../../firebaseClient";

import Footer from "@/components/footer";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps<any>) => {
  const auth = getAuth(app);
  const router = useRouter();

  return (
    <SaasProvider
      theme={theme}
      colorModeManager={{
        get: () => "dark",
        set: () => {},
        type: "localStorage",
      }}
    >
      <FirebaseAppProvider firebaseApp={app}>
        <AuthProvider sdk={auth}>
          <ModalsProvider>
            <Layout
              announcement={pageProps.announcement}
              header={pageProps.header}
              footer={pageProps.footer !== false ? <Footer /> : null}
            >
              <NProgressNextRouter router={router} />
              <Component {...pageProps} />
            </Layout>
          </ModalsProvider>
        </AuthProvider>
      </FirebaseAppProvider>
    </SaasProvider>
  );
};

export default MyApp

export function getServerSideProps({ req }) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  }
}
