import React from "react";
import { NetworkProvider } from "react-native-offline";
import { QueryClient, QueryClientProvider } from "react-query";

import AppLayout from "../components/AppLayout";
//import Offline from "../components/Offline";

const queryClient = new QueryClient();

const RootScreen = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <AppLayout title="Starships">{/* <Offline /> */}</AppLayout>
      </NetworkProvider>
    </QueryClientProvider>
  );
};

export default RootScreen;
