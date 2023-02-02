import React, { useState } from 'react';
import LandscapePdf from '../component/landscape';
//import {Form, Input, Label} from 'semantic-ui-react';
import { useEffect } from 'react';
import './style.css';

function Landscape() {
  const [description, setDescription] = useState('');
  const [styleno, setStyleno] = useState('');
  const [color, setColor] = useState('');
  const [regularPrice, setRegularPrice] = useState('');
  const [cost, setCost] = useState('');
  const [image, setImage] = useState(null);
  const [stOsQty, setStOsQty] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [sizeQty, setSizeQty] = useState('');


  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US', {
      year: '2-digit',
      month: '2-digit',
    }).replace(/\//g, '');
    setCurrentDate(date);
  }, []);

  

   

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPDF(true);
   
    
    // You can pass the form data to the PDF component here
  }

  const [showPDF, setShowPDF] = useState(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  }

  return (
    
    <div className='header'>
      <div className='aaa'> <h2 className='bbb'>Landscape</h2></div>
      <div className='Form-Container'>
    {!showPDF && (
    <form onSubmit={handleSubmit} >
      <div className='container1'>
         
        
      <label className='section1'>
        Supplier Name
        <br/>
        <input type="text" value={supplierName} onChange={(e) => setSupplierName(e.target.value)} className='section2' />
      </label>
      </div>
      
      <div className='container1'>
      <label className='section1'>
        Size/QTY
        <br/>
        <input type="text" value={sizeQty} onChange={(e) => setSizeQty(e.target.value)} className='section2' />
      </label>
      </div>
      <div className='container1'>
      <label className='section1'>
        Description
        <br/>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='section2'/>
      </label>
      </div>
      <div className='container1'>
      <label className='section1'>
        Style No
        <br/>
        <input type="text" value={styleno} onChange={(e) => setStyleno(e.target.value)} className='section2' />
      </label>
      </div>
      <div className='container1'>
      <label className='section1'>
        Color
        <br/>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className='section2' />
      </label>
      </div>
      <div className='container1'>
      <label className='section1'>
        Regular Price
        <br/>
        <input type="text" value={regularPrice} onChange={(e) => setRegularPrice(e.target.value)} className='section2' />
      </label>
      </div>
      <div className='container1'>
      <label className='section1'>
        Cost
        <br/>
        <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} className='section2' />
      </label>
      </div>
      <div className='container1'>
      <label className='section1'>
        ST + OS QTY
        <br/>
        <input type="text" value={stOsQty} onChange={(e) => setStOsQty(e.target.value)} className='section2' />
      </label>
      </div>
      <div className='container1'>
      <label className='section1'>Date <br/>
      <input type="text" className='section2' value={currentDate} readOnly/>
      </label>
      </div>
      
      <label className='section3' >
        Image
        <br/>
        <div className='container1'>
        <input type="file" onChange={handleImageChange} accept="image/*" className='section4' />
        </div>
      </label>
      
      <div className='container1'>
      <button type="submit" className='section5' >Print</button>
      </div>
    </form>
    )}
    </div>
    {showPDF && (
   <LandscapePdf 
    description={description} 
    styleno={styleno} 
    color={color} 
    regularPrice={regularPrice} 
    cost={cost} 
    image={image}
    currentDate={currentDate}
    supplierName={supplierName}
    sizeQty={sizeQty}
    stOsQty={stOsQty}
    
  />
  )}
  

     </div>
     
  );
}


export default Landscape;