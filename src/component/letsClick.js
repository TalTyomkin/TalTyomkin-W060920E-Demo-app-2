import React, { Component } from 'react';

class LetsClick extends Component {
    state = { 
        num:45
     }
    render() { 
        return ( 
            <div style={{padding: 100}}>
                <h2 style = {{fontSize:'4rem',color:'midnightblue'}}>{this.state.num}</h2>
                <button
                    type="button"
                    className="btn btn-success"
                    style={{margin: 50,padding: 40,fontSize:'2.5rem'}}
                >
                    +
                </button>
                <span> |--------------------------------| </span>
                <button
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