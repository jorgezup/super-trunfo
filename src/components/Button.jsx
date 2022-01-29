import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { children, testId, onClickButton, isDisabled } = this.props;
    return (
      <button
        type="submit"
        data-testid={ testId }
        onClick={ onClickButton }
        disabled={ isDisabled }
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onClickButton: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Button;
