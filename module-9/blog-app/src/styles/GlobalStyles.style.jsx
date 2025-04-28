import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* pass any css here */
    body {
        display: flex;
        background-color: lightgreen;
        border: 5px solid blue;
    }
   
    h2{
        display: flex;
        justify-content: center;
        color: green;
    }

    .img-container{
        display: flex;
        border: 5px solid green;
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

 

    .input-name, .input-email{
        border-radius: 15px;
        margin: 2px;
    }


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
  

    `;
