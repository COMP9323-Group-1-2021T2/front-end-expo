import React from 'react';
import {StyleSheet, Text, View, Platform } from 'react-native';
import Navbar from './Navbar';
import Subcategory from './Subcategory';
import { useLocation } from 'react-router-dom';

function Videos() {
    const health_topic = useLocation().pathname.split("/")[1];
    return (
        <View style={styles.container}>
            <Navbar/>
            <View style={{marginLeft:'2%', backgroundColor:'white', marginTop:'1%', height:'75vh', zIndex: -50}}>
            <Subcategory selected="videos" />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      width:'100vw',
      height:'100vh',
      backgroundColor: '#edf1f2',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    heading: {
      fontSize:'3.4vw',
      padding:'1%',
    },
    help: {
      backgroundColor:"#d64204", 
      width:'10vw', 
      height:'15vh',
      marginLeft:'2%',
    }},
    
);

export default Videos;