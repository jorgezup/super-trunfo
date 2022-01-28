import React from 'react';
import Input from './Input';
import Button from './Button';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };
  }

  handleChange =({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { name } = this.state;
    return (
      <form action="">
        <div>Nome</div>
        <Input
          name="name"
          value={ name }
          type="text"
          onInputChange={ this.handleChange }
          testId="name-input"
        />
        <div>Descrição</div>
        <textarea name="" id="" cols="30" rows="10" data-testid="description-input" />
        <div>Attr01</div>
        <Input
          name="attr01"
          value={ name }
          type="number"
          onInputChange={ this.handleChange }
          testId="attr1-input"
        />
        <div>Attr02</div>
        <Input
          name="attr02"
          value={ name }
          type="number"
          onInputChange={ this.handleChange }
          testId="attr2-input"
        />
        <div>Attr03</div>
        <Input
          name="attr03"
          value={ name }
          type="number"
          onInputChange={ this.handleChange }
          testId="attr3-input"
        />
        <div>Image</div>
        <Input
          name="image"
          value={ name }
          type="text"
          onInputChange={ this.handleChange }
          testId="image-input"
        />
        <div>Selecione a raridade</div>
        <select name="rare-input" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <div>É super trunfo</div>
        <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
        <Button testId="save-button">Salvar</Button>
      </form>
    );
  }
}

export default Form;
