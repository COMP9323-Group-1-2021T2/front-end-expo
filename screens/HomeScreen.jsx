import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import { isMobileScreen } from "../core/screen";
import ScrollBox from "react-responsive-scrollbox";


export const HomeScreen = ({ navigation }) => {
  const isMobile = isMobileScreen();

  return (
    <View>
      <NewNavbar />
      <ScrollBox style={{height:'90vh', width:'95vw', margin:'auto'}}> 
          <View style={{paddingBottom:'20vh'}}>
            <View style={styles.contentContainer}>
              <View syle={{display:'flex', flexDirection:'column'}}>
                  <View style={[isMobile ? {flexDirection:'column'} : {flexDirection:'row'}, {display:'flex'}]}>

                    <View style={[isMobile ? styles.mobileHomeCard: {height:'330px', padding:'1%'}, styles.homeCard]}>
                      <Text style={[isMobile ? {fontSize: '5vw'} : { fontSize: '2vw'}, {color:'rgb(214, 66, 4)', fontWeight:'500'}]}> Your Wellbeing {'\n'} Starts Here</Text>
                      <br/>
                      <Text style={{textAlign:'left'}}> myWellbeing connects you to resources, support, and service providers, to support your OH&S, mental, and physical health. You can start by exploring the resources below or use our chatbot to connect with services.</Text>
                    </View>

                    <View style={[isMobile ? styles.mobileHomeCard: {height:'330px', padding:'1%'}, {width:'fit-content', backgroundColor:'#d82138', flex:"1"}]}>
                      <Text style={[isMobile ? {fontSize: '3vw'} : { fontSize: '1vw'}, {color:'white', fontWeight:'500'}, {width:"50%", borderBottom:'2px solid white'}]}> Emergency </Text>
                      <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'3%', height:'80%'}}>
                        <Text style={[isMobile ? {fontSize: '4vw'} : { fontSize: '1.3vw'}, {color:'white', fontWeight:'500', marginBottom:'5%'}]}> Coronavirus disease (COVID-19) pandemic</Text>
                        <Button style={{backgroundColor:'white', color: '#d82138'}}> All info here </Button>
                      </View>
                    </View>
                    <View style={[isMobile ? {display:'none', marginBottom:'5%'} : {height:'330px'}, {width:'fit-content', flex:"1", marginLeft:'2%'}]}>
                      <iframe style={{width:'100%', height:'330px'}} src="https://www.youtube.com/embed/outPlDO8q_o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </View>
                  </View>

                  <Text style={[isMobile ? {fontSize: '5vw', marginTop:'5%', marginBottom:'5%'} : { fontSize: '2vw', marginTop:'3%', marginBottom:'5%'}, {color:'rgb(214, 66, 4)', fontWeight:'500', textAlign:'center'}]}> Start Exploring Resources </Text>

                  <View style={[isMobile ? {flexDirection:'column'} : {flexDirection:'row'}, {display:'flex'}]}>

                    <View style={[isMobile ? styles.mobileHomeCard: {height:'330px',  padding:'1%'}, styles.homeCard]}>
                      <Text style={[isMobile ? {fontSize: '3vw'} : { fontSize: '1.5vw'}, {color:'rgb(214, 66, 4)', fontWeight:'500', flex:'1'}]}> Occupational Health and Safety </Text>
                      <br/>
                      <Text style={{textAlign:'left', height:'fit-content', flex:'2'}}> Work health and safety (WHS) – sometimes called occupational health and safety (OH&S) – involves the management of risks to the health and safety of everyone in your workplace. This includes the health and safety of anyone who does work for you as well as your customers, visitors and suppliers.
                      </Text>
                      <View style={[isMobile ? {marginTop:'5%'} : styles.findOutMoreContainer]}> 
                        <Button style={styles.findOutMore} labelStyle={{color:'white'}} onPress={() => {navigation.navigate("Info", {categoryId: "ohs_starting_with_safety"})}}> Find out more </Button>
                      </View>
                    </View>

                    <View style={[isMobile ? styles.mobileHomeCard: {height:'330px',  padding:'1%'}, styles.homeCard]}>
                      <Text style={[isMobile ? {fontSize: '3vw'} : { fontSize: '1.5vw'}, {color:'rgb(214, 66, 4)', fontWeight:'500', flex:'1'}]}> Mental Health </Text>
                      <br/>
                      <Text style={{textAlign:'left', height:'fit-content', flex:'2'}}> Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.
                      </Text>
                      <View style={[isMobile ? {marginTop:'5%'} : styles.findOutMoreContainer]}> 
                        <Button style={styles.findOutMore} labelStyle={{color:'white'}} onPress={() => {navigation.navigate("Info", {categoryId: "mental_wellbeing"})}}> Find out more </Button>
                      </View>
                    </View>

                    <View style={[isMobile ? styles.mobileHomeCard: {height:'330px',  padding:'1%'}, styles.homeCard]}>
                      <Text style={[isMobile ? {fontSize: '3vw'} : { fontSize: '1.5vw'}, {color:'rgb(214, 66, 4)', fontWeight:'500', flex:'1'}]}> Physical Health </Text>
                      <br/>
                      <Text style={{textAlign:'left', height:'fit-content', flex:'2'}}> A balanced diet, proper sleep, and cutting down unhealthy habits such as smoking, alcohol, and drugs are some of the key physical health factors that can promote mental wellbeing. Some of the things that can affect mental wellbeing are stress, working too much, and being too inactive.
                      </Text>
                      <View style={[isMobile ? {marginTop:'5%'} : styles.findOutMoreContainer]}> 
                        <Button style={styles.findOutMore} labelStyle={{color:'white'}} onPress={() => {navigation.navigate("Info", {categoryId: "physical_being_healthy"})}}> Find out more </Button>
                      </View>
                    </View>

                    <View style={[isMobile ? styles.mobileHomeCard: {height:'330px',  padding:'1%'}, styles.homeCard]}>
                      <Text style={[isMobile ? {fontSize: '3vw'} : { fontSize: '1.5vw'}, {color:'rgb(214, 66, 4)', fontWeight:'500', flex:'1'}]}> Get Help Now </Text>
                      <br/>
                      <Text style={{textAlign:'left', height:'fit-content', flex:'2'}}> In an emergency, call 000 immediately. If the situation is urgent and you’re concerned you, or someone else, is in immediate danger do not leave the person alone, unless you are concerned for your own safety.
                      </Text>
                      <View style={[isMobile ? {marginTop:'5%'} : styles.findOutMoreContainer]}> 
                        <Button style={styles.findOutMore} labelStyle={{color:'white'}} onPress={() => {window.open("https://www.triplezero.gov.au/")}}> Find out more </Button>
                      </View>
                    </View>

                  </View>

              </View>
            </View>
          </View>
        </ScrollBox>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    margin: 'auto',
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:'95%'
  },
  findOutMore: {
    backgroundColor:'#D64204', 
    width:'fit-content',
    alignSelf:'center'
  },
  findOutMoreContainer: {
    flex:'1.7',
    justifyContent: 'center',
    
  },
  mobileHomeCard: {
    display:'flex',
    flexDirection:'column',
    height:'fit-content', 
    marginBottom:'5%',
    padding:"5%",
  },

  homeCard: {
    width:'fit-content', 
    backgroundColor:'white', 
    flex:"1", 
    marginRight:'2%', 
    borderRadius:'10px'
  }

});
