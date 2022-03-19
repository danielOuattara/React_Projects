import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const ListFunction = ({itemsList}) => {
  // console.log(itemsList)

    // let i;
    // for (i = 0; i < localStorage.length; i++) {
    //   ListToRender.push(localStorage.getItem(i))
    //   console.log(ListToRender)
    // }

    return (
      // itemsList.map((item, index) => {
      //   return (
      //     <article key={index}>
      //       <p className='title'>{item}</p>
      //       <FaEdit className='edit-btn'/>
      //       <FaTrash className='delete-btn'/>
      //     </article>
      //   );
      // })
      itemsList.map((item, index) => {
        return (
          <article key={index} className='grocery-item'>
            <p className='title'>{item}</p>
            <FaEdit className='edit-btn'/>
            <FaTrash className='delete-btn'/>
          </article>
        );
      })
    );
  }

        // { ListToRender.map((item, index) => {
        //   return (
        //     <article  key={index} className='grocery-item'>
        //       <p className='title'>{item}</p>
        //       <FaEdit className='edit-btn'/>
        //       <FaTrash className='delete-btn'/>
        //     </article>
        //   );
        // });

export default ListFunction;
