import React from 'react';
import ReactDOM from 'react-dom/client';
import {reportWebVitals, LightTheme, router} from '@/app';
import "./index.css"
import {createGlobalStyle, ThemeProvider} from "styled-components"
import {RouterProvider} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "@/shared";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Onest, sans-serif, Helvetica;
  }

  html, body, #root {
    height: 100vh;
    width: 100vw;
  }

  body {
    line-height: 1.2;
    text-size-adjust: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={LightTheme}>
                <GlobalStyles/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
