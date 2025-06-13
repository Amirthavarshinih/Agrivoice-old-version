import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const MotorControlScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Image */}
      <Image
        source={{ uri: 'https://example.com/header-image.jpg' }} // Replace with your image URL or local path
        style={styles.headerImage}
      />

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Motor Control Buttons */}
        <TouchableOpacity style={styles.button} onPress={() => alert('Motor Turned On')}>
          <Text style={styles.buttonText}>Turn On Motor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOff]} onPress={() => alert('Motor Turned Off')}>
          <Text style={styles.buttonText}>Turn Off Motor</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Chatbot')}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* Placeholder Sections */}
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{ uri: 'https://example.com/sensor-icon.jpg' }} // Replace with your icon URL or local path
              style={styles.icon}
            />
            <Text style={styles.cardText}>Sensor Values</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{ uri: 'https://example.com/field-icon.jpg' }} // Replace with your icon URL or local path
              style={styles.icon}
            />
            <Text style={styles.cardText}>Field Analysis Records</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{ uri: 'https://example.com/weather-icon.jpg' }} // Replace with your icon URL or local path
              style={styles.icon}
            />
            <Text style={styles.cardText}>Weather and Climate Patterns</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{ uri: 'https://example.com/water-icon.jpg' }} // Replace with your icon URL or local path
              style={styles.icon}
            />
            <Text style={styles.cardText}>Water Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{ uri: 'https://example.com/agriculture-icon.jpg' }} // Replace with your icon URL or local path
              style={styles.icon}
            />
            <Text style={styles.cardText}>Agriculture News</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{ uri: 'https://example.com/schemes-icon.jpg' }} // Replace with your icon URL or local path
              style={styles.icon}
            />
            <Text style={styles.cardText}>Schemes Portal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(203, 252, 229)', // Background color
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  mainContent: {
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#4CAF50', // Green color for turn on button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  buttonOff: {
    backgroundColor: '#FF5722', // Red color for turn off button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#4CAF50', // Green color for continue button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 3,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MotorControlScreen;
