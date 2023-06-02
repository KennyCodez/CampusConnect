import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');
  const [graduatingClass, setGraduatingClass] = useState('');
  const [hobbies, setHobbies] = useState('');

  const handleMainButtonPress = () => {
    if(name && university && major && graduatingClass && hobbies) {
      // After validating all fields, navigate to the main screen
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Profile</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName} 
        placeholder="Name" 
      />
      <TextInput 
        style={styles.input} 
        value={university} 
        onChangeText={setUniversity} 
        placeholder="University Name" 
      />
      <TextInput 
        style={styles.input} 
        value={major} 
        onChangeText={setMajor} 
        placeholder="Major" 
      />
      <TextInput 
        style={styles.input} 
        value={graduatingClass} 
        onChangeText={setGraduatingClass} 
        placeholder="Graduating Class" 
      />
      <TextInput 
        style={styles.input} 
        value={hobbies} 
        onChangeText={setHobbies} 
        placeholder="Hobbies" 
      />
      <TouchableOpacity style={styles.mainButton} onPress={handleMainButtonPress}>
        <Text style={styles.mainButtonText}>Submit and Go to Main Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'blackf',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '80%',
  },
  mainButton: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  mainButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
