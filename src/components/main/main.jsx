import React, { Component } from "react";

// Styles
import { MainLayout } from "./main.style";

class Main extends Component {
  render() {
    return (
      <MainLayout>
        {this.props.children}
      </MainLayout>
    );
  }
}

export { Main };
