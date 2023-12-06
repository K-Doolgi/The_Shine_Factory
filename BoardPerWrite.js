// BoardPerWrite.js
// 수정사항 (1128) - 디자인적인 개선과 양식 통일 위해 UI와 디자인 개편
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

const BoardPerWrite = () => {
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(true); // Start in editing mode

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

     // Navigate back to the board with the new content
     setIsEditing(false);
    navigation.goBack();
  };

  const renderContent = () => {
    return (
    <>
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
    </>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.boardTitle}>
        
        <TouchableOpacity style={styles.button} onPress={handleSavePress}>
          <Text style={styles.buttonText}>저장</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.titleText}>공연 및 전시회 정보</Text>
          <Text style={styles.subtitleText}>카테고리별 지역 정보글 게시</Text>
        </View>
       

        <TouchableOpacity style={styles.button} onPress={handleCancelPress}>
          <Text style={styles.buttonText}>취소</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.boardViewWrap}>
          <View style={styles.boardView}>{renderContent()}</View>
        </View>

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
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F7C524',
    padding: 10,
    borderRadius: 5,
  },
  boardViewWrap: {},

  boardView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
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

export default BoardPerWrite;
