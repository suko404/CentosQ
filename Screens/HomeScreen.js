import React from "react";
import axios from "axios";
import {
  Alert,
  Text,
  View,
  Dimensions,
  ImageBackground,
  FlatList,
} from "react-native";
import CHeader from "./Components/customHeader";
import CCard from "./Components/customCard";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      cardTitles: [
        {
          RefLink:
            "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",
          ButtonName: "Read More",
          ButtonLink:
            "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        },
        {
          ButtonName: "Read More",
          ButtonLink:
            "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk",
        },
        {
          ButtonName: "Read More",
          ButtonLink: "https://picsum.photos/700/700?image=10",
        },
      ],
    };
  }

  render() {
    return (
      <View>
        {/* <ImageBackground style = {{flex:1}} source = {{uri:}}/> */}
        <CHeader
          name="Covid-19 Info"
          imLink="https://images.unsplash.com/photo-1535025075092-5a1cf795130b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
        />
        <View style={{ paddingBottom: "20%" }}>
          <FlatList
            data={this.state.cardTitles}
            renderItem={({ item }) => (
              <CCard
                link={item.RefLink}
                uri={item.ButtonLink}
                buttonName={item.ButtonName}
                stylesheet={{
                  marginTop: 10,
                  width: "93%",
                  alignSelf: "center",
                }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
