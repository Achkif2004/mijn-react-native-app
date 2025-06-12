import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen.js';
import ProductDetail from './screens/productDetail.js';
import BlogScreen from './screens/blogScreen.js'; 
import BlogDetail from './screens/blogDetail';
import AboutUs from './screens/AboutUs';
import FAQ from './screens/FAQ';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="Details"
          component={ProductDetail}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="Blogs"
          component={BlogScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BlogDetail"
          component={BlogDetail}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="AboutUs" 
          component={AboutUs} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen name="FAQ" component={FAQ} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
