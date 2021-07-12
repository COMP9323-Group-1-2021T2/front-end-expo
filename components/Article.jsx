import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const Article = ({ article }) => (
  <>
    <Card style={{marginBottom:'5%'}}>
      <Card.Cover source={{ uri: article.image }} />
      <Card.Content>
        <Title>{article.title}</Title>
        <Paragraph numberOfLines={3}>{article.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress = {() => {window.open(article.url, "_blank")}}>View</Button>
      </Card.Actions>
    </Card>
  </>
);
