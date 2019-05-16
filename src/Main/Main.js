import React, { Component } from 'react';
import './Main.css';


class Main extends Component {

  constructor(props){
    super(props);
    this.state = {number: 0};
    this.changeNumbers = this.changeNumbers.bind(this);
  }

  changeNumbers = (event) => {
    this.setState({number: this.state.number + 1});
}

getNumber = (number) => {
  if (!number){
    return " numberButton"
  } else if(number % 2 === 0) {
     return " even"
   } else {
     return " odd"
   }
 }


resetState = () => {
   this.setState( {number: 0}
   );
 }
  render() {
    return (
      <div className="main">
<div className={"numberBtn" + this.getNumber(this.state.number)} onClick = {this.changeNumbers}>{this.state.number}</div>
<button className="resetBtn" onClick={this.resetState}> Reset </button>
</div>

    );
  }
}


export default Main;
