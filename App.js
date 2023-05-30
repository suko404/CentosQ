import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./Screens/HomeScreen";
import StatScreen from "./Screens/StatScreen";

const TABS = createMaterialBottomTabNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

function TabNavigation() {
  return (
    <TABS.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: "tomato" }}
      shifting={true}
    >
      <TABS.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <TABS.Screen
        name="Graphs"
        component={StatScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chart-scatter-plot-hexbin"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </TABS.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
