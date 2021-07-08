import React from 'react';
import {StyleSheet, Text, View, Pressable } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { NativeRouter, Route, NavLink, Link } from "react-router-dom";

function Subcategory({selected}) {

    return (
      <View>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', height:'10vh'}}>

          <Link to="general_information" style={{textDecoration: 'none', width:'100%'}}>
              <View style={{flex:1, justifyContent: 'center', alignItems:'center', height:'100%'}}>
                <Pressable style={{width:'100%', height:'100%','border': '0.5px solid black', 'border-right': '0px'}}> 
                  <Text style = {[styles.buttonText, {color: selected === "general_information" ? 'white' : 'black', backgroundColor: selected === "general_information" ? 'rgb(214, 66, 4)' : 'white',}]}> General Information  </Text>
                </Pressable>
              </View>
          </Link>

          <Link to="articles" style={{textDecoration: 'none', width:'100%'}}>
              <View style={{flex:1,justifyContent: 'center', alignItems:'center', height:'100%'}}>
                <Pressable style={{width:'100%', height:'100%', border:'0.5px solid black', 'border-right': '0px'}}> 
                  <Text style = {[styles.buttonText, {color: selected === "articles" ? 'white' : 'black', backgroundColor: selected === "articles" ? 'rgb(214, 66, 4)' : 'white',}]}> Articles  </Text>
                </Pressable>
              </View>
          </Link>

          <Link to="videos" style={{textDecoration: 'none', width:'100%'}}>
            <View style={{flex:1,justifyContent: 'center', alignItems:'center', height:'100%'}}>
              <Pressable style={{width:'100%', height:'100%', border:'0.5px solid black'}} onPress={() => setTab("videos")}> 
                <Text style = {[styles.buttonText, {color: selected === "videos" ? 'white' : 'black', backgroundColor: selected === "videos" ? 'rgb(214, 66, 4)' : 'white',}]}> Videos  </Text>
              </Pressable>
            </View>
          </Link>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({

  buttonText: {
    padding:'1vw', 
    height:'100%', 
    textAlign: 'center', 
    fontSize: '1.1vw', 
  },
  
});


export default Subcategory;