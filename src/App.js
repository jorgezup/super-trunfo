import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/Button';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [], // create an array for cards
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: this.isHasTrunfo,
      isSaveButtonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // prevent form
    const {
      cards,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const newCard = { // Insert the values from the state to the new card.
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState({
      cards: [...cards, newCard], // Spread the old cards, and insert the new one.
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: this.isHasTrunfo,
      isSaveButtonDisabled: true,
    });
  }

  isValidString = (str) => !!str.length

  isBetweenMinAndMax = (number) => {
    const minNumber = 0;
    const maxNumber = 90;
    if (!number) return false;
    if (number < minNumber || number > maxNumber) return false;
    return true;
  }

  isSumLessThanMax = (...numbers) => {
    const maxSumNumber = 210;
    const sum = numbers.reduce((accumulator, number) => accumulator + number);
    if (sum > maxSumNumber) return false;
    return true;
  }

  formValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const validations = [];

    validations.push(
      this.isValidString(cardName),
      this.isValidString(cardDescription),
      this.isBetweenMinAndMax(cardAttr1),
      this.isBetweenMinAndMax(cardAttr2),
      this.isBetweenMinAndMax(cardAttr3),
      this.isSumLessThanMax(Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)),
      this.isValidString(cardImage),
      this.isValidString(cardRare),
    );
    return validations;
  }

  isFormValid = () => this.formValidation().some((validation) => validation === false)

  isHasTrunfo = () => {
    const { cards } = this.state;
    return cards.some((card) => card.cardTrunfo);
  }

  handleRemoveCard = (index) => {
    const { cards } = this.state;
    const cardsLeftOvers = cards.splice(index, 1);
    this.setState({
      ...cardsLeftOvers,
      hasTrunfo: this.isHasTrunfo,
    });
  }

  setListOfCards = () => {
    const { cards } = this.state;
    if (!cards) return (<div />);
    return cards.map((card, index) => (
      <div key={ index }>
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
    ));
  }

  render() {
    console.log(this.isHasTrunfo());
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ this.isFormValid() }
          onSaveButtonClick={ this.handleSubmit }
        />
        <Card { ...this.state } />
        <div>
          {
            this.setListOfCards()
          }
        </div>
      </div>
    );
  }
}

export default App;
