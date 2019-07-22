import React, { Component } from "react";

// Styled components
import { ButtonOnCard } from "../../ui";

// Styles
import { CardContainer } from "./cards.style";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardContainer id={this.props.id}>
        <p>{this.props.comment}</p>
        <ButtonOnCard onClick={this.props.handleDelete}>Delete</ButtonOnCard>
      </CardContainer>
    );
  }
}

export { Card };
