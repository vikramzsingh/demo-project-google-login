import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"}; 
`

export const PropsStyledComp = () => {
    return (
        <div>
            <Button>Without props</Button>
            <Button primary>With props</Button>
        </div>
    );
}

