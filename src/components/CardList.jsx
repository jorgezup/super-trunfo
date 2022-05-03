import React, { Component } from 'react';
import Card from './Card';
import Button from './Button';

export default class CardList extends Component {
  render() {
    return (
      <div>
        <Card { ...card } />
        <Button
          key={ index }
          testId="delete-button"
          isDisabled={ false }
          onClickButton={ () => this.handleRemoveCard(index) }
        >
          Excluir
        </Button>
      </div>
    );
  }
}
