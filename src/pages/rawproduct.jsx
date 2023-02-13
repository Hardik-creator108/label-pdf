import React, { useState } from 'react';
import PotraitPdf from '../component/potrait';
//import {Form, Input, Label} from 'semantic-ui-react';
import { useEffect } from 'react';
import './style.css';
import RawPdf from '../component/raw';
import { Image } from '@react-pdf/renderer';
//import { PDFViewer } from '@react-pdf/renderer';
import arrowlh from '../component/arrowlh.png';

function RawProduct() {
  const [invoiceNo, setInvoiceNo] = useState('');
  const [image, setImage] = useState('');
  const [totalSkid, setTotalSkid] = useState('');
 // const [imageUrl, setImageUrl] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const [supplierName, setSupplierName] = useState('');

  useEffect(() => {
   const intervalId = setInterval(()=>{
    setCurrentDate(new Date().toLocaleDateString());
   }, 1000);

   return()=> {
    clearInterval(intervalId);
   };
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
     <div className='aaa'> <h2 className='bbb'>Raw Product</h2></div>
      <div className='Form-Container'>
    {!showPDF && (
    <form onSubmit={handleSubmit} >
      <div className='container1'>       
        
      <label className='section1'>
        Supplier Name
        <br/>
        <input type="text" value={supplierName} required='true' onChange={(e) => setSupplierName(e.target.value)} className='section2' />
      </label>
      </div>
      
      <div className='container1'>
      <label className='section1'>
        Number of Skids
        <br/>
        <input type="text" value={totalSkid} onChange={(e) => setTotalSkid(e.target.value)} className='section2' />
      </label>
      </div>
      <div className='container1'> 
      <label className='section1'>
        Invoice Number
        <br/>
        <input type="text" value={invoiceNo} required='true' onChange={(e) => setInvoiceNo(e.target.value)} className='section2' />
      </label>
      </div>
      <div className='container1'>
      <label className='section1'>Received Date <br/>
      <input type="text" className='section2' value={currentDate} readOnly/>
      </label>
      </div>
      <div>
        <Image src={arrowlh} />
      </div>
      
      
      <div className='container1'>
      <button type="submit" className='section5'>Print</button>
      </div>
      
    </form>
    )}
    </div>
    {showPDF && (      
   <RawPdf
    supplierName={supplierName}
    invoiceNo={invoiceNo}
    currentDate={currentDate}
    totalSkid={totalSkid}
    image={Image}

   
    
  />
 
  )}
  

     </div>
     
  );
}


export default RawProduct;