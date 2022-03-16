import React, { Component } from 'react'
import questions from './../data';
import QuestionClass from './QuestionClass';



export default class AppClass extends Component {
  render() {
    return (
      <div className="container">
        <h3>question and answer about login</h3>
        <section className='info'>
          <ul>
            {questions.map(item => {
              const { id, title, info } = item;
              return (
                <li key={id}>
                  <QuestionClass title={title} info={info} />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

