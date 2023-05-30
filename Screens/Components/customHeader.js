import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Header } from "react-native-elements";

const CHeader = (props) => {
  return (
    <View>
      <Image
        style={StyleSheet.absoluteFill}
        source={{
          uri: props.imLink,
        }}
      />
      <Header
        backgroundColor="transparent"
        centerComponent={{ text: props.name, style: styles.headerText }}
        rightComponent={{ text: "|", style: styles.borderLineText }}
        leftComponent={{ text: "|", style: styles.borderLineText }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  borderLineText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 25,
  },
});
export default CHeader;
