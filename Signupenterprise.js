// 수정사항(1129) - 회원가입시 비밀번호 확인 기능추가
// 비밀번호 재설정을 위한 인증질문 기능 추가 -> 변수로 받아 같이 DB로 저장할 수 있도록 선언
// 입력정보란 추가 - 실명 별명 ID 순으로 닉네임을 활용할 수 있도록 설정
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Modal, ScrollView, StatusBar } from 'react-native';

const Signupenterprise = ({ navigation }) => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [verificationCode, setVerificationCode] = useState('');

  const securityQuestions = [
    "당신의 애완동물 이름은?",
    "당신의 출생지는?",
    "당신이 가장 아끼는 물건은?",
    "처음 다녔던 학교의 이름은?",
    "당신이 좋아하는 취미는?",
    "당신이 좋아하는 가수의 이름은?",
  ];

  const handleSignup = () => {
    // 여기에서 실제 회원가입 로직을 구현할 수 있습니다.
    // 예시로 입력받은 정보를 로그에 출력합니다.
    console.log('User Type: Enterprise');
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('ID', userID);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Selected Question:', selectedQuestion);
    console.log('Security Answer:', securityAnswer);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
    console.log('Verification Code:', verificationCode);

    // 비밀번호 확인
    if (!passwordsMatch) {
      console.log('Passwords do not match');
      // 여기에서 비밀번호가 일치하지 않을 때의 처리를 추가할 수 있습니다.
      return;
    }

    // 여기에서 회원가입 정보를 데이터베이스에 저장하는 로직을 추가할 수 있습니다.
    // saveToDatabase(name, username, password, address, phoneNumber, selectedQuestion, securityAnswer);

    // 회원가입이 완료되면 SignIn 페이지로 이동
    navigation.navigate('Signin');
  };

    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Sign up as User</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="ID"
          value={userID}
          onChangeText={setUserID}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            // 입력이 바뀔 때마다 비밀번호 일치 여부 확인
            setPasswordsMatch(text === confirmPassword);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            // 입력이 바뀔 때마다 비밀번호 일치 여부 확인
            setPasswordsMatch(text === password);
          }}
        />
        {/* 비밀번호 일치 여부 메시지 */}
        {!passwordsMatch && (
          <Text style={styles.errorText}>Passwords do not match</Text>
        )}
        
        <TouchableOpacity
          style={styles.questionButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.questionButtonText}>
            {selectedQuestion || 'Select Security Question'}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Security Answer"
          value={securityAnswer}
          onChangeText={setSecurityAnswer}
        />
        {/* 모달로 질문 선택 영역 추가 */}
        <Modal
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {securityQuestions.map((question, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.option}
                  onPress={() => {
                    setSelectedQuestion(question);
                    setIsModalVisible(false);
                  }}
                >
                  <Text>{question}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
  
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

      <TextInput
        style={styles.input}
        placeholder="Verification Code"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />
      <Button
        title="Sign Up"
        onPress={handleSignup}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  questionButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    width: '100%',
    marginBottom: 12,
  },
  questionButtonText: {
    fontSize: 16,
  },
  passwordCheckButton: {
    backgroundColor: 'blue',
    padding: 10,
    width: '100%',
    marginBottom: 12,
  },
  passwordCheckButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 200,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
  },
  option: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  cancelButton: {
    color: 'red',
    marginTop: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});

export default Signupenterprise;
