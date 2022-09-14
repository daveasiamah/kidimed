import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AddMedicineButton from "../components/buttons/AddMedicineButton";
import AddMedicine from "../screens/AddMedicine";
import ReminderScreen from "../screens/ReminderScreen";
import HomeStackNavigator from "./HomeStackNavigator";

const Tab = createBottomTabNavigator();

function RootTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="HomeTabs"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Reminders"
        component={ReminderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootTabs;
