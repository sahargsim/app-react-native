//import { NavigationContainer } from "@react-navigation/native";
import React from "react";
//import { View } from "react-native";
//import { NetworkProvider } from "react-native-offline";
//import { QueryClient, QueryClientProvider } from "react-query";

//import AppLayout from "../components/AppLayout";
import Navigator from "../navigation/Navigator";
//import FeedScreen from "./FeedScreen";
//import Offline from "../components/Offline";

//const queryClient = new QueryClient();

const RootScreen = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <NetworkProvider>
    //     <AppLayout title="Starships">
    //       {/* <Offline /> */}
    //       <View>

    //       </View>
    //     </AppLayout>
    //   </NetworkProvider>
    // </QueryClientProvider>
    <Navigator />
  );
};

export default RootScreen;
