// En IMCHistoryScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomButton from '../components/Comp'; // Importa el componente de botón
import { useNavigation } from '@react-navigation/native';

const IMCHistoryScreen = ({ navigation, route }) => {
  const { historyData } = route.params;

  return (
    <View style={styles.container}>
      <Text>Historial de IMC</Text>
      {historyData.map((imc, index) => (
        <Text key={index}>IMC {index + 1}: {imc}</Text>
      ))}
    </View>
  );
};

export default IMCHistoryScreen;