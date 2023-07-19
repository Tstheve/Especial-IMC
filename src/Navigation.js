import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IMCCalculatorScreen from './view/CalculateIMC';
import IMCHistoryScreen from './view/HistoryIMC';


const AppNavigator = createStackNavigator(
  {
    IMCCalculator: { screen: IMCCalculatorScreen },
    IMCHistory: { screen: IMCHistoryScreen },
  },
  {
    initialRouteName: 'IMCCalculator',
  }
);

export default createAppContainer(AppNavigator);