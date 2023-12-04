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

const BoardPerEdit = ({ route }) => {
  const { PerId } = route.params;
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(true);

  const PerDetails = {
    id: 1,
    title: '호두까기 인형',
    content: '호두까기 인형은 러시아 작곡가 차이코프스키의 대표작 중 하나로, 아름다운 음악과 화려한 무대로 관객을 매료시키는 연극입니다. 이야기는 크리스마스 이브에, 클라라라는 소녀가 받은 호두까기 인형이 마법에 의해 살아나는 모험을 그립니다. 판타지와 로맨스, 모험이 공존하는 신비로운 이야기를 통해 감동과 즐거움을 선사합니다. 호두까기 인형과 함께 아름다운 꿈을 꾸러 오세요!',
    image: './images/Per.jpg',
  };

  const [editedTitle, setEditedTitle] = useState(PerDetails.title);
  const [editedContent, setEditedContent] = useState(PerDetails.content);
  const [editedImage, setEditedImage] = useState(PerDetails.image);

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
            <Text style={styles.titleText}>공연 및 전시회 정보</Text>
            <Text style={styles.subtitleText}>카테고리별 지역 정보글 게시</Text>
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
    backgroundColor: '#4CAF50',
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

export default BoardPerEdit;
