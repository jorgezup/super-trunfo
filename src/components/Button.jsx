import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { children, testId } = this.props;
    return (
      <button type="submit" data-testid={ testId }>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Button;
