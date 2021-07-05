import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

export default function App() {

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

  const [MainComponent, setMainComponent] = React.useState("none");

  return (
    
    <View style={styles.container}>
        <View>
          <View style={{ display:'flex', flexDirection:'row', marginLeft:'2%', backgroundColor:'white', height:'15vh'}}>
              <Text style={styles.heading}>myWellbeing</Text>
              <View style={{width:'0.15%', height:'100%', backgroundColor:'black', marginLeft:'1%'}}/>
                <Provider>
                  <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
                      <View style={{width:'78%', margin:'3%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                          <Menu
                            visible={visible_ohs}
                            onDismiss={closeMenu_ohs}
                            style={{marginTop:'5%', width:'50%', zIndex:3}}
                            anchor={<Button color="black" labelStyle={{fontSize:'1vw'}} onPress={openMenu_ohs}>OH&S</Button>}>
                            <Menu.Item onPress={() => {setMainComponent("starting_with_safety")}} title="Starting with Safety" />
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
                            style={{marginTop:'5%', width:'50%'}}
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
                            style={{marginTop:'5%', width:'50%'}}
                            anchor={<Button color="black" labelStyle={{fontSize:'1vw'}} onPress={openMenu_ph}>Physical health and wellbeing</Button>}>
                            <Menu.Item onPress={() => {}} title="Conditions and treatments" />
                            <Divider />
                            <Menu.Item onPress={() => {}} title="Being healthy" />
                          </Menu>
                      </View>
                      <View  style={{backgroundColor:"#d64204"}}>
                          <Menu
                            visible={visible_help}
                            onDismiss={closeMenu_help}
                            style={{marginTop:'7%', width:'50%'}}
                            anchor={<Button color="black" labelStyle={{fontSize:'1vw', marginTop:'20%', color:'white', height:'8.5vh'}} onPress={openMenu_help}>Get help now</Button>}>
                            <Menu.Item onPress={() => {}} title="Chatbot" />
                            <Divider />
                            <Menu.Item onPress={() => {}} title="Lifeline" />
                          </Menu>
                      </View>
                  </View>
                </Provider>
          </View>
        </View>
        <View style={{marginLeft:'2%', backgroundColor:'white', marginTop:'1%', height:'75vh'}}>
          
            {MainComponent == "starting_with_safety" ? 
                <Text> starting with safety info </Text>
              : 
                <Text> nothing </Text>
            }
          
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
});
