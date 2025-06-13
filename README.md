# 🌾 Agri Voice – Smart Farming Assistant

## 🔧 Technologies Used

- **Hardware:** ESP32, Soil Moisture Sensor, pH Sensor, NPK Sensor, Relay Module  
- **Backend:** Python, Firebase Realtime Database  
- **Frontend:** React (Mobile App)  
- **APIs:** Weather API, News API, Gemini API  
- **ML Model:** Random Forest Classifier (for crop prediction)  
- **Voice Integration:** Speech Recognition & Text-to-Speech (multilingual)  

---

## 🚀 Project Summary

**Agri Voice** is an intelligent voice-enabled mobile app that assists farmers with real-time soil analysis, crop prediction, weather updates, and irrigation control.  
It integrates IoT hardware with machine learning and APIs to create a smart, farmer-friendly ecosystem. The app supports both text and voice interaction in the farmer’s preferred language.

---

## 📱 App Features

### 1. User Onboarding
- Login/Sign-up  
- Collect basic farm information:  
  `Name`, `Mobile Number`, `Aadhaar`, `Location`, `Soil Type`, `Land Area`, `Current Crop`, `Expected Yield`, etc.  
- Select preferred language (e.g., Tamil, Hindi, English)

### 2. Dashboard Sections
- 🌿 **Crop Recommendation**: Predicts best-suited crops using real-time soil data and a trained **Random Forest** model.  
- 🌦️ **Weather Updates**: Live weather based on location (via Weather API).  
- 📰 **Agri News**: Latest agriculture-related news from News API.  
- 💸 **Government Schemes**: Shows relevant schemes from Schemes API.  
- 🧪 **Soil Analysis**: Displays live data from Firebase — moisture, nitrogen, phosphorus, potassium, and pH.  
- 🐛 **Pest & Disease Alert**: Suggests remedies based on soil and weather data.  
- 💧 **Water Control**: ON/OFF button for irrigation pump via ESP32 + Relay using Firebase.  
- 🎙️ **Voice Assistant**: Multilingual voice input/output for full app control.  
- 🤖 **Chatbot**: Powered by **Gemini API**, answers farming queries smartly.

---

## 🧠 Machine Learning Logic

- Collected/used crop datasets mapping soil parameters to ideal crops.  
- Preprocessed data and trained a **Random Forest Classifier** in Python.  
- **Inputs**: Soil moisture, pH, Nitrogen (N), Phosphorus (P), Potassium (K)  
- **Output**: Recommended crop  
- Predictions are stored in and retrieved from Firebase, shown in the app UI.

---

## 🔌 Hardware Integration

- Sensors (pH, NPK, Moisture) send data to ESP32.  
- ESP32 sends readings to Firebase Realtime Database.  
- App fetches data from Firebase to display or use in predictions.  
- Motor control (irrigation) works via **Relay module**, triggered by Firebase ON/OFF commands.

---

## 🎯 Key Highlights

- ✅ Fully integrated hardware + software system  
- 📊 Real-time data analysis and visualization  
- 🌐 API-powered updates (weather, news, schemes)  
- 🗣️ Voice assistant for low-literacy usability  
- 📱 Mobile-friendly design using React  
- 🚰 Water pump control from anywhere  

---

## 💡 Scalability Ideas

- 📷 Add plant disease prediction using camera images  
- 🚀 Host ML model on a cloud backend (e.g., FastAPI)  
- 📲 SMS fallback for rural areas without smartphones  
- 🛰️ Integrate satellite or drone data for crop health analysis

---

## 📌 Note
This is a hybrid project involving embedded systems, mobile development, and machine learning, all tailored to support Indian farmers in regional languages.
