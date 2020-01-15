import React, { Component } from 'react';

export default class CartItems extends Component {
    constructor() {
        super();
        this.state = {items: null};
        // this.state = JSON.parse(window.localStorage.getItem('cartProducts')) 
      }
    componentWillMount() {

            this.setState({
                items : JSON.parse(window.localStorage.getItem('cartProducts'))
            })
            console.log("state", this.state)
    }
  
    render() {
      const message = `The current state is ${this.state.items[0].title}.`;
      return (
          <div>
        <div>
        <ol type="1">
            {
                this.state.items && this.state.items.map((item, i)=>
                    
                <li key={i}>{item.title}</li>
                )
            }
</ol>
        </div>
          </div>
      );
    }
  }