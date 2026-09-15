import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// images for the buttons
import map from "../images/map.png";
import list from "../images/list.png";
import add from "../images/add.png";

// screens
import MapScreen from "./screens/map";
import ListScreen from "./screens/list";
import AddScreen from "./screens/add";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Map"}
        screenOptions={{
          tabBarActiveBackgroundColor: "#3ac160",
          tabBarInactiveBackgroundColor: "#32a855",
          tabBarLabelStyle: {
            display: "none", // hide button labels
          },
          tabBarStyle: {
            backgroundColor: "#000000", //bottom bar backgroundcolor
            height: 70,
          },
          headerStyle: {
            backgroundColor: "#32a855", // top bar backgroundcolor
          },
          headerTitleStyle: {
            color: "#FFFFFF", // text color of the title in the top bar
          },
        }}
      >
        <Tab.Screen
          name={"List"}
          component={ListScreen}
          options={{
            tabBarIcon: () => (
              <Image source={list} style={{ width: 40, height: 40 }} />
            ),
          }}
        />
        <Tab.Screen
          name={"Map"}
          component={MapScreen}
          options={{
            tabBarIcon: () => (
              <Image source={map} style={{ width: 40, height: 40 }} />
            ),
          }}
        />
        <Tab.Screen
          name={"Add/Update"}
          component={AddScreen}
          options={{
            tabBarIcon: () => (
              <Image source={add} style={{ width: 40, height: 40 }} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
