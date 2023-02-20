import React from 'react';
import { Document, Page, Image, Text, PDFViewer, View } from '@react-pdf/renderer';
import styles from './style2';


function PotraitPdf({ description, styleno, color, regularPrice,value, cost, image, imageUrl, currentDate, supplierName, sizeQty, stOsQty }) {

    
    return (
        <PDFViewer style={{ width: '100%', height: '850px'}}>
      <Document>
        <Page size="Letter" orientation="portrait" wrap={false} >
            <View>
            <View >
            <View style={styles.container1}>
                    <Text style={styles.section1} >{value}</Text>
                    <Text style={styles.section1}>{sizeQty}</Text>
                </View>
                <View wrap={true} style={styles.container2}>
                    <Text style={styles.sectiond}>{description}</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.section2}>{styleno}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.section4}>{color}</Text>
                    <Text style={styles.section4}>R - {regularPrice}</Text>
                    
                </View>
                <View style={styles.container4}>
                    <Text style={styles.section5}>{stOsQty} - </Text>
                    <Text style={styles.section5}>{currentDate}{cost}</Text>
                    
                    
                </View>
                <View style={styles.container5}>
                   
               {image && <Image src={URL.createObjectURL(image)} style={styles.img}/>}
                </View>  
            </View>
            <View >
            <View style={styles.container1}>
                    <Text style={styles.section1} >{value}</Text>
                    <Text style={styles.section1}>{sizeQty}</Text>
                </View>
                <View wrap={true} style={styles.container2}>
                    <Text style={styles.section2}>{description}</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.section2}>{styleno}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.section4}>{color}</Text>
                    <Text style={styles.section4}>R - {regularPrice}</Text>
                    
                </View>
                <View style={styles.container4}>
                    <Text style={styles.section5}>{stOsQty} - </Text>
                    <Text style={styles.section5}>{currentDate}{cost}</Text>
                    
                    
                </View>
                <View style={styles.container5}>
                   
               {image && <Image src={URL.createObjectURL(image)} style={styles.img}/>}
                </View>
            </View>
           </View>
        </Page>
      </Document>
      </PDFViewer>
    );
  }



  export default PotraitPdf;
  