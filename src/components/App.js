import React, {Component} from "react";

class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            hour: 0,
            minut: 0,
            secund: 0,
            interval: "",
            btnBool: false,
            intervalArray: [],
        }
    }
    
    startTime = () =>{
        let timer = setInterval(() => {
            if (this.state.secund === 59) {
                if (this.state.minut === 59) {
                    if (this.state.hour === 59) {
                        this.setState({
                            hour: 0,
                            minut: 0,
                            secund: 0,
                        });
                    }else{
                        this.setState({
                            hour: this.state.hour + 1,
                            minut: 0,
                            secund: 0,
                        });
                    }
                }else{
                    this.setState({
                        minut: this.state.minut + 1,
                        secund: 0,
                    });
                }    
            } else{
                this.setState({secund: this.state.secund + 1}) 
            }
        },1000);
        this.setState({
            btnBool: true,
        });
        this.setState({
            interval: timer,
        });
    };
    stopTime = () =>{
        clearInterval(this.state.interval);
        this.setState({
            btnBool: false,
        });
    };
    myInterval = () =>{
        const {hour, minut, secund, intervalArray} = this.state;
        intervalArray.push(`${hour}:${minut}:${secund}`);
        this.setState({
            intervalArray,
        });
    };
    clearFunc = () =>{
        this.stopTime();
        this.setState({
            hour: 0,
            minut: 0,
            secund: 0,
            intervalArray: [],
        });
    };
    render(){
        const {hour, minut, secund} = this.state;
        return <div>
            <div className="container">
                
                    <div className="header">
                        <h1>Online </h1>
                        <h2>stopwatch</h2>
                    </div>
                
                <div className="child-time-con">
                    <h1>{hour}</h1>
                    <p>:</p>
                    <h1>{minut}</h1>
                    <sub>{secund}</sub>
                </div>
                <div className="child-btn-con">
                    <button id="one" onClick={this.startTime} disabled={this.state.btnBool}>Start</button>
                    <button id="two" onClick={this.stopTime}>Stop</button>
                    <button id="three" onClick={this.myInterval}>Interval</button>
                    <button id="four" onClick={this.clearFunc}>Clear</button>
                </div>
                <div className="child-list-con">
                    {this.state.intervalArray.map(i => <p>{i}</p>)}
                </div>
            </div>
            
            
        </div>
    }
}




export default App;