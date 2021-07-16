import React, { useContext, useEffect }  from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Title, Button, Paragraph } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import ScrollBox from "react-responsive-scrollbox";

export const ContactsScreen = () => {

  const contacts = [

      {'category': 'Occupational Health and Safety', 'name': 'SafeWork NSW', 'link': 'https://www.safework.nsw.gov.au/contact-us', 'number': '13 10 50'},
      {'category': '', 'name': 'Fair Work Ombudsman', 'link': 'https://www.fairwork.gov.au/contact-us/call-us', 'number': '13 13 94'},
      {'category': 'Mental health and wellbeing', 'name': 'Black dog institute', 'link': 'https://www.blackdoginstitute.org.au/emergency-help/', 'number': ''},
      {'category': 'Physical health and wellbeing', 'name': 'NSW COVID19 line', 'link': 'https://www.health.nsw.gov.au/pages/contact.aspx ', 'number': '1800 020 080'},
      {'category': '', 'name': 'Police non-emergency', 'link': 'https://www.afp.gov.au/contact-us', 'number': '131444'},
      {'category': 'Multiple Areas', 'name': 'Emergency help', 'link': 'https://www.triplezero.gov.au/', 'number': '000'},
      {'category': '', 'name': 'Lifeline', 'link': 'https://www.lifeline.org.au/about/contact-us/ ', 'number': `If you need support call one of the following numbers: \n ● Lifeline Australia | 13 11 14 \n ● Kids Helpline | 1800 55 1800 \n ● MensLine Australia | 1300 78 99 78`},
      {'category': '', 'name': 'Suicide Call-Back Service', 'link': 'https://www.suicidecallbackservice.org.au/contact-us/ ', 'number': '1300 659 467'},
      {'category': '', 'name': 'Beyond Blue', 'link': 'https://www.beyondblue.org.au/about-us/contact-us ', 'number': '1300 22 4636'},
      {'category': '', 'name': 'Open Arms – Veterans & Families Counselling', 'link': 'https://www.openarms.gov.au/about/contact-us-feedback ', 'number': '1800 011 046'},
      {'category': '', 'name': 'Healthdirect', 'link': 'https://www.healthdirect.gov.au/contact-us', 'number': '1800 022 222'},
      {'category': '', 'name': 'Aus Gov Health', 'link': 'https://www.health.gov.au/about-us/contact-us', 'number': '1800 020 103'},
      {'category': '', 'name': 'NSW State Emergency Service', 'link': 'https://www.ses.nsw.gov.au/about-us/contact-us/', 'number': '132500'},
      {'category': '', 'name': 'EAP - Benestar', 'link': 'https://www.benestar.com/contact-us ', 'number': '1300 360 364'},
  ]

  return (
    <View>
      <NewNavbar />
        <ScrollBox style={{height:'80vh', width:'80vw', margin:'auto', marginTop:'5vh'}}> 
            <View style={styles.container}>

                {contacts.map((contact, i) => 
                    (
                        <> 
                            {contact.category.length > 0 ? <Text style={{padding:'1vw', fontSize: '20px', fontWeight:'bold'}}> {contact.category} </Text> : ''}
                            <Card style={{width:'400px', marginBottom:'2%'}}>
                                <Card.Content>
                                    <Title>{contact.name}</Title>
                                    {contact.number.length > 0 ? <Paragraph style={{paddingTop:'1vh', paddingBottom:'1vh'}} numberOfLines={5}>{contact.number}</Paragraph> : ''}
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
