import React from "react";
import styled from "styled-components";
import {MyForm }from '../components/Form'

export const StyledForm = styled(MyForm)`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 50px;
  padding: 5px;
  border-radius: 15px;
  border: 5px solid red;

  &:hover {
    background-color: yellow;
  };

  &:active {
    background-color: green;
  };
`;