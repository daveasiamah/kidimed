import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MedicineDetail from "../screens/MedicineDetail";
import HomeScreen from "../screens/HomeScreen";
import AddMedicine from "../screens/AddMedicine";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddMedicine" component={AddMedicine} />
      <Stack.Screen name="MedicineDetail" component={MedicineDetail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
