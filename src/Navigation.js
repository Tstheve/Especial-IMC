import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IMCCalculatorScreen from './view/CalculateIMC';
import IMCHistoryScreen from './view/HistoryIMC';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IMCCalculator" component={IMCCalculatorScreen} options={{ title: 'Calculadora de IMC' }} />
        <Stack.Screen name="IMCHistory" component={IMCHistoryScreen} options={{ title: 'Historial de IMC' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;