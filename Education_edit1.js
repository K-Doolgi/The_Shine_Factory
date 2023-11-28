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

const Education_edit1 = ({ route }) => {
  const { Education_Id } = route.params;
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(true);

  const EducationDetails = {
    id: 1,
    title: '교육 게시판',
    content: '교육 관련 게시판 입니다.',
    image: 'https://example.com/band_image.jpg',
  };

  const [editedTitle, setEditedTitle] = useState(EducationDetails.title);
  const [editedContent, setEditedContent] = useState(EducationDetails.content);
  const [editedImage, setEditedImage] = useState(EducationDetails.image);

  const handleCancelPress = () => {
    setIsEditing(false);
    navigation.goBack();
  };

  const handleSavePress = () => {
    console.log('Edited Title:', editedTitle);
    console.log('Edited Content:', editedContent);
    console.log('Edited Image:', editedImage);

    setIsEditing(false);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boardTitle}>
        <TouchableOpacity onPress={handleSavePress}>
          <Text style={styles.buttonBox}>저장</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>교육게시판</Text>
        <TouchableOpacity onPress={handleCancelPress}>
          <Text style={styles.buttonBox}>취소</Text>
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
    fontWeight: 'bold',
  },
  buttonBox: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 30,
  },
  editableContent: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 54,
  },
  input: {
    paddingVertical: 5,
  },
});

export default Education_edit1;