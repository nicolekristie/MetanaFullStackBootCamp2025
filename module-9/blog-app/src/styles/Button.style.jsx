import React from "react";
import styled from "styled-components";
import {Button }from '../components/Button'

export const StyledButton = styled(Button)`
  display: flex; 
  justify-content: center;
  width: 150px;
  height: 50px;
  padding: 5px;
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    background-color: yellow;
  };

  &:active {
    background-color: green;
  };
`;

export const ButtonLabel = styled.label`
    font-size:25px;
    color:white;
`