import React from 'react';
import Router from "./Router";
import Globalstyles from "../Styles/Globalstyles";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return(
        <>
            <Router/>
            <Footer/>
            <Globalstyles/>

        </>
    )
  }
}

export default App;
