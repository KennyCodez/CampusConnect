import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const HomeScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignIn = () => {
    // Normally you would handle this with a backend service
    // For simplicity, we will navigate to Profile if username and password are not empty
    if (username !== '' && password !== '') {
      navigation.navigate('Profile');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CampusConnect!</Text>
      <Text style={styles.subtitle}>Connect with fellow students and expand your network.</Text>
      <TextInput 
        style={styles.input} 
        value={username} 
        onChangeText={setUsername} 
        placeholder="Username" 
      />
      <TextInput 
        style={styles.input} 
        value={password} 
        onChangeText={setPassword} 
        placeholder="Password" 
        secureTextEntry 
      />
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
    color: 'black',
  },
  signInButton: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  signInButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default HomeScreen;


