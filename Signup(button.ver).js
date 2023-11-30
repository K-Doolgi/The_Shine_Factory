// Signup.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Signupuser from './Signupuser';
import Signupenterprise from './Signupenterprise';

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      
      {/* 일반 사용자 회원가입 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signupuser')}
      >
        <Text style={styles.buttonText}>Sign up as User</Text>
      </TouchableOpacity>
      
      {/* 기업 사용자 회원가입 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signupenterprise')}
      >
        <Text style={styles.buttonText}>Sign up as Enterprise</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Signup;
