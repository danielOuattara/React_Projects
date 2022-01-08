import React from 'react';
import TourItem from './TourItem';
const Tours = ({tours, removeTourItem}) => {
  return (
    <section>
      <div className='title'>
        <h2>ours tours</h2>
        <div className="underline"></div>
        <div>
          {tours.map(item => {
            return ( 
              < TourItem 
                  key={item.id} 
                  {...item}
                  removeTourItem={removeTourItem} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
