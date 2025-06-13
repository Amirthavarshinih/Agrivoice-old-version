import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SoilTypeScreen = ({ navigation }) => {
  const [soilType, setSoilType] = useState('');
  const [soilTexture, setSoilTexture] = useState('');
  const [plantType, setPlantType] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Describe your Goals and land characteristics</Text>

      <View style={styles.formContainer}>
        {/* Soil Type Picker */}
        <View style={styles.inputContainer}>
          <Text>Select the type of Soil</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={soilType}
              onValueChange={(itemValue) => setSoilType(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Type" value="" />
              <Picker.Item label="Clay" value="clay" />
              <Picker.Item label="Sandy" value="sandy" />
              <Picker.Item label="Silt" value="silt" />
              <Picker.Item label="Loam" value="loam" />
            </Picker>
          </View>
        </View>

        {/* Soil Texture Input */}
        <View style={styles.inputContainer}>
          <Text>Soil texture</Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            value={soilTexture}
            onChangeText={setSoilTexture}
          />
        </View>

        {/* Plant Type Picker */}
        <View style={styles.inputContainer}>
          <Text>Plants that you are interested to grow:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={plantType}
              onValueChange={(itemValue) => setPlantType(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Plant" value="" />
              <Picker.Item label="Tomatoes" value="tomatoes" />
              <Picker.Item label="Carrots" value="carrots" />
              <Picker.Item label="Lettuce" value="lettuce" />
              <Picker.Item label="Peppers" value="peppers" />
            </Picker>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('MotorControl')}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1F7D5', // Background color similar to the image
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#B9E4C9', // Light green background for the form container
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  pickerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginTop: 5,
  },
  picker: {
    height: 40,
    color: '#000',
  },
  textInput: {
    height: 40,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: '#FFF',
  },
  continueButton: {
    backgroundColor: '#90EE90', // Green background similar to the image
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

export default SoilTypeScreen;
