import React, { Component } from 'react';
 class Counter extends Component {
   
    styles = {
        fontSize : 20,
        fontWeight : "bold"
    }
    render() { 
        return (
        
        <div >
            <span style={ this.styles} className={ this.getBageClasses() }> { this.formatCount() }</span>
            <button onClick={() => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

            </div>
        );
      
    }
    getBageClasses() {
        let classes = "badge m-3 p-2"
        classes += this.props.counter.value === 0 ? "badge bg-danger" : " badge bg-primary"
        return classes
      }  
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "ZEROS" : value
    }
 }
  
 export default Counter;
