import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';

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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      filter: undefined,
      filterRarity: 'todas',
      filterTrunfo: undefined,
      filteredCards: undefined,
      clickFilter: false,
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
      // hasTrunfo,
    } = this.state;

    if (cardTrunfo) this.setState({ hasTrunfo: true });

    const newCard = { // Insert the values from the state to the new card.
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo: !!cardTrunfo,
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
      // hasTrunfo: t
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

  // isTrunfo = (cardToRemove) => {
  //   const { cards } = this.state;
  //   return cards.find((card, index) => {
  //     if(index===cardToRemove)
  //   });
  // }

  handleRemoveCard = (index) => {
    const { cards } = this.state;
    const cardRemoved = cards[index];
    const cardsLeftOvers = cards.splice(index, 1);

    this.setState({
      ...cardsLeftOvers,
      hasTrunfo: !cardRemoved.cardTrunfo,
    });
  }

  setListOfCards = (array) => {
    if (!array) return (<div />);
    return array
      .map((card, index) => (
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

  handleFilter = () => {
    const { filter, filterRarity, filterTrunfo, cards } = this.state;

    console.log({
      filter,
      filterRarity,
      filterTrunfo,
    });
    let result = cards;
    console.log('cards', cards);

    result = cards.filter((card) => card.cardName.includes(filter));
    // if (filterRarity.toLocaleLowerCase() !== 'todas') {
    //   result = cards.filter((card) => card.cardRare
    //   === filterRarity.toLocaleLowerCase())
    //     .filter((card) => card.cardName.includes(filter));
    //   console.log('resultRarity', result);
    // } else {
    //   console.log(filter);
    // }
    // // if (filterTrunfo) {
    // //   result = cards.filter((card) => card.cardTrunfo);
    // // }

    console.log('---------');
    console.log('reuslt', result);

    this.setState({
      filteredCards: result || cards,
      clickFilter: !this.clickFilter,
    });
  }

  setOnScreen = () => {
    this.setState = ({ filteredCards: undefined });
  }

  render() {
    const { filter, filterRarity, cards, filteredCards, clickFilter } = this.state;
    console.log('filtered', filteredCards);
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
        <div>Filtros de busca</div>
        <Input
          name="filter"
          value={ filter }
          type="text"
          inputChange={ this.handleChange }
          testId="name-filter"
        />
        <select
          name="filterRarity"
          onChange={ this.handleChange }
          data-testid="rare-filter"
          value={ filterRarity }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <button onClick={ this.handleFilter } type="button">Buscar</button>
        <div>
          {

            // this.setListOfCards(cards)
            clickFilter
              ? this.setListOfCards(cards)
              : this.setListOfCards(filteredCards)

          }
        </div>
      </div>
    );
  }
}

export default App;
