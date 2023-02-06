//import React from "react";
import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    section1: {
        textAlign: 'center',
        fontSize: '40pt',
        fontWeight: 'bold',
        margin: '20px',
        
        
    },
    container1: { 
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        textAlign :'center', 
        width: '100%'      
    },
    section2: {
        textAlign:'center',
        fontSize: '24pt',
        fontWeight: 'normal'
                
    },
    container4:{
       

    },
    img: {
        width: '65%',
        height: '70%',
        alignSelf: 'center',
        margin: '10px'        
        
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    section3: {
        textAlign: 'center',
        fontSize: '24pt',
        fontWeight: 'normal'
    },
    section4: {
        textAlign:'center',
        fontSize: '24pt',
        fontWeight: 'normal',
        margin: '10px'
    },
    container3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '10px'
    }
});

export default styles;