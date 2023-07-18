// En IMCCalculatorScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import CustomButton from '../components/Comp'; // Importa el componente de botón
import { useNavigation } from '@react-navigation/native';

const IMCCalculatorScreen = () => {
  const navigation = useNavigation(); // Obtiene la referencia a la navegación

  // Resto del código de la vista

  return (
    <View style={styles.container}>
      {/* Resto de los elementos en la vista */}
      <CustomButton title="Calcular IMC" onPress={calculateIMC} />
      <Button title="Ver Historial" onPress={() => navigation.navigate('IMCHistory')} />
      {/* Resto de los elementos en la vista */}
    </View>
  );
};

// Resto del código de la vista