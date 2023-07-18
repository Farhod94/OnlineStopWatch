import React, {Component} from "react";

class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            myCount: 0,
        }
    }
    oneAdd = () =>{
        this.setState({
            myCount: this.state.myCount + 1
        });
        
    };
    deleteOne = () =>{
        this.setState({
            myCount: this.state.myCount - 1
        });
        
    };
    resetFunc = () =>{
        this.setState({
            myCount: 0
        });
        
    };
    render(){
        return <div>
            <h1>Counter: {this.state.myCount}</h1>        
            <button onClick={this.myFunc}>Counter ++1</button>
            <button onClick={this.myFunc}>Counter --1</button>
            <button onClick={this.myFunc}>Reset</button>
        </div>
    }
}




export default App;