import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children, style }: any) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.screenWrapper}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
  },
  screenWrapper: { flex: 1 },
});
