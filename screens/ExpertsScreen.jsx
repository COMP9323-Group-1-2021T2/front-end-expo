import React, { useCallback }  from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Card, Title, Button, Paragraph } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollBox from "react-responsive-scrollbox";

import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('screen').width;

export const ExpertsScreen = () => {
    const [windowWidth, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

  const experts = [

      {'email': 'a.tillman@unsw.edu.au', 'name': 'Alexandra Tillman', 'link': 'https://www.linkedin.com/in/alexandra-tillman-7a2b534a/', 'number': '0414 398 808', 'description': "Experienced Health Safety Environment Officer with a demonstrated history of working in the Defence and education sectors. Skilled in ISO 14001, Emergency Management, Workplace Safety, Environmental Awareness, and Safety Management Systems. Strong operations professional graduated from University of Newcastle."},
      {'email': 'm.mclaws@unsw.edu.au', 'name': 'Marylouise McLaws', 'link': 'https://www.linkedin.com/in/marylouise-mclaws-707a8533/', 'number': '(02) 9385 8765', 'description': "I am an epidemiologist in patient safety associated with infection prevention and outbreak with expertise in surveillance. I am currently (February 2020 - ) a member of the WHO Health Emergencies Program Experts Advisory Panel for Infection Prevention and Control Preparedness, Readiness and Response to COVID-19"},
      {'email': 's.reppermund@unsw.edu.au', 'name': 'Simone Reppermund', 'link': 'https://www.linkedin.com/in/marylouise-mclaws-707a8533/', 'number': '+61 2 9931 9154', 'description': "I have a PhD in Psychology (2007, Max Planck Institute of Psychiatry and Ludwig Maximilian University Munich, Germany). I am a UNSW Scientia Fellow within the School of Psychiatry. My research interests are in the field of mental health, in particular depression in old age, intellectual disability, healthy ageing, as well as cognitive decline."},
      {'email': 't.clay@unsw.edu.au', 'name': 'Theresa McDonnell', 'link': 'https://www.linkedin.com/in/marylouise-mclaws-707a8533/', 'number': '02 9065 6349', 'description': "Leader in Work Health & Safety and Injury Management (IM) delivering sustainable improvements in large complex organisations.Track record in designing and implementing fit for purpose WHS and IM systems. Broad technical knowledge of WHS & IM legislation.Leading teams through significant change while maintaining a high level of service."},
]


  return (
    <View>
      <NewNavbar />
        <ScrollBox style={{height:'80vh', width:'80vw', margin:'auto', marginTop:'5vh'}}> 
            <View style={styles.container}>

                {experts.map((expert, i) => 
                    (
                        <> 
                            
                            <Card style={{maxWidth: '600px', width:'100%', marginBottom:'2%'}}>
                                <Card.Content>
                                    <View style={[styles.cardContent, (screenWidth < 600 || windowWidth < 600) ? styles.flexColumn : styles.flexRow]}>
                                        <View style={[(screenWidth < 600 || windowWidth < 600) ? {width:"30vw", height:"30vh"} : {flex:"1"}]}>
                                            <Image source={require(`../assets/experts/${i}.PNG`)} resizeMode = "contain" style={{ width: '100%', height:'100%' }}/>
                                        </View>
                                        <View style={[(screenWidth < 600 || windowWidth < 600) ? {width:"100%", height:"100%"} : {flex:"2"}]}>
                                            <Title>{expert.name}</Title>
                                            {expert.number.length > 0 ? 
                                                <>
                                                    <View style={{display: 'flex', flexDirection: 'row', width:'90%', justifyContent:'end', alignItems:'baseline'}}>
                                                        <Icon name="phone" size={20} color="#d64204" />
                                                        <Paragraph style={{paddingTop:'1vh', paddingBottom:'1vh', marginLeft:'5%'}} numberOfLines={8}>{expert.number}</Paragraph>
                                                    </View>

                                                    <View style={{display: 'flex', flexDirection: 'row', width:'90%', justifyContent:'end', alignItems:'baseline'}}>
                                                        <Icon name="globe" size={20} color="#d64204" />
                                                        <Button onPress = {() => {window.open(expert.link, "_blank")}} style={{margin:'0px'}}>Linkedin</Button>
                                                    </View>
                                                    {expert.email.length > 0 ? 
                                                        <View style={{display: 'flex', flexDirection: 'row', width:'90%', justifyContent:'end', alignItems:'baseline'}}>
                                                            <Icon name="envelope-o" size={20} color="#d64204" />
                                                            <Text style={{display: "flex", flexWrap: "wrap", marginLeft:'3%'}}> {expert.email} </Text>
                                                        </View>
                                                    : ''}
                                                </>
                                                
                                                : 
                                                ''
                                            }
                                        </View>
                                    </View>
                                    
                                    <View style={{display:"flex", flexDirection:'row', flexWrap:'wrap', marginTop:'5%'}}>
                                        <Text> {expert.description} </Text>
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
