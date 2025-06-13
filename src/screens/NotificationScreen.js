// src/screens/NotificationScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Notifications and Alerts */}
      <View style={styles.permissionContainer}>
        <Text style={styles.title}>Notifications and Alerts</Text>
        <Text style={styles.description}>
          Allow notifications, alarms, and alerts from our app?
        </Text>
        <Image
           source={{ uri: 'https://cdn-icons-png.freepik.com/256/8297/8297490.png?semt=ais_hybrid' }}
          style={styles.image}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.agreeButton}>
            <Text style={styles.buttonText}>Agree</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Location Access */}
      <View style={styles.permissionContainer}>
        <Text style={styles.title}>Location Access</Text>
        <Text style={styles.description}>
          Allow location access to our app?
        </Text>
        <Image
          source={{ uri: 'https://cdn-icons-png.freepik.com/256/10791/10791906.png?semt=ais_hybrid' }} // Replace with your image URL
          style={styles.image}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.agreeButton}>
            <Text style={styles.buttonText}>Agree</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Learn More */}
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.learnMore}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1F7D5', // Background color similar to the image
  },
  permissionContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 20, // Added padding for better spacing
    width: '100%', // Full width to make it more responsive
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 80, // Adjust size based on your design
    height: 80,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%', // Adjust width for better alignment
    marginTop: 10, // Added margin to separate from image
  },
  agreeButton: {
    backgroundColor: '#90EE90', // Agree button color
    padding: 12,
    borderRadius: 5,
    flex: 1, // Makes button flexible to fill space
    marginRight: 10, // Space between buttons
    alignItems: 'center',
  },
  skipButton: {
    backgroundColor: '#000000', // Skip button color
    padding: 12,
    borderRadius: 5,
    flex: 1, // Makes button flexible to fill space
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  learnMore: {
    color: '#0000EE',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default NotificationScreen;
