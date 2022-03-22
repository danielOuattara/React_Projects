import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const ListClass = ({itemsList, deleteItem, editItem}) => {
    return (
      <div className='grocery-list'>
        {itemsList.map(item => {
          const { title, id } = item;
          return (
            <article key={id} className='grocery-item'>
              <p className='title'>{title}</p>
              <div className="btn-container">
                <FaEdit className='edit-btn' onClick={() => editItem(id)} />
                <FaTrash className='delete-btn' onClick={() => deleteItem(id)}/>
              </div>
            </article>
          );
        })
        }
      </div>
    );
  }

export default ListClass;
