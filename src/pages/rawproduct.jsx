import React, { useState } from 'react';
import PotraitPdf from '../component/potrait';
//import {Form, Input, Label} from 'semantic-ui-react';
import { useEffect } from 'react';
import './style.css';
import RawPdf from '../component/raw';
import { Image } from '@react-pdf/renderer';
//import { PDFViewer } from '@react-pdf/renderer';
import arrowlh from '../component/arrowlh.png';
import Autosuggest from 'react-autosuggest';
import {format, addDays} from 'date-fns';



const suppliers = ['NIKE', 'ADIDAS', 'ASICS', 'BEARPAW', 'CARHARTT', 'CAT', 'CHAMPION', 'CONVERSE', 'DICKIES', 'FANATICS', 'FILA', 'HAGGAR', 'HH', 'HERSCHEL', 'HOTSOX',
                    'JANSPORTS', 'JF SPORTS', 'K.BELL', 'KAMIK', ' KAPPA', 'KEDS', 'KENNETH COLE', 'KODIAK', 'LETSFIT', 'MERRELL', 'NEW BALANCE','NEW ERA',
                    'OAKLEY', 'PETS FIRST', 'PRO-KEDS', 'PUMA', 'REEBOK', 'SANUK', 'SAUCONY', 'SPERRY', 'SVP SPORTS', 'THE NORTH FACE', 'TERRA', 'TERVIS','TIMBERLAND',
                    'TIMBERLAND PR', 'UMBRO', 'VANS', 'WESC', 'WILSON', 'WOLVERINE', 'WOLVERINE/KEDS', 'LEVELWEAR']

function RawProduct() {
  const [invoiceNo, setInvoiceNo] = useState('');
  const [image, setImage] = useState('');
  const [totalSkid, setTotalSkid] = useState('');
 // const [imageUrl, setImageUrl] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const [supplierName, setSupplierName] = useState('');
  const [date,setDate] = useState('');
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
   const intervalId = setInterval(()=>{
    setCurrentDate(new Date().toLocaleDateString());
   }, 1000);

   return()=> {
    clearInterval(intervalId);
   };
  }, []);

  const handleDateChange = date => {
    setSelectedDate(date);
  };




  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : suppliers.filter(supplier =>
      supplier.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  
  
  
    const onInputChange = (event, { newValue }) => {
      setValue(newValue);
    };
  
    const onSuggestionsFetchRequested = ({ value }) => {
      setSuggestions(getSuggestions(value));
    };
  
    const onSuggestionsClearRequested = () => {
      setSuggestions([]);
    };
  
    const inputProps = {
      placeholder: 'Supplier Name',
      value,
      onChange: onInputChange,
      className:'section2'
    };
  
    const shouldRenderSuggestions = value => {
      return true;
    };

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
        <label className='section1'>Supplier
        <br/>
        
       <Autosuggest
       
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={suggestion => suggestion}
      renderSuggestion={suggestion => <span>{suggestion}</span>}
      inputProps={inputProps}
      shouldRenderSuggestions={shouldRenderSuggestions}
      
    />
   
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
      <input
        type="date"
        className='section6'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
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
    value={value}
    invoiceNo={invoiceNo}
   date={date}
    totalSkid={totalSkid}
    image={Image}

   
    
  />
 
  )}
  

     </div>
     
  );
}


export default RawProduct;