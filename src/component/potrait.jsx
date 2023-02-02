import React, { useState } from 'react';
import { Document, Page, Image, Text, PDFViewer, StyleSheet, View } from '@react-pdf/renderer';
import styles from './style2';


function PotraitPdf({ description, styleno, color, regularPrice, cost, image, imageUrl, currentDate, supplierName, sizeQty, stOsQty }) {

    
    return (
        <PDFViewer style={{ width: '100%', height: '550px'}}>
      <Document>
        <Page size="Letter" orientation="portrait">
            <View >
                <View style={styles.container3}>
                    <Text style={styles.section4}>{supplierName}</Text>
                    <Text style={styles.section4}>{sizeQty}</Text>
                </View>
                <View>
                    <Text style={styles.section1}>{description}</Text>
                </View>
                <View>
                    <Text style={styles.section1}>{styleno}</Text>
                </View>
                <View style={styles.container1}>
                    <Text style={styles.section2}>{color}</Text>
                    <Text style={styles.section2}>{regularPrice}</Text>
                    
                </View>
                <View style={styles.container2}>
                    <Text style={styles.section3}>{stOsQty} - </Text>
                    <Text style={styles.section3}>{currentDate}{cost}</Text>
                    
                    
                </View>
                <View>
                    {image && <Image src={URL.createObjectURL(image)} style={styles.img} />}
                </View>
                <Document>
            <View style={styles.container7}>
                <View style={styles.container4}>
                    <Text style={styles.section5}>{supplierName}</Text>
                    <Text style={styles.section5}>{sizeQty}</Text>
                </View>
                <View>
                    <Text style={styles.section6}>{description}</Text>
                </View>
                <View>
                    <Text style={styles.section9}>{styleno}</Text>
                </View>
                <View style={styles.container5}>
                    <Text style={styles.section7}>{color}</Text>
                    <Text style={styles.section7}>{regularPrice}</Text>
                    
                </View>
                <View style={styles.container6}>
                    <Text style={styles.section8}>{stOsQty} - </Text>
                    <Text style={styles.section8}>{currentDate}{cost}</Text>
                    
                    
                </View>
                <View style={{position:'relative'}}>
                    {image && <Image src={URL.createObjectURL(image)} style={styles.img1} />}
                </View>
            </View>
            </Document>
           </View>
        </Page>
      </Document>
      </PDFViewer>
    );
  }



  export default PotraitPdf;
  