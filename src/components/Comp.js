import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IMCHistoryScreen = ({ imcHistory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de IMC</Text>
      {imcHistory.length > 0 ? (
        <View>
          {imcHistory.map((imc, index) => (
            <Text key={index} style={styles.item}>
              IMC #{index + 1}: {imc.toFixed(2)}
            </Text>
          ))}
        </View>
      ) : (
        <Text>No hay registros de IMC</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 5,
  },
});

export default IMCHistoryScreen;
