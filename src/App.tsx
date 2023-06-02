import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export interface AppProps {
    name: string
};

export const App = (props: AppProps) => {
    return <h1>Hello World</h1>;
};
