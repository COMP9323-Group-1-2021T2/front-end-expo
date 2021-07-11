import React from 'react';
import {StyleSheet, Text, View, Platform } from 'react-native';
import Subcategory from './Subcategory';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';


function General_Information() {
    const health_topic = useLocation().pathname.split("/")[1];
    const [info, setInfo] = React.useState("")

    fetch("https://87xldh7105.execute-api.ap-southeast-2.amazonaws.com/staging/ohs/machinery")
    .then(results => results.json())
    .then(finalResult => {
        setInfo(finalResult["data"]["info"])
    })

    return (
        <View style={styles.container}>
            <Navbar/>
            <View style={{marginLeft:'2%', backgroundColor:'white', marginTop:'1%', height:'75vh', zIndex: -50}}>
                <Subcategory selected="general_information"/>
                <View style={{margin:'2%'}}>
                    <Text> {info} </Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      width:'100vw',
      height:'100vh',
      backgroundColor: '#edf1f2',
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

export default General_Information;