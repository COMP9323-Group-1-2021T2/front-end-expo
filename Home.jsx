import React from 'react';
import {StyleSheet, Text, View, Pressable } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import Navbar from './components/Navbar';

export default function Home() {

  return (
        <View style={styles.container}>
            <Navbar/>
            <View style={{marginLeft:'2%', backgroundColor:'white', marginTop:'1%', height:'75vh', zIndex: -50}}>
              
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


