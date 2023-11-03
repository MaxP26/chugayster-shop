import React from 'react';
import Style from './Counter.module.css';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:props.value!==undefined?props.value:-1,
            min:props.min!==undefined?props.min:Number.NEGATIVE_INFINITY,
            max:props.max!==undefined?props.max:Number.POSITIVE_INFINITY,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.inputChange = this.inputChange.bind(this);
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state !== prevState) {
          this.props.onChange(this.state.value);
        }
    }
    increment() {
        if(this.state.value<this.state.max){
            this.setState({value:this.state.value+1});
        }
    }

    decrement(){
        if (this.state.value > this.state.min) {
            this.setState({value:this.state.value-1});
        }
    }
    inputChange(e){
        let a=parseInt(e.target.value);
        if(a>=this.state.min && a<=this.state.max){
            this.setState({value:a});
        }
    }

    render() {
        return(
        <div className={`${this.props.className} ${Style.counter}`}>
            <button className={`${Style.btn} ${Style.btnDec}`} onClick={this.decrement}>-</button>
            <input type="number" value={this.state.value} onChange={this.inputChange} className={Style.value} />
            <button className={`${Style.btn} ${Style.btnInc}`} onClick={this.increment}>+</button>
        </div>
    )}
}
export default Counter;

