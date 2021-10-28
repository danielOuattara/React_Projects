import React from 'react';

const List = (props) => {
  const {people, handleRemoveOnePerson} = props;
  console.log(handleRemoveOnePerson);
  return (
    <>
      <h2 style={{borderBottom:"4px solid grey", marginTop: "10px", paddingBottom: "20px"}}>list component</h2>
      {people.map((person) => {
      const {id, name, age, image} = person;
        return (
          <article 
            key={id} 
            className="person"
            style={{borderBottom:"2px solid grey", marginBottom: "10px", paddingBottom:"20px"}}>
            <img src={image} alt={'picture of '+ name}/>
            <div >
              <h4>{name}</h4>
              <p>{age} years</p>
              <button onClick={() =>handleRemoveOnePerson(id)}>Event Finished</button>
            </div>

          </article>
        );
      })}
    </>
  );
};

export default List;
