import React, { Component, Fragment } from "react";
import { Header, Footer, Main } from "../../../../components";
import { CommentsGenerator } from "../../../../features";

// Styles
import { Board } from "../../../../assets/styles/layout";

class CommentsBoard extends Component {
  render() {
    return (
      <Fragment>
          <Header />
          <Main>
            <CommentsGenerator />
          </Main>
          <Footer />
      </Fragment>
    );
  }
}

export { CommentsBoard };
