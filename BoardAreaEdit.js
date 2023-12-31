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

const BoardAreaEdit = ({ route }) => {
  const { AreaId } = route.params;
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(true);

  const AreaDetails = {
    id: 1,
    title: '부산 광안리 (여행지 추천)',
    content: '부산 광안리는 푸른 바다와 환상적인 야경이 어우러진 여행지입니다. 해변가 카페에서 바다를 바라보며 즐기는 여유, 광안대교 밑에서 별빛 같은 야경을 감상하는 순간은 잊지 못할 추억이 될 것입니다. 또한, 부산의 특색 있는 맛집과 쇼핑도 즐길 수 있습니다. 광안리에서 당신만의 특별한 추억을 만들어보세요.',
    image: './images/Area.jpg',
  };

  const [editedTitle, setEditedTitle] = useState(AreaDetails.title);
  const [editedContent, setEditedContent] = useState(AreaDetails.content);
  const [editedImage, setEditedImage] = useState(AreaDetails.image);

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
            <Text style={styles.titleText}>지역별 여행 정보</Text>
            <Text style={styles.subtitleText}>카테고리 별 지역 정보글 게시</Text>
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

export default BoardAreaEdit;
