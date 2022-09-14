import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  GestureResponderEvent,
} from "react-native";

import { default as colors } from "../../components/colors";

interface AppButtonProps {
  title: string;
  onPress?: undefined;
  style?: object;
  color?: string;
}

const AppButton = ({
  title,
  color = "primary",
  onPress,
  style,
}: AppButtonProps) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: colors[color] }, style]}
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: "100%",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    elevation: 5,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
