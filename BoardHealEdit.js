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

const BoardHealEdit = ({ route }) => {
  const { HealId } = route.params;
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(true);

  const HealDetails = {
    id: 1,
    title: '오늘의 건강 상식 (23/12/04)',
    content: '물은 우리 몸의 필수적인 영양소입니다. 하루에 최소 8잔(2리터)의 물을 섭취하는 것이 건강에 도움이 됩니다. 물은 체내 독소를 제거하고, 피부를 건강하게 유지하며, 신체의 온도를 조절하는데 필요합니다. 또한, 물은 소화기능과 뇌 기능을 개선하며, 기분을 좋게 만드는 데도 도움이 됩니다. 건강을 위해 충분한 수분 섭취를 잊지 마세요.',
    image: './images/Heal.jpg',
  };

  const [editedTitle, setEditedTitle] = useState(HealDetails.title);
  const [editedContent, setEditedContent] = useState(HealDetails.content);
  const [editedImage, setEditedImage] = useState(HealDetails.image);

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
            <Text style={styles.titleText}>건강 정보 게시판</Text>
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

export default BoardHealEdit;
