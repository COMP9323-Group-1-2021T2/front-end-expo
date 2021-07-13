import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const Video = ({ video }) => (
  <>
    <Card style={{marginBottom:'5%'}}>
      <Card.Cover source={{ uri: video.image }} />
      <Card.Content>
        <Title>{video.title}</Title>
        <Paragraph numberOfLines={3}>{video.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress = {() => {window.open(video.url, "_blank")}}>View</Button>
      </Card.Actions>
    </Card>
  </>
);
