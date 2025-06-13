// src/screens/HomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AgriVoice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(203, 252, 229)', // Updated background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black', // Black color for the title text
  },
});

export default HomeScreen;
