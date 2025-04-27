import {createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* pass any css here */
    body {
        display: flex;
        background-color: lightgreen;
        border: 5px solid blue;
    }

    /* .container {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        width: 175%;
        height:auto;
        border: 5px solid red;
        margin: 15px;
        padding: 15px;

    } */

  /* .blog-list-container {
    display: flex;
        flex-direction: column; 
        justify-content: center;
        width: 175%;
        height:auto;
        border: 5px solid red;
        margin: 15px;
        padding: 15px;
    } */
   
    h2{
        display: flex;
        justify-content: center;
        color: green;
    }

    .img-container{
        display: flex;
        border: 5px solid green;
    }

    .header-title {
        text-align: center;
        border: 4px solid purple;
        color: green
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
/* 
    .container{
        display: flex;
        justify-content: center;
        border: 2px solid green;
    } */

    .subscribe-text{
        display: flex;
        justify-content: left;
        font-size: 14px;
        border: 3px solid red;
        color: green;
    }

    .box {
        border: 5px solid green;
    }

    .link {
        color: black;
    }
    `