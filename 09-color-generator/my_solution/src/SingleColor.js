import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {

  const [ alert, setAlert ] = useState(false)
  let color = rgbToHex(...rgb);


 useEffect(() => {
   const timeOutSet = setTimeout(() => setAlert(false), 1500)
   return () => clearTimeout(timeOutSet)
 }, [alert])
 

  const handleCopyToClipBoard = () => {
    setAlert(true);
    navigator.clipboard.writeText(color);
  }

  return (
    <article onClick={ handleCopyToClipBoard }
      className={ index > 7 ? 'color-light color': 'color'} 
      style={{backgroundColor:`${color}`}}
    >
      <p className="percent-value">{weight} %</p>
      <p className="color-value">{color}</p>
      {alert && <p className={ index > 7 ? 'alert-light alert': 'alert'}>copied to clipboard</p>}
    </article>
  );
  
}

export default SingleColor;
