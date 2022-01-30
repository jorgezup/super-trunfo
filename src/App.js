import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [target.name]: value,
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

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ this.isFormValid() }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
