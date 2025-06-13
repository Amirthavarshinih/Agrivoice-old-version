import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ChatbotScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        {/* Center Mic Icon */}
        <View style={styles.centerIconContainer}>
          <View style={styles.iconWrapper}>
            <FontAwesome name="microphone" size={64} color="black" />
          </View>
        </View>

        {/* Chatbot Greeting */}
        <View style={styles.bottomSection}>
          <View style={styles.chatbotGreeting}>
            <Text style={styles.chatbotText}>Hello! How may I assist you?</Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Start Irrigation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Stop Irrigation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>What plant can I sow in my location?</Text>
            </TouchableOpacity>
          </View>

          {/* Input Box */}
          <View style={styles.inputContainer}>
            <FontAwesome name="keyboard-o" size={20} color="gray" />
            <TextInput 
              placeholder="Type your question" 
              style={styles.textInput}
            />
            <FontAwesome name="microphone" size={20} color="gray" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7f6d3',
  },
  wrapper: {
    padding: 16,
    flex: 1,
  },
  backButton: {
    marginBottom: 16,
  },
  centerIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    padding: 32,
    backgroundColor: 'white',
    borderRadius: 100,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  chatbotGreeting: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  chatbotText: {
    fontSize: 18,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 2,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 16,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 8,
    color: '#333',
  },
});

export default ChatbotScreen;
