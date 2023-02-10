import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

const { Box, Button, Container, Grid, GridItem, Heading, Text, ScaleFade, FormControl, Input, FormErrorMessage } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Box,
    Button,
    Container, 
    Grid,
    GridItem,
    Heading,
    Text,
    ScaleFade,
    FormControl,
    Input,
    FormErrorMessage,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
