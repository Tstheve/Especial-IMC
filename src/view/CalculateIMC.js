import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import CustomButton from '../components/Comp';
import { useNavigation } from '@react-navigation/native';

const IMCCalculatorScreen = () => {
  const navigation = useNavigation();
  const [pesokl, setpeso] = useState('');
  const [alto, setalto] = useState('');
  const [imcHistory, setIMCHistory] = useState([]); // Arreglo para almacenar el historial de IMC

  const calculateIMC = () => {
    const pesokl = parseFloat(pesokl);
    const alto = parseFloat(alto);
    
    if (pesokl && alto) {
      const imc = pesokl / (alto * alto);
      const newIMCHistory = [...imcHistory, imc]; // Agrega el nuevo IMC al historial
      
      setIMCHistory(newIMCHistory);

      navigation.navigate('IMCHistory', { historyData: newIMCHistory }); // Redirige a la vista de historial 
      //y pasa los datos del historial como parámetro
    }
  };

  return (
    <View style={styles.container}>
      {/* Resto de los elementos en la vista */}
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        onChangeText={setpeso}
        value={pesokl}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        onChangeText={setalto}
        value={alto}
        keyboardType="numeric"
      />
      <CustomButton title="Calcular IMC" onPress={calculateIMC} />
      <Button title="Ver Historial" onPress={() => navigation.navigate('IMCHistory')} />
      {/* Resto de los elementos en la vista */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    alto: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default IMCCalculatorScreen;
