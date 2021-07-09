import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Navigator from "../navigation/Navigator";

const queryClient = new QueryClient();

const RootScreen = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};

export default RootScreen;
