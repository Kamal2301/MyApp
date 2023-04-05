import Router from './Navigation/Router';
import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClientProvider, QueryClient} from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
