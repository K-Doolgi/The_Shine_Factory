// Signin.js
// 수정사항 (1130) - 로그인 API 기능 추가
// 로그인 했을 때 기존 App.js의 버튼이 log-in -> log-out으로 변경 가능
// 이 기능을 이용해서 계정별 게시판 이용권한 조정 예정
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useAuth } from './AuthContext';
import { Alert } from 'react-native';

const Signin = ({ navigation }) => {
  const [userId, setuserId] = useState('');
  const [Password, setPassword] = useState('');

  const { login, isLoggedIn } = useAuth();

  const handleSignin = () => {
    console.log('Log IN');
    console.log('Id:', userId);
    console.log('Password:', Password);

    let userType = '';
    let name = '';
    let username = '';
    let address = '';
    let phoneNumber = '';

    if (userId === 'admin' && Password === 'admin123') {
      console.log('Admin 로그인 성공');
      userType = 'admin';
      const userData = {
        name: '관리자',
        username: 'administrator',
        address: '부산광역시 남구 대연동 용소로 45 (부경대학교)',
        phoneNumber: '051-000-0000',
      };
      
      login(userType, userData);

    // App.js로 로그인 상태 및 유저 타입 전달
    navigation.navigate('Home', { isLoggedIn: true, userType, name, username,address, phoneNumber });
    
    } else if (userId === 'user' && Password === 'user123') {
      console.log('User 로그인 성공');
      userType = 'user';
      const userData = {
        name: '일반인',
        username: '신원미상',
        address: '거주지 불명',
        phoneNumber: '010-0000-0000',
      };
      

      login(userType, userData);

    // App.js로 로그인 상태 및 유저 타입 전달
    navigation.navigate('Home', { isLoggedIn: true, userType, name, username,address, phoneNumber });
    
    } else if (userId === 'company' && Password === 'company123') {
      console.log('Company 로그인 성공');
      userType = 'company';
      const userData = {
        name: '사장님',
        username: 'CEO',
        address: '회사',
        phoneNumber: '070-000-0000',
      };
      
      login(userType, userData);

    // App.js로 로그인 상태 및 유저 타입 전달
    navigation.navigate('Home', { isLoggedIn: true, userType, userId, userId, name, username,address, phoneNumber });
    
    } else {
      console.log('로그인 실패');
      Alert.alert('로그인 실패', '아이디 또는 비밀번호가 올바르지 않습니다.');
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        style={styles.input}
        placeholder="Id"
        keyboardType="email-address"
        autoCapitalize="none"
        value={userId}
        onChangeText={setuserId}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={Password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.Signin} onPress={handleSignin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('FindPW')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signUpLink}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  forgotPassword: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 12,
  },
  Signin: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  signUpLink: {
    marginTop: 16,
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Signin;
