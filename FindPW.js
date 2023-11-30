// FindPW.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Modal, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import ResetPW from './ResetPW';

const FindPW = () => {
  const navigation = useNavigation();
  const [userType, setUserType] = useState('user');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [userID, setUserID] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAccountVerified, setIsAccountVerified] = useState(false);

  const securityQuestions = [
    "당신의 애완동물 이름은?",
    "당신의 출생지는?",
    "당신이 가장 아끼는 물건은?",
    "처음 다녔던 학교의 이름은?",
    "당신이 좋아하는 취미는?",
    "당신이 좋아하는 가수의 이름은?",
  ];

  const handleAccountVerification = () => {
    // 여기에서 실제 계정 인증 로직을 구현할 수 있습니다.
    // 인증에 성공하면 isAccountVerified를 true로 설정합니다.
    // 추가적인 로직이 필요하다면 여기에 구현하세요.

    // 임시로 인증 성공으로 가정
    setIsAccountVerified(true);
  };

  const handleFindPassword = () => {
    if (!isAccountVerified) {
      // 계정이 인증되지 않았다면 계정 인증 로직 실행
      handleAccountVerification();
      return;
    }

    // 여기에서 비밀번호 찾기에 대한 추가적인 로직을 구현할 수 있습니다.
    // ResetPW.js 페이지로 이동
    navigation.navigate('ResetPW');
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View>
        <Text style={styles.title}>Find Password</Text>

        <Text style={styles.subtitle}>Select User Type:</Text>

        {/* UserType 선택을 위한 드롭다운 메뉴 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, userType === 'user' && styles.selectedButton]}
            onPress={() => setUserType('user')}
          >
            <Text style={[styles.buttonText, userType === 'user' && styles.selectedButtonText]}>User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, userType === 'enterprise' && styles.selectedButton]}
            onPress={() => setUserType('enterprise')}
          >
            <Text style={[styles.buttonText, userType === 'enterprise' && styles.selectedButtonText]}>Enterprise</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>{`Enter details to find ${userType === 'user' ? 'user' : 'enterprise'} password`}</Text>

        {/* 텍스트 입력창을 가운데 정렬하고 같은 크기로 통일 */}
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
          <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
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
          </TouchableWithoutFeedback>
        </Modal>

        {/* 비밀번호 찾기 버튼 */}
        <Button title="Find Password" onPress={handleFindPassword} />

      </View>
    </KeyboardAwareScrollView>
  );
}

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
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    // width: '80%', // 변경된 부분
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    },
  questionButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    width: '80%', // 변경된 부분
    marginBottom: 12,
    alignSelf: 'center', // 변경된 부분
  },
  questionButtonText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
  },
  selectedButton: {
    backgroundColor: 'lightblue',
  },
  buttonText: {
    fontSize: 16,
  },
  selectedButtonText: {
    color: 'white',
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
});

export default FindPW;
