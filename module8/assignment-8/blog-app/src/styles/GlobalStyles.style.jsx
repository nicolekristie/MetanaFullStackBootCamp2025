import {createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* pass any css here */
    body {
        display: flex;
        justify-content: center;
        position: relative;
        height: 800px;
        background-color: lightgreen;
        margin: 0px;
        row-gap: 30px;
        padding: 5px;
        border: 5px solid red;
    }

    .header-title {
        text-align: center;
    }

    .flex-container{
        display: flex;
        flex-direction: column;  
        width: 400px;
        height: 200px;
        padding: 10px;
        background-color: green;
        gap: 1.5rem;
        border: 5px solid purple; 
    }

    .container{
        display: flex;
        justify-content: center;
        border: 2px solid green;
    }

    .subscribe-text{
        display: flex;
        justify-content: left;
        font-size: 14px;
        border: 3px solid red;
    }

`
  