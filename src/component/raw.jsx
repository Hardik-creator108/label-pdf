import React from 'react';
import { Document, Page, Image, Text, PDFViewer, View } from '@react-pdf/renderer';
import styles from './rawstyle';
import arrowlh from './arrowlh.png';
import arrowrh from './arrowrh.png';


function RawPdf({ supplierName, currentDate, totalSkid, image, invoiceNo }) {

    
    return (
        <PDFViewer style={{ width: '100%', height: '850px'}}>
      <Document>
        <Page size="Letter" orientation="landscape" wrap={false} >
            <View>
            <View >
            <View style={styles.container1}>
                    <Text style={styles.section1} >{supplierName}</Text>
                </View>
                <View  style={styles.container1}>
                    <Text style={styles.sectiond}>Invoice No.#{invoiceNo}</Text>
                </View>
                <View style={styles.container1}>
                    <Text style={styles.section4}>Received Date: {currentDate}</Text>
                    
                </View>
                <View style={styles.container1}>
                    <Text style={styles.section5}>Number of Skids: {totalSkid}</Text>
                    
                    
                </View>
                <View style={styles.container1}>
                   
               {image && <Image src={arrowlh} style={styles.img}/>}
                </View>  
            </View>
            </View >
            </Page>
     
           
            <Page size="Letter" orientation="landscape" wrap={false} >
            <View>
            <View >
            <View style={styles.container1}>
                    <Text style={styles.section1} >{supplierName}</Text>
                </View>
                <View  style={styles.container1}>
                    <Text style={styles.sectiond}>Invoice No.#{invoiceNo}</Text>
                </View>
                <View style={styles.container1}>
                    <Text style={styles.section4}>Received Date: {currentDate}</Text>
                    
                </View>
                <View style={styles.container1}>
                    <Text style={styles.section5}>Number of Skids: {totalSkid}</Text>
                    
                    
                </View>
                <View style={styles.container5}>
                   
               {image && <Image src={arrowrh} style={styles.img}/>}
                </View>  
            </View>
            </View>
            </Page>
            </Document>
                
      
      </PDFViewer>
    );
  }



  export default RawPdf;
  