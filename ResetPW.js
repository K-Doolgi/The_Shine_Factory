// ResetPW.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Signin from './Signin';

const ResetPW = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleResetPassword = () => {
    if (newPassword !== confirmNewPassword) {
      // 비밀번호 확인이 일치하지 않을 때
      setPasswordMismatch(true);
      return;
    }

    // 비밀번호 확인이 일치할 때
    // Add logic to update the password in the database
    console.log('New Password:', newPassword);

    // 비밀번호만 바뀌었을 경우에 대한 로직 (실제로는 DB 연동이 필요)
    if (isPasswordConfirmed) {
      console.log("Only the password has been changed.");
      // 여기에 DB 연동 로직을 추가하세요.
    }

    // Reset the state and navigate to the Signin screen
    setNewPassword('');
    setConfirmNewPassword('');
    setIsPasswordConfirmed(true);
    setPasswordMismatch(false);
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비밀번호 재설정</Text>

      <TextInput
        style={styles.input}
        placeholder="새로운 비밀번호를 입력해 주세요."
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="새로운 비밀번호를 한번 더 입력해 주세요."
        secureTextEntry
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
      />

      {/* 비밀번호가 다를 때 안내 메시지 표시 */}
      {passwordMismatch && (
        <Text style={styles.errorText}>비밀번호가 일치하지 않습니다.</Text>
      )}

      <Button title="비밀번호 재설정" onPress={handleResetPassword} />
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
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});

export default ResetPW;
