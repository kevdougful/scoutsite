import { VStack } from "@chakra-ui/react";
import { Card, CardBody, AutoForm } from "@saas-ui/react";
import { NextRouter, useRouter } from "next/router";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const login = (values, auth: Auth, router: NextRouter) => {
  signInWithEmailAndPassword(auth, values.email, values.password);
  router.push("/");
};

function SignUpPage() {
  const auth = getAuth();
  const router = useRouter();

  // Redirect if already authenticated
  if (auth.currentUser) {
    router.push("/");
  }

  return (
    <VStack alignContent="center">
      <Card>
        <CardBody>
          <AutoForm
            onSubmit={(values) => login(values, auth, router)}
            submitLabel="Sign In"
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
