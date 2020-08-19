import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';


export default createGlobalStyle`
  ${reset};
  * {
  box-sizing: border-box;
  }
  body {
    background-color: #F5F5F6;
    font-family: -apple-system;
    padding-top: 50px;
  }
  a {
  text-decoration: none;
  color:#222;
  }
`;