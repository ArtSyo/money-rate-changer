import React from "react";
import "./Rate.css";

import Calc from "../calc/Calc";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: {},
    };
    this.currency = ["RUB", "USD", "CAD", "PHP"];
  }

  componentDidMount() {
    this.getRate();
}

  getRate = () => {
    fetch("https://api.exchangeratesapi.io/latest")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          date: data.date,
        });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({ currencyRate: result });
      });
  };

  render() {
    return (
      <div className="rate">
        <h3>Курс валют за {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, idx) => (
            <div key={keyName} className="block flex-item">
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">
                {this.state.currencyRate[keyName].toFixed(2)} *
              </div>
              <p>*Можно купить за 1 EUR</p>
            </div>
          ))}
        </div>
        <Calc rate={this.state.currencyRate}/>
      </div>
    );
  }
}

export default Rate;
