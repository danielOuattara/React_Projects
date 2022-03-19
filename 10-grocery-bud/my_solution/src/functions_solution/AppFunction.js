import React, { useState, useEffect } from "react";
import ListFunction from './ListFunction'
// import AlertFunction from "./AlertFunction";



function App() {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleSubmitItem = (event) => {
    event.preventDefault();
    setItemsList(() => [...itemsList, item]);
    localStorage.setItem(JSON.stringify(item), JSON.stringify(item));
    setItem("");
  };

  const removeItemsFromLocalStorage = () => {
    localStorage.clear();
    setItemsList([])
    // console.log(localStorage);
  };


  return (
    <>
      <section className="section ">
        <div className="section-center">
          <form onSubmit={handleSubmitItem} className="grocery-form">
            <h3>grocery bud</h3>
            <div className="form-control">
              <input
                type="text"
                className="grocery"
                placeholder="e.g eggs"
                onChange={(event) => setItem(event.target.value)}
                value={item}
              />
              <button className="submit-btn">Submit</button>
            </div>
          </form>

          <ListFunction itemsList={itemsList} />

          {/* itemsList.length > 0 &&  */<button className="clear-btn" onClick={removeItemsFromLocalStorage}>
            Clear Items
          </button>}
        </div>
      </section>
    </>
  );
}

export default App;
