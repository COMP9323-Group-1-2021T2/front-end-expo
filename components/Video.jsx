import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const Video = ({ video }) => (
  <Card>
    <Card.Cover source={{ uri: video.image }} />
    <Card.Content>
      <Title>{video.title}</Title>
      <Paragraph numberOfLines={3}>{video.description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>View</Button>
    </Card.Actions>
  </Card>
);
