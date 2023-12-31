// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GetNews from './Srceens/GetNews';
import WebViewComponent from './components/WebView';
import HomeScreen from './Srceens/GetNews';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trending" component={HomeScreen} />
        <Stack.Screen name='GetNews' component={GetNews} />
        <Stack.Screen name='WebView' component={WebViewComponent} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;