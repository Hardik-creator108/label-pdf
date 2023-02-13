//import React from "react";
import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container1:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '15px'
    },
    section1:{
        textAlign:'center',
        fontSize: '20pt',
        fontWeight: 'normal',
        
    },
    container2: {
        alignContent:'center',
        margin:'10px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    sectiond:{
        textAlign: 'center',
        fontSize: '36pt',
        fontWeight:'normal'        
    },
    section2:{
        textAlign: 'center',
        fontSize: '40pt',
        fontWeight: 'extrabold',        
    },
    container5:{
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        
        flexDirection:'row'
        
    },
    img:{
        width:'175px',
        height:'130px',
        alignSelf:'center'
    },
    container3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '10px'
    },
    section3:{
        textAlign:'center',
        fontSize: '20pt',
        fontWeight: 'normal',
    },
    container4:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '7px'
    },
    section5:{
        textAlign:'center',
        fontSize: '20pt',
        fontWeight: 'normal',
    }
   
});

export default styles;