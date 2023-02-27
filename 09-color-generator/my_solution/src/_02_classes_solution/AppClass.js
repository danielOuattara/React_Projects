import React, { Component } from 'react'
import SingleColorClass from './SingleColorClass';
import Values from 'values.js';


export default class AppClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userColor: "",
       error: null,
       list: new Values('#fbb').all(10),
    }
  }

  handleSubmit = (event) => {
    try {
      event.preventDefault();  
      this.setState({error: null});
      this.setState({list:new Values(this.state.userColor).all(10)});

    } catch (error) {
      this.setState({error: true});
      this.setState({userColor: ""}); 
    }
  }

  render() {
    return(
      <> 
        <section className='container'>
          <h3> color generator </h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type = "text" 
              value={this.state.userColor}
              placeholder="Enter valid Hex color..."
              onChange={ (event) => this.setState({userColor: event.target.value})}
              className={this.state.error ? 'error': null }
            />
            <button type="submit" className='btn'>Submit</button> 
            {this.state.error && <p className='error'>Enter a valid Hexadecimal Color</p>}
          </form>
        </section>
  
        <section className='colors'>
          {this.state.list.map((color, index) => {
            return <SingleColorClass key={index} index={index} {...color} />
          })}
        </section>
      </>
    );
  }
}


