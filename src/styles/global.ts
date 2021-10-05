import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  :root {
    --white: #fff;
    --gray: #999999;
    --grayer: #666666;

    --black: #000;

    --red: #FF0000;
    
    --yellow: #FFD05C;

    --green: #34A853;

    --purple: #6200EE;

    --blue: #2f46cf;
    
    --teal: #2AC4EA;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width:1440px){
      font-size: 90%;
    }

    @media (max-width:720px){
      font-size: 80%;
    }
  }

  body{
    background: var(---white);
    -webkit-font-smoothing: antialised;
  }

  body, div, section, main {
    ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    }
 
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
  }

  body, input, textarea, button, select, option {
    font-family: 'Roboto', serif;
    font-weight: 600;
    border: 0;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
