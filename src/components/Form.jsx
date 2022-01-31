import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <div>Nome</div>
        <Input
          name="cardName"
          value={ cardName }
          type="text"
          inputChange={ onInputChange }
          testId="name-input"
        />

        <div>Descrição</div>
        <textarea
          name="cardDescription"
          id=""
          cols="30"
          rows="10"
          onChange={ onInputChange }
          data-testid="description-input"
          value={ cardDescription }
        />

        <div>Attr01</div>
        <Input
          name="cardAttr1"
          value={ cardAttr1 }
          type="number"
          inputChange={ onInputChange }
          testId="attr1-input"
        />
        <div>Attr02</div>
        <Input
          name="cardAttr2"
          value={ cardAttr2 }
          type="number"
          inputChange={ onInputChange }
          testId="attr2-input"
        />
        <div>Attr03</div>
        <Input
          name="cardAttr3"
          value={ cardAttr3 }
          type="number"
          inputChange={ onInputChange }
          testId="attr3-input"
        />
        <div>Image</div>
        <Input
          name="cardImage"
          value={ cardImage }
          type="text"
          inputChange={ onInputChange }
          testId="image-input"
        />
        <div>Selecione a raridade</div>
        <select
          name="cardRare"
          onChange={ onInputChange }
          data-testid="rare-input"
          value={ cardRare }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        {
          hasTrunfo
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <>
                <div>É super trunfo</div>
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  onChange={ onInputChange }
                  checked={ cardTrunfo }
                  data-testid="trunfo-input"
                />
              </>
            )
        }
        <Button
          testId="save-button"
          isDisabled={ isSaveButtonDisabled }
          onClickButton={ onSaveButtonClick }
        >
          Salvar

        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
