import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class Calc extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: 0

        }
        //this.summing = this.summing.bind(this);
        this.gettingNum1 = this.gettingNum1.bind(this);
        this.gettingNum2 = this.gettingNum2.bind(this);

    };

    gettingNum1(e) {
        this.setState({
            number1: e.target.value
        })

    }

    gettingNum2(e) {
        this.setState({
            number2: e.target.value,

        })

    }

    summing() {
        console.log("hi working---" + rsum);
        var rsum;
        rsum = parseInt(this.state.number1) + parseInt(this.state.number2);
        this.setState({
            number1: '',
            number2: '',
            sum: rsum
        })
    }
    subtracting() {
        var rsub;
        rsub = parseInt(this.state.number1) - parseInt(this.state.number2);
        this.setState({
            number1: '',
            number2: '',
            sum: rsub
        })
    }
    render() {
        return (
            <div className="App">
                <p></p>
                Enter Number1 : <input type="text" onChange={this.gettingNum1} value={this.state.number1} /> <br />
                <p> </p>
                Enter Number2 : <input type="text" onChange={this.gettingNum2} value={this.state.number2} /> <br />
                <p></p>
                <textarea name="textarea" value={this.state.sum} />
                <p></p>

                <button onClick={this.summing.bind(this)}>Sum</button>
                <button onClick={this.subtracting.bind(this)}>Subtract</button>

            </div>
        );
    }
}



export default Calc;