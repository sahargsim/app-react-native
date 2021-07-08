import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
} from "react-native";
import { Card } from "react-native-paper";

import { useStarships } from "../hooks/useStarships";
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
  <Card>
    <Card.Title title={name} />
    <Card.Content>
      <Text>{model}</Text>
      <Text>{crew}</Text>
      <Text>{hyperdrive_rating}</Text>
      <Text>{cost_in_credits}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/" }} />
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

  if (isLoading) return <Text>isLoading....</Text>;
  if (error) return <Text>Error....</Text>;

  return (
    <SafeAreaView style={styles.Container}>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
