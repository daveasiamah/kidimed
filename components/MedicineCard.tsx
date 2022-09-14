import React from "react";
import {
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../components/colors";
import BodyText from "../components/text/BodyText";
import Title from "./text/Title";
import SubTitle from "./text/SubTitle";

export default function MedicineCard({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderLeftActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.background} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Title style={styles.title}>{title}</Title>
            {subTitle && (
              <SubTitle style={styles.subTitle}>{subTitle}</SubTitle>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: { color: colors.gray },
  title: {
    fontWeight: "900",
    color: colors.gray,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});
