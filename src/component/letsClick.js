import React, { Component } from 'react';

class LetsClick extends Component {
    state = { 
        num:0
     }
    
    // addCount = () => {
    //     let {num} = this.state;
    //     this.setState({num: ++num})
    // }
    // reduceCount = () => {
    //     let {num} = this.state;
    //     if(num > 0){
    //     num--
    //     this.setState({num})
    //     }
    // }
    handleButtond = (action) => {
        let {num} = this.state;

        if(action === 'add'){
            this.setState({num: ++num})
        }
        if(action === 'reduce' && num > 0){
            this.setState({num: --num})
        }
        if(action === 'reset'){
            this.setState({num :0})
        }

    }
        
    render() { 
        return ( 
            <div style={{padding: 100}}>
                <button onClick = {() => this.handleButtond('reset')}>Rest</button>
                <h2 style = {{fontSize:'4rem',color:'midnightblue'}}>{this.state.num}</h2>
                {/* <button
                    onClick = {this.addCount}
                    type="button"
                    className="btn btn-success"
                    style={{margin: 50,padding: 40,fontSize:'2.5rem'}}
                >
                    +
                </button>
                <span> |--------------------------------| </span>
                <button
                    onClick = {this.reduceCount}
                    type="button"
                    className="btn btn-danger"
                    style={{margin: 50,padding: 40,fontSize:'2.5rem'}}
                >
                     - 
                </button> */}
                <button
                    onClick = {() =>this.handleButtond('add')}
                    type="button"
                    className="btn btn-success"
                    style={{margin: 50,padding: 40,fontSize:'2.5rem'}}
                >
                    +
                </button>
                <span> |--------------------------------| </span>
                <button
                    onClick = {() =>this.handleButtond('reduce')}
                    type="button"
                    className="btn btn-danger"
                    style={{margin: 50,padding: 40,fontSize:'2.5rem'}}
                >
                     - 
                </button>
            </div>
         );
    }
}
 
export default LetsClick;