import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [address, setAddress] = useState('');
  const [centreName, setCentreName] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [category, setCategory] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Mobile Number Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Registered mobile number</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="mobile number"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />
            <TouchableOpacity style={styles.verifyButton}>
              <Text style={styles.verifyButtonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Aadhaar Number Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Aadhaar Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Aadhaar number"
            value={aadhaarNumber}
            onChangeText={setAadhaarNumber}
          />
        </View>

        {/* Address Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Centre Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Centre name</Text>
          <TextInput
            style={styles.input}
            placeholder="Nearby centre name and address"
            value={centreName}
            onChangeText={setCentreName}
          />
        </View>

        {/* Pin Code Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pin code</Text>
          <TextInput
            style={styles.input}
            placeholder="pin code"
            value={pinCode}
            onChangeText={setPinCode}
            keyboardType="numeric"
          />
        </View>

        {/* Category Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            placeholder="category for schemes record"
            value={category}
            onChangeText={setCategory}
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('SoilType')}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2FFBB', // Background color
  },
  formContainer: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 70,
    backgroundColor: '#FFFFFF', // White background for the form
    borderRadius: 10,
    width: '100%',
    borderColor: '#C4C4C4', // Border color
    borderWidth: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyButton: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  verifyButtonText: {
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#90EE90', // Green background for the continue button
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;
