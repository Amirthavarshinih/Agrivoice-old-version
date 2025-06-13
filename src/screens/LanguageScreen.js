import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// List of regional languages of India with English names
const languages = [
  { original: 'English', english: 'English', translated: 'English' },
  { original: 'Hindi', english: 'Hindi', translated: 'हिन्दी' },
  { original: 'Bengali', english: 'Bengali', translated: 'বাংলা' },
  { original: 'Telugu', english: 'Telugu', translated: 'తెలుగు' },
  { original: 'Marathi', english: 'Marathi', translated: 'मराठी' },
  { original: 'Tamil', english: 'Tamil', translated: 'தமிழ்' },
  { original: 'Gujarati', english: 'Gujarati', translated: 'ગુજરાતી' },
  { original: 'Malayalam', english: 'Malayalam', translated: 'മലയാളം' },
  { original: 'Kannada', english: 'Kannada', translated: 'ಕನ್ನಡ' },
  { original: 'Odia', english: 'Odia', translated: 'ଓଡ଼ିଆ' },
  { original: 'Punjabi', english: 'Punjabi', translated: 'ਪੰਜਾਬੀ' },
  { original: 'Assamese', english: 'Assamese', translated: 'অসমীয়া' },
  { original: 'Maithili', english: 'Maithili', translated: 'मैथिली' },
  { original: 'Santali', english: 'Santali', translated: 'ᱥᱟᱱᱛᱟᱲᱤ' },
  { original: 'Kashmiri', english: 'Kashmiri', translated: 'कश्मीरी' },
  { original: 'Nepali', english: 'Nepali', translated: 'नेपाली' },
  { original: 'Dogri', english: 'Dogri', translated: 'डोगरी' },
  { original: 'Manipuri', english: 'Manipuri', translated: 'মেইতেই' },
  { original: 'Bodo', english: 'Bodo', translated: 'बड़ो' }
];

const LanguageScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleContinue = () => {
    // Handle continue action, e.g., navigating to the next screen
    console.log('Selected Language:', selectedLanguage);
    navigation.navigate('Notification'); // Change 'Notification' to your next screen name
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="auto" />
      <View style={styles.wrapper}>
        {/* Icon Above the Heading */}
        <View style={styles.iconContainer}>
          <FontAwesome name="globe" size={40} color="#333" />
        </View>

        <Text style={styles.title}>Select Your Preferred Language</Text>

        <FlatList
          data={languages}
          keyExtractor={(item) => item.original}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.item, selectedLanguage === item.original && styles.selectedItem]}
              onPress={() => handleSelect(item.original)}
            >
              <Text style={styles.itemText}>
                <Text style={styles.translatedText}>{item.translated} </Text>
                <Text style={styles.originalText}>({item.english})</Text>
              </Text>
              {selectedLanguage === item.original && (
                <FontAwesome name="check-circle" size={24} color="green" />
              )}
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          style={[styles.continueButton, !selectedLanguage && styles.disabledButton]}
          onPress={handleContinue}
          disabled={!selectedLanguage}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7f6d3',
    paddingTop: StatusBar.currentHeight || 20, // Adjust padding to account for status bar
  },
  wrapper: {
    padding: 16,
    flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 16, // Space between icon and heading
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24, // Increased margin to push heading lower
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12, // Increased padding for better touch area
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 8, // Added margin for spacing between items
  },
  selectedItem: {
    backgroundColor: '#e0f7fa',
  },
  itemText: {
    fontSize: 16,
    flex: 1,
  },
  translatedText: {
    fontWeight: 'bold',
  },
  originalText: {
    fontStyle: 'italic',
    color: '#555',
  },
  continueButton: {
    marginTop: 24, // Increased margin from the last item
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ddd',
  },
  continueButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default LanguageScreen;
