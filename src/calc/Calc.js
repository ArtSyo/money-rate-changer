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
          <h4>Я хочу...</h4>
          <div>
            <form onSubmit={this.calcSubmitHandler}>
              <input className='input-text' type="number" defaultValue="150" name="count-currency" />
              <select className='input-option' name="type-currency" id="">
                {Object.keys(this.props.rate).map((keyName, idx) => (
                  <option key={keyName} value={keyName}>
                    {keyName}
                  </option>
                ))}
              </select>
              <input className="input-btn" type="submit" defaultValue="calc" />
            </form>
          </div>
          <div>
            <h5>Результат</h5>
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
