import * as React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";

import { useStarships } from "../hooks/useStarships";
import { theme } from "../theme/theme";
interface ItemProps {
  name: string;
  model: string;
  crew: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
}

interface ItemContainerProps {
  item: ItemProps;
}

const Item = ({
  name,
  model,
  crew,
  hyperdrive_rating,
  cost_in_credits,
}: ItemProps) => (
  <Card style={styles.cardItem}>
    <Card.Title title={name} />
    <Card.Cover source={{ uri: "https://picsum.photos/800" }} />
    <Card.Content>
      <Text style={styles.cardItemText}>{model}</Text>
      <Text style={styles.cardItemText}>{crew}</Text>
      <Text style={styles.cardItemText}>{hyperdrive_rating}</Text>
      <Text style={styles.cardItemText}>{cost_in_credits}</Text>
    </Card.Content>
  </Card>
);
const App = () => {
  const { error, isLoading, data } = useStarships();
  const renderItem = ({ item }: ItemContainerProps) => (
    <Item
      name={item.name}
      model={item.model}
      crew={item.crew}
      hyperdrive_rating={item.hyperdrive_rating}
      cost_in_credits={item.cost_in_credits}
    />
  );

  if (isLoading) return <Text style={styles.isLoading}>isLoading....</Text>;
  if (error) return <Text>Error....</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  isLoading: {
    marginTop: 128,
    color: theme.colors.text,
    fontSize: 36,
    textAlign: "center",
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardItem: {
    margin: theme.spacing.m,
  },
  cardItemText: {
    textAlign: "center",
    color: theme.colors.textInput,
  },
});

export default App;
