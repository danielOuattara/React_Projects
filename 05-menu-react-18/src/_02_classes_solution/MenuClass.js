import React, { Component } from 'react'

export default class MenuClass extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className='section-center'>
        {this.props.menusToRender.map(menu => {
          const { id, img, title, price, desc} = menu;
          return (
            <article key={id} className='menu-item'>
              <img className='photo' src={img} alt={title} />
              <div className="item-info">
                <header>
                  <h4 className='title'>{title}</h4>
                  <h4 className='price'>${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}

