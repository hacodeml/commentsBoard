import React, { Component } from "react";

// Styles
import { FooterLayout, FooterStyle } from "./footer.style";

class Footer extends Component {
  render() {
    return (
      <FooterLayout>
        <FooterStyle>
          © Copyright 2019<a href="https://github.com/hacodeml">| Hacode</a>
        </FooterStyle>
      </FooterLayout>
    );
  }
}

export { Footer };
