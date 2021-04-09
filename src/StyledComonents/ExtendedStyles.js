import React from 'react';
import styled from 'styled-components';
// import Styled from 'styled-components'

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const ExtendedButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`

const ExtendedStyles = () => {
    return (
        <div>
            <Button>Normal Button</Button>
            <ExtendedButton>Tomato Button</ExtendedButton>
        </div>
    );
}

export default ExtendedStyles;
