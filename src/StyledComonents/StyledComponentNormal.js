import React from 'react';
import { PropsStyledComp } from './PropsStyledComp'
import styled from 'styled-components'
import ExtendedStyles from './ExtendedStyles';

const StyledButton = styled.button`
    background-color: black;
    font-size:  32px;
    color: white;
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const StyledComponentNormal = () => {
    return (
        <div>
            <StyledButton>Login</StyledButton>
            <Wrapper>
                <Title>Hello Styled component</Title>
            </Wrapper>
            <PropsStyledComp />
            <ExtendedStyles />
        </div>
    );
}

export default StyledComponentNormal;
