import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoardHobbyWrite = () => {
  const navigation = useNavigation();

  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editedImage, setEditedImage] = useState('');

  const handleCancelPress = () => {
    navigation.goBack();
  };

  const handleSavePress = () => {
    console.log('New Title:', editedTitle);
    console.log('New Content:', editedContent);
    console.log('New Image:', editedImage);

    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boardTitle}>
        <TouchableOpacity style={styles.button} onPress={handleSavePress}>
          <Text style={styles.buttonText}>저장</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>자유게시판</Text>
        <TouchableOpacity style={styles.button} onPress={handleCancelPress}>
          <Text style={styles.buttonText}>취소</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.editableContent}>
        <Text style={styles.label}>제목</Text>
        <TextInput
          style={styles.input}
          placeholder="제목을 입력하세요"
          value={editedTitle}
          onChangeText={(text) => setEditedTitle(text)}
        />
      </View>
      <View style={styles.editableContent}>
        <Text style={styles.label}>내용</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="내용을 입력하세요"
          value={editedContent}
          onChangeText={(text) => setEditedContent(text)}
        />
      </View>
      <View style={styles.editableContent}>
        <Text style={styles.label}>이미지 URL</Text>
        <TextInput
          style={styles.input}
          placeholder="이미지 URL을 입력하세요"
          value={editedImage}
          onChangeText={(text) => setEditedImage(text)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#F0F0F0',
    padding: 30,
  },
  boardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleText: {
    fontSize: 24,
    paddingBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  editableContent: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    paddingVertical: 5,
  },
});

export default BoardHobbyWrite;
