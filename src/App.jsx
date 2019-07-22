import React, { Component } from "react";

import { CommentsBoard } from "./features";

// Apollo
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

// Reset default styles
import reset from "./assets/styles/reset";

// GlobalStyle
import { createGlobalStyle } from "styled-components";

// Styles
import { Layout } from "./assets/styles";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;
const client = new ApolloClient({
  uri: "https://commentsboardserver.herokuapp.com/api/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <GlobalStyle />
          <Layout>
            <CommentsBoard />
          </Layout>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export { App };
