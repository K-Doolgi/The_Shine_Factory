// App.js or index.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation'; // Adjust the path accordingly

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
