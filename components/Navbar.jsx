import React from 'react';
import {StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { NativeRouter, Route, NavLink, Link } from "react-router-dom";


export default function Navbar() {

  const [visible_ohs, setVisible_ohs] = React.useState(false);
  const openMenu_ohs = () => setVisible_ohs(true);
  const closeMenu_ohs = () => setVisible_ohs(false);

  const [visible_mh, setVisible_mh] = React.useState(false);
  const openMenu_mh = () => setVisible_mh(true);
  const closeMenu_mh = () => setVisible_mh(false);

  const [visible_ph, setVisible_ph] = React.useState(false);
  const openMenu_ph = () => setVisible_ph(true);
  const closeMenu_ph = () => setVisible_ph(false);

  const [visible_help, setVisible_help] = React.useState(false);
  const openMenu_help = () => setVisible_help(true);
  const closeMenu_help = () => setVisible_help(false);

  return (
        
    <View>
        <View style={{ display:'flex', flexDirection:'row', marginLeft:'2%', backgroundColor:'white', height:'15vh',  zIndex:100}}>
            <NavLink to="/" style={{width:'20vw', textDecoration: 'none'}} activeStyle={{fontWeight: "bold",color: "red"}}>
                <View>
                    <Text style={styles.heading}>
                        myWellbeing
                    </Text>
                </View>
            </NavLink>
            <View style={{width:'0.15%', height:'100%', backgroundColor:'black', marginLeft:'1%', marginRight:'2%', zIndex:100}}/>
            <Provider>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
                    <View style={{width:'75%', margin:'3%', marginLeft: '3%', marginRight:'5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Menu
                        visible={visible_ohs}
                        onDismiss={closeMenu_ohs}
                        style={{marginTop:'15vh', width:'50%', overflow:'hidden', border:'1px solid black'}}
                        anchor={<Button color="black" labelStyle={{fontSize:'1vw'}} onPress={openMenu_ohs}>OH&S</Button>}>
                        <Link  style={{textDecoration: 'none'}} to="/starting_with_safety/general_information">
                            <Menu.Item title="Starting with Safety"/>   
                        </Link>                     
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Legal obligations and Compliance" />
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Hazards and Risks" />
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Industries" />
                        </Menu>

                        <Menu
                        visible={visible_mh}
                        onDismiss={closeMenu_mh}
                        style={{marginTop:'15vh', width:'50%', border:'1px solid black'}}
                        anchor={<Button color="black" labelStyle={{fontSize:'1vw'}} onPress={openMenu_mh}>Mental health and wellbeing</Button>}>
                        <Menu.Item onPress={() => {}} title="Wellbeing" />
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Supporting yourself" />
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Supporting others" />
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Conditions and Disorders" />
                        </Menu>

                        <Menu
                        visible={visible_ph}
                        onDismiss={closeMenu_ph}
                        style={{marginTop:'15vh', width:'50%', border:'1px solid black'}}
                        anchor={<Button color="black" labelStyle={{fontSize:'1vw'}} onPress={openMenu_ph}>Physical health and wellbeing</Button>}>
                        <Menu.Item onPress={() => {}} title="Conditions and treatments" />
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Being healthy" />
                        </Menu>
                    </View>
                    <View  style={styles.help}>
                        <Menu
                        visible={visible_help}
                        onDismiss={closeMenu_help}
                        style={{marginTop:'15vh', width:'50%', marginLeft:'-10%', border:'1px solid black'}}
                        anchor={
                            <Pressable 
                            style = {styles.help} 
                            onPress={openMenu_help}>  
                                <Text style={{fontSize:'1.3vw', color:'white', textAlign:'center', marginTop:'5vh'}}>Get help now</Text>
                            </Pressable>
                        }
                        >
                        <Menu.Item onPress={() => {}} title="Chatbot" />
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Lifeline" />
                        </Menu>
                    </View>
                </View>
            </Provider>
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
