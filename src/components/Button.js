import React from 'react';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';

const Button = props => (
  <StyledButton {...props}>
    <ButtonText style={props.style}>
      {props.title}
    </ButtonText>
  </StyledButton>
);

export default Button;
