import React, { useState , useEffect} from 'react';
import { Form, Input,    } from 'semantic-ui-react';
import { PDFViewer, Document, Page,Image, Text, View, } from '@react-pdf/renderer';
import '../pages/style.css';
//import Landscape from './landscape';
//import LanscapePdf from '../component/url';
import styles from '../component/style';



const Sticker = (props) => {
  const [formData, setFormData] = useState({
    
    image: '',
    imageFile: '',
    
  });
  
  const [description, setDescription] = useState('');
  const [styleno, setStyleno] = useState('');
  const [color, setColor] = useState('');
  const [regularPrice, setRegularPrice] = useState('');
  const [cost, setCost] = useState('');
  //const [image, setImage] = useState(null);
  const [stOsQty, setStOsQty] = useState('');
  //const [imageUrl, setImageUrl] = useState('');
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



  const [showPDF, setShowPDF] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPDF(true);
  };

  return (
    <div className='header'>
     <div className='aaa'> <h2 className='bbb'>Landscape</h2></div>
    <div className="Form-Container">
      {!showPDF && (
        <Form onSubmit={handleSubmit}>
           
           <div className='container1'>
         
        
         <label className='section1'>
           Supplier Name
           <br/>
           <input type="text" required="true" value={supplierName} onChange={(e) => setSupplierName(e.target.value)} className='section2' />
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
           <input type="text" required="true" value={description} onChange={(e) => setDescription(e.target.value)} className='section2'/>
         </label>
         </div>
         <div className='container1'>
         <label className='section1'>
           Style No
           <br/>
           <input type="text" value={styleno} required="true" onChange={(e) => setStyleno(e.target.value)} className='section2' />
         </label>
         </div>
         <div className='container1'>
         <label className='section1'>
           Color
           <br/>
           <input type="text" value={color} required="true" onChange={(e) => setColor(e.target.value)} className='section2' />
         </label>
         </div>
         <div className='container1'>
         <label className='section1'>
           Regular Price
           <br/>
           <input type="text" value={regularPrice} required="true" onChange={(e) => setRegularPrice(e.target.value)} className='section2' />
         </label>
         </div>
         <div className='container1'>
         <label className='section1'>
           Cost
           <br/>
           <input type="text" value={cost} required="true" onChange={(e) => setCost(e.target.value)} className='section2' />
         </label>
         </div>
         <div className='container1'>
         <label className='section1'>
           ST + OS QTY
           <br/>
           <input type="text" value={stOsQty} required="true" onChange={(e) => setStOsQty(e.target.value)} className='section2' />
         </label>
         </div>
         <div className='container1'>
         <label className='section1'>Date <br/>
         <input type="text" className='section2' value={currentDate} readOnly/>
         </label>
         </div>
         
         <label className='section3' >
         <Form.Field
          control={Input}
          label="Image URL"
          placeholder="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
         </label>
         
         
         <div className='container1'>
         <button type="submit" className='section5' >Print</button>
         </div>
        </Form>
      )}
      {showPDF && (
      <PDFViewer style={{ width: '100%', height: '550px'}} >
      <Document>
        <Page size="Letter" orientation="landscape" wrap={false}>
            <View>
                <View style={styles.container3}>
                    <Text style={styles.section4}>{supplierName}</Text>
                    <Text style={styles.section4}>{sizeQty}</Text>
                </View>
                <View wrap>
                    <Text style={styles.sectiond}>{description}</Text>
                </View>
                <View style={styles.container1}>
                    <Text style={styles.section1}>{styleno}</Text>
                </View>
                <View style={styles.container1}>
                    <Text style={styles.section2}>{color}</Text>
                    <Text style={styles.section2}>R - {regularPrice}</Text>
                    
                </View>
                <View style={styles.container2}>
                    <Text style={styles.section3}>{stOsQty} - </Text>
                    <Text style={styles.section3}>{currentDate}{cost}</Text>
                    
                    
                </View>
          <View>
           {formData.image ? (
              <Image style={styles.img} src={formData.image}/>
           ) : (
            <Text>No Image Provided</Text>
           )}
          </View>
          
          </View>
          </Page>
          </Document>
          </PDFViewer>
      )
}
      
    </div>
    
      
    </div>
    
  );
};



export default Sticker;