import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AddMedicineButton({ onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" size={40} color={"white"} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#5672f1",
    borderColor: "white",
    // borderWidth: 1,
    borderRadius: 40,
    // bottom: 15,
    height: 60,
    justifyContent: "center",
    width: 60,
    elevation: 5,
  },
});
