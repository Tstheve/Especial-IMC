// En IMCHistoryScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomButton from '../components/Comp'; // Importa el componente de botón
import { useNavigation } from '@react-navigation/native';

const IMCHistoryScreen = () => {
  const navigation = useNavigation(); // Obtiene la referencia a la navegación

  // Resto del código de la vista

  return (
    <View style={styles.container}>
      {/* Resto de los elementos en la vista */}
      <CustomButton title="Alguna Otra Acción" onPress={someOtherAction} />
      <CustomButton title="Volver a la Calculadora" onPress={() => navigation.navigate('IMCCalculator')} />
      {/* Resto de los elementos en la vista */}
    </View>
  );
};

// Resto del código de la vista