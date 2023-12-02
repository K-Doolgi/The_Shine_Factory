// Signup.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Button, Modal,KeyboardAvoidingView, ScrollView, Alert } from 'react-native';

const Signup = ({ navigation }) => {
  const [userType, setUserType] = useState('user');
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
  const [verificationCode, setVerificationCode] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const securityQuestions = [
    "당신의 애완동물 이름은?",
    "당신의 출생지는?",
    "당신이 가장 아끼는 물건은?",
    "처음 다녔던 학교의 이름은?",
    "당신이 좋아하는 취미는?",
    "당신이 좋아하는 가수의 이름은?",
  ];

  const handleSignup = () => {
    console.log('User Type:', userType);
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('ID (Use your Email)', userID);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Selected Question:', selectedQuestion);
    console.log('Security Answer:', securityAnswer);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
    console.log('Verification Code:', verificationCode);
    

    if (!passwordsMatch) {
      console.log('Passwords do not match');
      // 비밀번호 불일치 경고창 표시
      Alert.alert('Warning', 'Passwords do not match');
      return;
    }
  
    // 필수 정보 누락 여부 확인
    if (!name || !username || !userID || !password || !confirmPassword || !address || !phoneNumber || !selectedQuestion || !securityAnswer) {
      console.log('Please fill in all required fields');
      // 필수 정보 누락 경고창 표시
      Alert.alert('Warning', 'Please fill in all required fields');
      return;
    }
    else {
      navigation.navigate('Signin')
    }
    // 여기에서 회원가입 정보를 데이터베이스에 저장하는 로직을 추가할 수 있습니다.
    // saveToDatabase(name, username, password, address, phoneNumber, selectedQuestion, securityAnswer);

    // 회원가입이 완료되면 SignIn 페이지로 이동
    // navigation.navigate('Signin');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
    <View style={styles.container}>
      <Text style = {styles.brand}>The Shine Factory</Text>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.headerText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>회원가입 {userType === 'user' ? '(일반인)' : '(기업전용)'}</Text>
        <Button title="회원가입" onPress={handleSignup} />
      </View>

      <View style={styles.userTypeContainer}>
        <TouchableOpacity
          style={[styles.userTypeButton, userType === 'user' && styles.selectedUserTypeButton]}
          onPress={() => setUserType('user')}
        >
          <Text style={styles.userTypeButtonText}>일반인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.userTypeButton, userType === 'enterprise' && styles.selectedUserTypeButton]}
          onPress={() => setUserType('enterprise')}
        >
          <Text style={styles.userTypeButtonText}>기업전용</Text>
        </TouchableOpacity>
      </View>


      <TextInput
        style={styles.input}
        placeholder="이름을 입력하세요."
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="사용하실 닉네임을 입력하세요."
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="사용하실 아이디(이메일)을 입력해주세요."
        value={userID}
        onChangeText={setUserID}
      />
      <TextInput
        style={styles.input}
        placeholder="사용하실 비밀번호를 입력해주세요."
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setPasswordsMatch(text === confirmPassword);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 한번 더 입력해주세요."
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => {
          setConfirmPassword(text);
          setPasswordsMatch(text === password);
        }}
      />
      {!passwordsMatch && (
        <Text style={styles.errorText}>비밀번호가 일치하지 않습니다.</Text>
      )}
      <TextInput
          style={styles.input}
          placeholder="주소를 입력해주세요."
          value={address}
          onChangeText={setAddress}
        />
  
        <TextInput
          style={styles.input}
          placeholder="전화번호를 입력해주세요 ('-' 포함)"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      <TouchableOpacity
        style={styles.questionButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.questionButtonText}>
          {selectedQuestion || '사용하실 보안 질문을 선택해주세요.'}
        </Text>
      </TouchableOpacity>

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
        placeholder="보안 질문에 대한 답을 입력해주세요."
        value={securityAnswer}
        onChangeText={setSecurityAnswer}
      />

      {userType === 'enterprise' && (
        <TextInput
          style={styles.input}
          placeholder="발급 받으신 보안코드를 기입해주세요."
          value={verificationCode}
          onChangeText={setVerificationCode}
        />
      )}
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    padding: 20,
  },
  brand: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  userTypeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  userTypeButton: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedUserTypeButton: {
    backgroundColor: 'gray',
  },
  userTypeButtonText: {
    fontSize: 18,
    color: 'black',
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
  errorText: {
    color: 'red',
    marginBottom: 12,
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
    alignItems: 'center', // 중앙 정렬을 위해 추가
  },
  option: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    width: '100%', // 옵션도 전체 너비를 사용하도록 수정
  },
  cancelButton: {
    color: 'red',
    marginTop: 8,
  },
});

export default Signup;
