import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

import colors from "../components/colors";
import Medicine from "../components/Medicine";
import BodyText from "../components/text/BodyText";
import SubTitle from "../components/text/SubTitle";
import Title from "../components/text/Title";
// import MedicineCard from "../components/MedicineCard";

const MedicineDetailScreen = ({ route }: any) => {
  const medicine = route.params;

  console.log("Medicine Details: ", medicine);

  //   const medicine = {
  //     title: "Paracetamol",
  //     dosage: "Take 1 | after meals",
  //     description: "medicine details blalallalblaa",
  //   };

  //   const { title, body, userId, id } = medicine;

  const MedicineCard = styled(Card)`
    align-items: center;
    background-color: ${colors.background};
    flex-direction: row;
    margin: 5px;
  `;

  return (
    <View>
      <MedicineCard>
        <MedicineCard.Content>
          <Text style={styles.title}>{route.params.medicine.title}</Text>
          <SubTitle style={styles.subTitle}>
            {route.params.medicine.userId}
          </SubTitle>
          <Text style={{ color: "red" }}>
            {route.params.medicine.body} you will be a pussycat yourself one
            day.
          </Text>
        </MedicineCard.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </MedicineCard>
    </View>
  );
};
export default MedicineDetailScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  description: { marginTop: 15, padding: 5 },
  image: {
    height: 300,
    width: "100%",
  },
  subTitle: { color: colors.secondary, fontWeight: "bold" },
  title: { fontWeight: "bold", fontSize: 20, marginBottom: 7 },
});
