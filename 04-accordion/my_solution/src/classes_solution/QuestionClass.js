import React, { Component } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



export default class QuestionClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnswer: false
    }
  }
  
  toggleShowAnswer = () => {
    this.setState ({
      showAnswer: !this.state.showAnswer
    })
  }

  render() {
    const { title, info } = this.props;
    return (

      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button className='btn' onClick={this.toggleShowAnswer}>
            {this.state.showAnswer ? <AiOutlineMinus/>: <AiOutlinePlus/>}
          </button>
        </header>
        {this.state.showAnswer && <p>{info}</p>}
      </article>
    );
  }
}

