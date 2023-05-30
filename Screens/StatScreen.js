import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
  Alert,
  Button,
  TouchableHighlight,
} from "react-native";
import axios from "axios";
import { Switch } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import CHeader from "./Components/customHeader";
import CSwitch from "./Components/customSwitch";

const deviceWidth = Dimensions.get("window").width;
export default class StatScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      countryCode: "",
      state: "",
      data: {},
    };
  }
  componentDidMount() {
    this.getCoviData();
  }

  async getCoviData() {
    const result = await axios
      .get("https://api.covid19api.com/summary")
      .catch((error) => {
        Alert.alert(`${error.message} CoviData`);
      });
    this.setState({
      data: result.data.Global,
    });
  }
  async getGeoData() {
    await axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        var data = response.data;
        if (data.country_code != Object) {
          Alert.alert("Please enable location services");
        } else {
          this.setState({
            countryCode: data.country_code_iso3,
            state: data.region,
          });
        }
      })
      .then(() => {
        Alert.alert(this.state.country_code_iso3);
      })
      .catch((error) => {
        Alert.alert(`${error.message} GeoData`);
      });
  }

  render() {
    return (
      <View>
        <CHeader
          name="Statistics"
          imLink="https://www.denofgeek.com/wp-content/uploads/2021/08/lord-of-the-rings-amazon-valinor-hero.jpg?fit=1200%2C680"
        />
        <View
          style={{
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text>
            <TouchableHighlight onPress={() => Alert.alert("Hello???")}>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#DDDDDD",
                  padding: 10,
                  width: 100,
                  borderRightWidth: 1,
                }}
              >
                <Text>Global</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Alert.alert("Hello???")}>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#DDDDDD",
                  padding: 10,
                  width: 100,
                }}
              >
                <Text>Countries</Text>
              </View>
            </TouchableHighlight>
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={deviceWidth - 20} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginTop: 50,
              alignItems: "center",
            }}
          />
          {/* {Alert.alert(this.state.data.Global.TotalConfirmed)} */}
        </View>
      </View>
    );
  }
}
