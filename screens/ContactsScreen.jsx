import React, { useContext, useEffect }  from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Card, Title, Button, Paragraph } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollBox from "react-responsive-scrollbox";

export const ContactsScreen = () => {

  const contacts = [

      {'category': 'Occupational Health and Safety', 'name': 'SafeWork NSW', 'link': 'https://www.safework.nsw.gov.au/contact-us', 'number': '13 10 50', 'keywords': ['Safety', 'Hazards', 'Risks', 'Procedures', 'Standards', 'Regulations', 'Compliance', 'Escalate query', 'Guide']},
      {'category': '', 'name': 'Fair Work Ombudsman', 'link': 'https://www.fairwork.gov.au/contact-us/call-us', 'number': '13 13 94', 'keywords': ['Underpay', 'Contracts', 'Advisory', 'Business', 'Entitlement', 'Rights', 'Report']},
      {'category': 'Mental health and wellbeing', 'name': 'Black dog institute', 'link': 'https://www.blackdoginstitute.org.au/emergency-help/', 'number': '', 'keywords': ['Emergency', 'Suicide', 'Anxiety', 'Depression', 'Stress', 'Disorder']},
      {'category': 'Physical health and wellbeing', 'name': 'NSW COVID19 line', 'link': 'https://www.health.nsw.gov.au/pages/contact.aspx ', 'number': '1800 020 080', 'keywords': ['COVID19 Symptoms', 'Contact tracing', 'Testing', 'Isolate', 'Social distance', 'Latest news', 'Hotspot', 'Vaccine (eligibility, locations)']},
      {'category': '', 'name': 'Police non-emergency', 'link': 'https://www.afp.gov.au/contact-us', 'number': '131444', 'keywords': ['Non-emergency/immediate Danger', 'Crime', 'Report', 'Cybercrime']},
      {'category': 'Multiple Areas', 'name': 'Emergency help', 'link': 'https://www.triplezero.gov.au/', 'number': '000', 'keywords': ['Emergency Police', 'Ambulance', 'Firefighting', 'Rescue', 'Violence', 'Abuse']},
      {'category': '', 'name': 'Lifeline', 'link': 'https://www.lifeline.org.au/about/contact-us/ ', 'number': `Lifeline Australia | 13 11 14 \nKids Helpline | 1800 55 1800 \nMensLine Australia | 1300 78 99 78`, 'keywords': ['Emergency Suicide', 'Anxiety', 'Depression', 'Stress', 'Disorder', 'Crisis', 'Support', 'Grieve', 'Warning signs', 'Resources']},
      {'category': '', 'name': 'Suicide Call-Back Service', 'link': 'https://www.suicidecallbackservice.org.au/contact-us/ ', 'number': '1300 659 467', 'keywords': ['Emergency', 'Suicide', 'Anxiety', 'Depression', 'Stress', 'Disorder', 'Crisis', 'Support', 'Grieve', 'Warning signs', 'Resources']},
      {'category': '', 'name': 'Beyond Blue', 'link': 'https://www.beyondblue.org.au/about-us/contact-us ', 'number': '1300 22 4636', 'keywords': ['Emergency', 'Suicide', 'Anxiety', 'Depression', 'Stress', 'Disorder', 'Crisis', 'Support', 'Grieve', 'Warning signs', 'Resources']},
      {'category': '', 'name': 'Open Arms – Veterans & Families Counselling', 'link': 'https://www.openarms.gov.au/about/contact-us-feedback ', 'number': '1800 011 046', 'keywords': ['Emergency', 'Suicide', 'Anxiety', 'Depression', 'Stress', 'Disorder', 'Crisis', 'Support', 'Grieve', 'Warning signs', 'Resources', 'PTSD', 'Trauma']},
      {'category': '', 'name': 'Healthdirect', 'link': 'https://www.healthdirect.gov.au/contact-us', 'number': '1800 022 222', 'keywords': ['Symptoms', 'Illness', 'Unwell', 'Pain', 'Advice', 'Diagnose', 'Nurse/Doctor',  'Conditions',  'Procedures']},
      {'category': '', 'name': 'Aus Gov Health', 'link': 'https://www.health.gov.au/about-us/contact-us', 'number': '1800 020 103', 'keywords': ['Conditions', 'Diseases', 'Symptoms', 'Health', 'Physical activity', 'Exercise', 'Immunisation', 'Insurance', 'COVID19 info']},
      {'category': '', 'name': 'NSW State Emergency Service', 'link': 'https://www.ses.nsw.gov.au/about-us/contact-us/', 'number': '132500', 'keywords': ['Search and rescue', 'Damage', 'Natural disasters', 'Flood', 'Bushfire', 'Emergency', ]},
      {'category': '', 'name': 'EAP - Benestar', 'link': 'https://www.benestar.com/contact-us ', 'number': '1300 360 364', 'keywords': ['Incident management', 'Workplace safety/wellness']},
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
                            <Card style={{maxWidth: '600px', width:'100%', marginBottom:'2%', padding:'10px'}}>
                                <Card.Content>
                                    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                        <View style={{width:"50%"}}>
                                            <Title>{contact.name}</Title>
                                            {contact.number.length > 0 ? 
                                                <View style={{display: 'flex', flexDirection: 'row', width:'90%', justifyContent:'end', alignItems:'baseline'}}>
                                                    <Icon name="phone" size={20} color="#d64204" />
                                                    <Paragraph style={{paddingTop:'1vh', paddingBottom:'1vh', marginLeft:'10%'}} numberOfLines={5}>{contact.number}</Paragraph>
                                                </View>
                                                : 
                                                ''
                                            }
                                        </View>
                                        <View style={{marginLeft:'5%', width:"45%"}}>
                                            <Image source={require(`../assets/${i}.PNG`)} style={{ width: '110px', height: '120px', marginBottom:'10px' }}/>
                                        </View>
                                    </View>
                                    
                                    <View style={{display:"flex", flexDirection:'row', flexWrap:'wrap'}}>
                                        {contact.keywords.map((keyword) => (
                                            <Text style={{backgroundColor:'#d64204', color:'white', padding:'1%', margin:"1%"}}> {keyword} </Text>
                                        ))}
                                    </View>
                                
                                </Card.Content>
                                <Card.Actions>
                                    <Button onPress = {() => {window.open(contact.link, "_blank")}}>View website</Button>
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
});
