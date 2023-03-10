import React from 'react';
import { Document, Page, Image, Text, PDFViewer, View } from '@react-pdf/renderer';
import styles from './style';


function LanscapePdf({ description, styleno, color, regularPrice, cost,image, currentDate,value, supplierName, sizeQty, stOsQty }) {

    
    return ( 
        <PDFViewer style={{ width: '100%', height: '650px'}}>
      <Document>
        <Page size="Letter" orientation="landscape" wrap={false} >
            <View>
                <View style={styles.container3}>
                    <Text style={styles.section4}>{value}</Text>
                    <Text style={styles.section4}>{sizeQty}</Text>
                </View>
                <View wrap={true} style={styles.container}>
                    <Text style={styles.sectiond}>{description}</Text>
                </View>
                <View style={styles.container}>
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
                <View >
                   
               {image && <Image src={URL.createObjectURL(image)} style={styles.img}/>}
                </View>
                
           </View>
        </Page>
      </Document>
      </PDFViewer>
    );
  }



  export default LanscapePdf;
  