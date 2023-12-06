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

const BoardHobbyEdit = ({ route }) => {
  const { hobbyId } = route.params;
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(true);

  const hobbyDetails = {
    id: 1,
    title: '밴드 동아리 구합니다',
    content: '밴드 동아리원을 모집합니다. 연습 시간은 매주 화, 목요일 오후 7시부터 9시까지입니다. 연락주세요!',
    image: 'https://example.com/band_image.jpg',
  };

  const [editedTitle, setEditedTitle] = useState(hobbyDetails.title);
  const [editedContent, setEditedContent] = useState(hobbyDetails.content);
  const [editedImage, setEditedImage] = useState(hobbyDetails.image);

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
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.boardTitle}>
          <TouchableOpacity style={styles.button} onPress={handleSavePress}>
            <Text style={styles.buttonText}>저장</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.titleText}>동호회 게시판</Text>
            {/* <Text style={styles.subtitleText}>동아리, 동호회 홍보글</Text> */}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleCancelPress}>
            <Text style={styles.buttonText}>취소</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boardViewWrap}>

          <View style={styles.boardView}>
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

      </View>
          </View>

        </View>

       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  boardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    
  },
  titleText: {
    fontSize: 24,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 16,
    color: 'black',
  },
  boardViewWrap: {},

  boardView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    backgroundColor: '#F7C524',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
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

export default BoardHobbyEdit;
