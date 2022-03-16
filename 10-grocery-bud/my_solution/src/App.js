import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
 
  const handleAdditem = (event) => {
    event.preventDefault();
    localStorage.setItem(JSON.stringify(item), JSON.stringify(item));
    // itemList.push(localStorage.getItem(JSON.stringify(item)))
    setItem("");
    console.log(localStorage)
    console.log(typeof localStorage)
  }

  const removeItemsFromLocalStorage = () => {
    localStorage.clear()
    console.log(localStorage)
  }


  return (
  <>
    <section className='section '>
      <div className='section-center'>  
      <form onSubmit={handleAdditem} className='grocery-form'>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input 
          type="text" 
          className='grocery' 
          placeholder='e.g eggs'
          onChange={(event) => setItem(event.target.value)}
          value={item} 
          />
          <button className='submit-btn'>Submit</button>
        </div>
        </form>    

        <List />


        <button className='clear-btn' onClick={removeItemsFromLocalStorage}>Clear Items</button>


      </div>
      </section> 
  </>
  );
  
}

export default App
