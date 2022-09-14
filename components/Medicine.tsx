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
import { Title } from "react-native-paper";
import SubTitle from "./text/SubTitle";

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.gray} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Title numberOfLines={1} style={styles.title}>
              {title}
            </Title>
            {subTitle && (
              <SubTitle numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </SubTitle>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={colors.gray}
          />
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
  subTitle: { color: colors.subTitleGray },
  title: {
    fontWeight: "900",
    color: colors.titleGray,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});
