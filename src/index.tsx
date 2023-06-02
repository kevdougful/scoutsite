import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { App } from "./App";
import { ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('app-root');
const root = createRoot(container as Element);
root.render(
    <ChakraProvider>
        <App name="Kevin"/>
    </ChakraProvider>
);
