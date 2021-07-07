import React from 'react';
import { Text, View } from 'react-native';
import AppLayout from './src/components/AppLayout';
import Offline from './src/components/Offline';
import { NetworkProvider } from 'react-native-offline';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <AppLayout title="Starships" >
          <Offline/>
        </AppLayout>
      </NetworkProvider>
    </QueryClientProvider>
  );
};

export default App;