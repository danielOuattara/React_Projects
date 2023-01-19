import React, { Component } from 'react'


export default class TourItemClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
       readMore: false
    }
  }

  render() {
    const {id, image, info, price, name, removeTourItem} = this.props;
    return (
      <article className='single-tour'>
        <img src={image} alt={`${name} decription`} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {this.state.readMore ?  info : info.substring(0, 135) + " ..."}
            <button onClick={() => this.setState({readMore: !this.state.readMore})}>
              {this.state.readMore ? 'show less' : 'read more'}
            </button>
          </p>
          <button 
            className='delete-btn' 
            onClick={() => removeTourItem(id)}>
              remove this tour
          </button>
        </footer>
      </article>
    );
  }
}




