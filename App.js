import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import Onboarding from './components/Onboarding';
import BottomNavigator from './views/BottomNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={BottomNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


