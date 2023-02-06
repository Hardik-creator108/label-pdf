//import React from "react";
import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    section1: {
        textAlign: 'center',
        fontSize: '40pt',
        fontWeight: 'bold',
        margin: '5px'
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
         width:'55%',
         height: '55%',
         alignContent:'center',
         justifyContent:'center',
         alignSelf:'center',
         alignItems:'center',
         margin:'5px'

    },
    img: {
        width: '50%',
        height: '50%',
        alignSelf: 'center',
        marginTop: '0px',
        
        
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