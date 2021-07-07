import * as React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View,FlatList } from "react-native";
import { Card,Title } from "react-native-paper";
import { useStarships } from "../hooks/useStarships";
import ThreeDots from '../components/Load';
//import { data } from "../../api/data";
interface ItemProps {
  name:string,model:string,crew:string,hyperdrive_rating:string,cost_in_credits:string
}

const Item = ({name,model,crew,hyperdrive_rating,cost_in_credits }: ItemProps) => (
  <Card >
    <Card.Title title={name}/>
    <Card.Content>
      <Text >{model}</Text>
      <Text >{crew}</Text>
      <Text >{hyperdrive_rating}</Text>
      <Text >{cost_in_credits}</Text>
    </Card.Content>
    <Card.Cover source={{uri:'https://picsum.photos/'}}/>
  </Card>
  
);
const App = () => {
  const{error,isLoading,data} = useStarships();
  const renderItem = ({item}:any) => (
    <Item name={item.name}
        model={item.model}
        crew={item.crew}
        hyperdrive_rating={item.hyperdrive_rating}
        cost_in_credits={item.cost_in_credits}
      />
  );

  if (isLoading) return <Text>isLoading....</Text>;
  if (error) return <Text>Error....</Text>; 
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default App;
