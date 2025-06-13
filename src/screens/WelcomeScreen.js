// src/screens/WelcomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Language');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>AgriVoice</Text>
      <Text style={styles.title}>Welcome to AgriVoice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(203, 252, 229)', // Background color RGB(203, 252, 229)
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black', // Black color for the logo text
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black', // Black color for the title text
  },
});

export default WelcomeScreen;
