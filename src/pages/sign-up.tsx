import { VStack } from "@chakra-ui/react";
import { Card, CardBody, AutoForm } from "@saas-ui/react";
import { NextRouter, useRouter } from "next/router";
import {
  Auth,
  getAuth,
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const register = async (values, auth: Auth, router: NextRouter) => {
  await setPersistence(auth, browserSessionPersistence);
  createUserWithEmailAndPassword(auth, values.email, values.password);
  router.push("/");
};

function SignUpPage() {
  const auth = getAuth();
  const router = useRouter();

  return (
    <VStack alignContent="center">
      <Card>
        <CardBody>
          <AutoForm
            onSubmit={(values) => register(values, auth, router)}
            submitLabel="Sign Up"
            schema={{
              email: {
                label: "Email",
                type: "email",
                rules: { required: true },
              },
              password: {
                label: "Password",
                type: "password",
                rules: { required: true },
              },
            }}
          />
        </CardBody>
      </Card>
    </VStack>
  );
}

export default SignUpPage;
