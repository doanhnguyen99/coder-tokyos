import React, { Component } from 'react';
// import React from 'react';

class TodoItem extends Component{
    render(){
        return(
            <div className="TodoItem">
                <p>{ this.props.title }</p> 
            </div>
        )
    }
}

export default TodoItem;