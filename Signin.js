// Signin.js
//수정사항(1127) - 기존 텍스트 입력만 있던 signin.js에 id, pw변수 선언을 통해, 입력한 로그인 정보가 전달될 수 있도록 수정
import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

// Signin 컴포넌트 정의
// 수정사항(1127) - const Sign in 함수 개편 -> 수정 내용에 대한 피드백 기능 추가
const Signin = ({ navigation }) => {
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');

  // 예시로 입력받은 정보를 로그에 출력합니다.
  const handleSignin = () => {
    console.log('Log IN');
    console.log('Id:', Id);
    console.log('Password:', Password);

    navigation.navigate('Applogin');
  };
  // 컴포넌트 반환
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        style={styles.input}
        placeholder="Id"
        keyboardType="email-address"
        autoCapitalize="none"
        value={Id}
        onChangeText={setId}
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

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signUpLink}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

// 스타일 정의
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
    margin: 12,
  },
  //수정사항(1127): Sign in을 위한 디자인 추가
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
  },
});

// Signin 컴포넌트를 외부에서 사용할 수 있도록 내보냄
export default Signin;
