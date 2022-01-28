import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { value, onInputChange, name, type, testId } = this.props;
    return (
      <input
        type={ type }
        value={ value }
        name={ name }
        onChange={ onInputChange }
        data-testid={ testId }
      />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
