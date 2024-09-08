import React, { Component } from 'react'

class FirstComponent extends Component {
    constructor(){
        super();
        this.state={
            email:"",
        };
    }
  render() {
    const changeEmail=()=>{
        const inputValue=document.getElementById('input').value;
        this.setState({email:inputValue});
    }
    return (
      <div>
        <input type="text" placeholder='Enter Your Email Address' onChange={changeEmail} id='input' />
        <br />
        {this.state.email}
      </div>
    )
  }
}
export default FirstComponent;