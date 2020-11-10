import React from "react";
import "./Calc.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      rate: {}
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcSubmitHandler = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    let counctCurrency = elements["count-currency"].value;
    let typeCurrency = elements["type-currency"].value;
    this.setState({ result: (counctCurrency / this.state.rate[typeCurrency]).toFixed(4) });
  };

  render() {
    return (
      <div className="calculator">
        <h3>Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу...</div>
          <div>
            <form onSubmit={this.calcSubmitHandler}>
              <input type="number" defaultValue="150" name="count-currency" />
              <select name="type-currency" id="">
                {Object.keys(this.props.rate).map((keyName, idx) => (
                  <option key={keyName} value={keyName}>
                    {keyName}
                  </option>
                ))}
              </select>
              <input type="submit" defaultValue="calc" />
            </form>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
