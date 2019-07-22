import React, { Component } from "react";

// Styles
import { HeaderLayout, HeaderStyle } from "./header.style";

class Header extends Component {
  render() {
    return (
      <HeaderLayout>
        <HeaderStyle>Comments Board</HeaderStyle>
      </HeaderLayout>
    );
  }
}

export { Header };
