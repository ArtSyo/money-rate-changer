import React from "react";
import "./App.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Rate from "./rate/Rate";
import About from "./about/About";
import Contacts from "./contacts/Contacts";

import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCookieConfirmClicked: false,
    };
  }

  CookieBtnHandler = () => {
    this.setState({
      isCookieConfirmClicked: !this.state.isCookieConfirmClicked,
    });
  };

  render() {
    return (
      <div className="site">
        <Header />
        <div className="container">
          <main>
            <Switch>
              <Route exact path="/" component={Rate} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts" component={Contacts} />
            </Switch>
          </main>
        </div>

        <div className="container" id="cookie-info">
          <div className="site-container">
            {this.state.isCookieConfirmClicked === false ? (
              <div className="well">
                На нашем сайте использована информация технического характера
                <br />В частности информация о персональных данных.
                <br />
                <br />
                <button
                  onClick={this.CookieBtnHandler}
                  className="btn btn-primary btn-sm"
                >
                  Ok
                </button>
              </div>
            ) : (
              <p className="well">Спасибо за использование нашего сервиса.</p>
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
