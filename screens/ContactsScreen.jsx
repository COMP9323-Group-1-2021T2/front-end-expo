import React, { useCallback }  from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, Image } from "react-native";
import { Text, Card, Title, Button, Paragraph } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollBox from "react-responsive-scrollbox";

import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const windowWidth = Dimensions.get('window').width;

export const ContactsScreen = () => {
  const addClassToShowWatson = () => {
    const body = document.body;
    body.classList.add("show-watson");
    body.classList.remove("hide-watson");

  };

  const removeClassToShowWatson = () => {
    const body = document.body;
    body.classList.remove("show-watson");
    body.classList.add("hide-watson");
  };


  useFocusEffect(() => {
    addClassToShowWatson()
    return () => removeClassToShowWatson();
  });

  const contacts = [

      {'email': 'contact@safework.nsw.gov.au', 'category': 'Occupational Health and Safety', 'name': 'SafeWork NSW', 'link': 'https://www.safework.nsw.gov.au/contact-us', 'number': '13 10 50', 'keywords': ['Safety', 'Hazards', 'Risks', 'Procedures', 'Standards', 'Regulations', 'Compliance', 'Escalate query', 'Guide']},
      {'email': 'communications@fwo.gov.au', 'category': '', 'name': 'Fair Work Ombudsman', 'link': 'https://www.fairwork.gov.au/contact-us/call-us', 'number': '13 13 94', 'keywords': ['Underpay', 'Contracts', 'Advisory', 'Business', 'Entitlement', 'Rights', 'Report']},
      {'email': 'blackdog@blackdog.org.au', 'category': 'Mental health and wellbeing', 'name': 'Black dog institute', 'link': 'https://www.blackdoginstitute.org.au/emergency-help/', 'number': '', 'keywords': ['Emergency', 'Suicide', 'Anxiety', 'Depression', 'Stress', 'Disorder']},
      {'email': 'info@service.nsw.gov.au', 'category': 'Physical health and wellbeing', 'name': 'NSW COVID19 line', 'link': 'https://www.health.nsw.gov.au/pages/contact.aspx ', 'number': '1800 020 080', 'keywords': ['COVID19 Symptoms', 'Contact tracing', 'Testing', 'Isolate', 'Social distance', 'Latest news', 'Hotspot', 'Vaccine (eligibility, locations)']},
      {'email': '', 'category': '', 'name': 'Police non-emergency', 'link': 'https://www.afp.gov.au/contact-us', 'number': '131444', 'keywords': ['Non-emergency/immediate Danger', 'Crime', 'Report', 'Cybercrime']},
      {'email': '', 'category': 'Multiple Areas', 'name': 'Emergency help', 'link': 'https://www.triplezero.gov.au/', 'number': '000', 'keywords': ['Emergency Police', 'Ambulance', 'Firefighting', 'Rescue', 'Violence', 'Abuse']},
      {'email': '', 'category': '', 'name': 'Lifeline', 'link': 'https://www.lifeline.org.au/about/contact-us/ ', 'number': `Lifeline Australia | 13 11 14 \nKids Helpline | 1800 55 1800 \nMensLine Australia | 1300 78 99 78`, 'keywords': ['Emergency Suicide', 'Anxiety', 'Depression', 'Stress', 'Disorder', 'Crisis', 'Support', 'Grieve', 'Warning signs', 'Resources']},
      {'email': '', 'category': '', 'name': 'Suicide Call-Back Service', 'link': 'https://www.suicidecallbackservice.org.au/contact-us/ ', 'number': '1300 659 467', 'keywords': ['Emergency', 'Suicide', 'Anxiety', 'Depression', 'Stress', 'Disorder', 'Crisis', 'Support', 'Grieve', 'Warning signs', 'Resources']},
      {'email': '', 'category': '', 'name': 'Beyond Blue', 'link': 'https://www.beyondblue.org.au/about-us/contact-us ', 'number': '1300 22 4636', 'keywords': ['Emergency', 'Suicide', 'Anxiety', 'Depression', 'Stress', 'Disorder', 'Crisis', 'Support', 'Grieve', 'Warning signs', 'Resources']},
      {'email': 'openarms.clientassist@dva.gov.au', 'category': '', 'name': 'Open Arms – Veterans & Families Counselling', 'link': 'https://www.openarms.gov.au/about/contact-us-feedback ', 'number': '1800 011 046', 'keywords': ['Emergency', 'Suicide', 'Anxiety', 'Depression', 'Stress', 'Disorder', 'Crisis', 'Support', 'Grieve', 'Warning signs', 'Resources', 'PTSD', 'Trauma']},
      {'email': 'contact@safework.nsw.gov.au', 'category': '', 'name': 'Healthdirect', 'link': 'https://www.healthdirect.gov.au/contact-us', 'number': '1800 022 222', 'keywords': ['Symptoms', 'Illness', 'Unwell', 'Pain', 'Advice', 'Diagnose', 'Nurse/Doctor',  'Conditions',  'Procedures']},
      {'email': 'enquiries@health.gov.au', 'category': '', 'name': 'Aus Gov Health', 'link': 'https://www.health.gov.au/about-us/contact-us', 'number': '1800 020 103', 'keywords': ['Conditions', 'Diseases', 'Symptoms', 'Health', 'Physical activity', 'Exercise', 'Immunisation', 'Insurance', 'COVID19 info']},
      {'email': '', 'category': '', 'name': 'NSW State Emergency Service', 'link': 'https://www.ses.nsw.gov.au/about-us/contact-us/', 'number': '132500', 'keywords': ['Search and rescue', 'Damage', 'Natural disasters', 'Flood', 'Bushfire', 'Emergency', ]},
      {'email': 'info@benestar.com', 'category': '', 'name': 'EAP - Benestar', 'link': 'https://www.benestar.com/contact-us ', 'number': '1300 360 364', 'keywords': ['Incident management', 'Workplace safety/wellness']},
  ]


  return (
    <View>
      <NewNavbar />
        <ScrollBox style={{height:'80vh', width:'80vw', margin:'auto', marginTop:'5vh'}}> 
            <View style={styles.container}>

                {contacts.map((contact, i) => 
                    (
                        <> 
                            {contact.category.length > 0 ? <Text style={{padding:'1vw', fontSize: '18px', fontWeight:'bold'}}> {contact.category} </Text> : ''}
                            <Card style={{maxWidth: '600px', width:'100%', marginBottom:'2%'}}>
                                <Card.Content>
                                    <View style={[styles.cardContent, screenWidth, windowWidth < 600 ? styles.flexColumn : styles.flexRow]}>
                                        <View style={{width:"30%", height:"10vh"}}>
                                            <Image source={require(`../assets/${i}.PNG`)} resizeMode = "contain" style={{ maxWidth: '110px', maxHeight: '110px',  width: '90%', height:'100%', marginBottom:'10px' }}/>
                                        </View>
                                        <View style={{width:"70%"}}>
                                            <Title>{contact.name}</Title>
                                            {contact.number.length > 0 ? 
                                                <>
                                                    <View style={{display: 'flex', flexDirection: 'row', width:'90%', justifyContent:'end', alignItems:'baseline'}}>
                                                        <Icon name="phone" size={20} color="#d64204" />
                                                        <Paragraph style={{paddingTop:'1vh', paddingBottom:'1vh', marginLeft:'5%'}} numberOfLines={8}>{contact.number}</Paragraph>
                                                    </View>

                                                    <View style={{display: 'flex', flexDirection: 'row', width:'90%', justifyContent:'end', alignItems:'baseline'}}>
                                                        <Icon name="globe" size={20} color="#d64204" />
                                                        <Button onPress = {() => {window.open(contact.link, "_blank")}} style={{margin:'0px'}}>Website</Button>
                                                    </View>
                                                    {contact.email.length > 0 ? 
                                                        <View style={{display: 'flex', flexDirection: 'row', width:'90%', justifyContent:'end', alignItems:'baseline'}}>
                                                            <Icon name="envelope-o" size={20} color="#d64204" />
                                                            <Text style={{display: "flex", flexWrap: "wrap", marginLeft:'3%'}}> {contact.email} </Text>
                                                        </View>
                                                    : ''}
                                                </>
                                                
                                                : 
                                                ''
                                            }
                                        </View>
                                    </View>
                                    
                                    <View style={{display:"flex", flexDirection:'row', flexWrap:'wrap', marginTop:'5%'}}>
                                        {contact.keywords.map((keyword) => (
                                            <Text style={{backgroundColor:'#d64204', color:'white', padding:'1%', margin:"1%"}}> {keyword} </Text>
                                        ))}
                                    </View>
                                
                                </Card.Content>
                                <Card.Actions>
                                </Card.Actions>
                            </Card>
                        </>
                    ))
                }

            </View>
        </ScrollBox>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: '20vh'
      },

    cardContent: {
        display:'flex', 
        justifyContent:'flex-start',
    },

    flexRow: {
        flexDirection:'row'
    },

    flexColumn: {
        flexDirection:'column'
    }

});
