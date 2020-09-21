import { ApolloProvider } from '@apollo/react-hooks';
import App, { AppProps } from 'next/app';
import React from 'react';
import withApolloClient from '../apollo/client';
import ApolloClient from 'apollo-client';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Verdana,Arial,sans-serif";
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // overflow-x: hidden;
  }
  
  hr {
    border-bottom: 0.1rem solid lightgrey;
    width: 100%;
  }
  
  // .border-box, 
  // :after, 
  // :before, 
  // a, article, body, code, dd, div, dl, dt, fieldset, footer, form, h1, h2, h3, h4, h5, h6, header, html, legend, li, main, ol, p, pre, section, table, td, th, tr, ul {
  //   box-sizing: border-box;
  // }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

interface OwnProps {
  apollo: ApolloClient<any>;
}

type Props = OwnProps & AppProps;

class CustomApp extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <>
        <GlobalStyle />
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApolloClient(CustomApp);
