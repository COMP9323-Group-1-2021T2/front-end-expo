import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const Article = ({ article }) => (
  <Card>
    <Card.Cover source={{ uri: article.image }} />
    <Card.Content>
      <Title>{article.title}</Title>
      <Paragraph numberOfLines={3}>{article.description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>View</Button>
    </Card.Actions>
  </Card>
);
