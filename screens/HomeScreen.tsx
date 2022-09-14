import React, { useState, useEffect } from "react";

import { View, FlatList, TouchableHighlight, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { ActivityIndicator, Card, FAB, Title } from "react-native-paper";
import { List, Text, Button, withTheme } from "react-native-paper";

import styled from "styled-components/native";
import colors from "../components/colors";

const Wrapper = styled(SafeAreaView)`
  padding: 10px;
`;

const HomeScreen = ({ navigation }: any) => {
  const [medicines, setMedicines] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadMedicines = async () => {
    setLoading(true);

    await fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((medicines) => setMedicines(medicines))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadMedicines();
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate("MedicineDetail", {
          medicine: item,
        })
      }
      underlayColor={"#cecbc5"}
      style={{ elevation: 1 }}
    >
      <Card theme={{ roundness: 5 }}>
        <Card.Content>
          <List.Item
            title={item.title}
            description={item.body}
            left={(props) => <List.Icon {...props} icon="pill" />}
            right={(props) => <List.Icon {...props} icon="bell" />}
          />
        </Card.Content>
      </Card>
    </TouchableHighlight>
  );

  const renderFooter = () => {
    return (
      <View style={{ padding: 5 }}>
        <Text>Load more...</Text>
      </View>
    );
  };

  return (
    <Wrapper>
      {error && (
        <>
          <Text style={{ color: "red" }}>Could not retrieve the listings.</Text>
          <Button onPress={loadMedicines}>Retry</Button>
        </>
      )}
      <Title>Welcome, Parent</Title>
      <FAB
        animated={true}
        color={colors.white}
        icon="plus"
        style={{
          position: "absolute",
          zIndex: 9999,
          margin: 50,
          right: 0,
          bottom: 0,
          width: 50,
          height: 50,

          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `${colors.secondary}`,
        }}
        onPress={() => navigation.navigate("AddMedicine")}
      />

      <FlatList
        data={medicines}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        refreshing={loading}
        onRefresh={() => loadMedicines()}
        ListFooterComponent={renderFooter}
      />
    </Wrapper>
  );
};

export default withTheme(HomeScreen);
