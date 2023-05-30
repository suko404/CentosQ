import React from "react";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import * as Linking from "expo-linking";

const CCard = (props) => {
  return (
    <Card style={props.stylesheet}>
      <Card.Cover source={{ uri: props.uri }} />
      <Card.Actions>
        <Button onPress={() => Linking.openURL(props.link)}>
          {props.buttonName}
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default CCard;
