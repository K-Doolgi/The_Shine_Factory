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

const BoardEduComEdit = () => {
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(true); // Start in editing mode

  const Comdetail1 = {
    id: 1,
    title: '창업 스타터 패키지',
    writer: '관리자',
    date: '2023.11.12',
    image: require('./images/Com.png'),
    content: `
    창업을 꿈꾸시는 분들, 창업 교육에 참여해 보세요! 
    전문가들의 실전 경험을 바탕으로 한 교육으로 창업의 A to Z를 배울 수 있습니다. 
    아이디어에서 비즈니스 모델까지, 창업의 전 과정을 체계적으로 이해하고 준비하세요. 
    창업 교육과 함께 여러분의 창업 꿈을 현실로 만들어보세요!
    `,
    ComInfo: {
      EduName: '창업 스타터 패키지',
      EduContent: '창업 도전자들을 위한 창업 전략',
      establishmentDate: '2023.11.12',
      ApplyCount: '00명',
      Teacher: '강사명',
    },
  };

  // State variables to hold edited values
  const [editedTitle, setEditedTitle] = useState(Comdetail1.title);
  const [editedContent, setEditedContent] = useState(Comdetail1.content);
  const [editedEduName, setEditedEduName] = useState(Comdetail1.ComInfo.EduName);
  const [editedEduContent, setEditedEduContent] = useState(Comdetail1.ComInfo.EduContent);
  const [editedEstablishmentDate, setEditedEstablishmentDate] = useState(Comdetail1.ComInfo.establishmentDate);
  const [editedApplyCount, setEditedApplyCount] = useState(Comdetail1.ComInfo.ApplyCount);
  const [editedTeacher, setEditedTeacher] = useState(Comdetail1.ComInfo.Teacher);
  const [editedImage, setEditedImage] = useState(Comdetail1.image);

  const handleCancelPress = () => {
    // Navigate back to the board without saving changes
    setIsEditing(false);
    navigation.goBack();
  };

  const handleSavePress = () => {
    // Handle the logic to save the new content (e.g., send to the server)
    // For now, simply log the new content
    console.log('New Title:', editedTitle);
    console.log('New Content:', editedContent);
    console.log('New Education Name:', editedEduName);
    console.log('New Edu Contents:', editedEduContent);
    console.log('New Establishment Date:', editedEstablishmentDate);
    console.log('New Apply Count:', editedApplyCount);
    console.log('New Teacher:', editedTeacher);

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
          <Text style={styles.label}>교육명</Text>
          <TextInput
            style={styles.input}
            placeholder="교육명을 입력하세요"
            value={editedEduName}
            onChangeText={(text) => setEditedEduName(text)}
          />
        </View>
        
        <View style={styles.editableContent}>
          <Text style={styles.label}>교육내용</Text>
          <TextInput
            style={styles.input}
            placeholder="교육내용을 입력하세요"
            value={editedEduContent}
            onChangeText={(text) => setEditedEduContent(text)}
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

        <View style={styles.editableContent}>
          <Text style={styles.label}>설립일</Text>
          <TextInput
            style={styles.input}
            placeholder="교육기간을 입력하세요"
            value={editedEstablishmentDate}
            onChangeText={(text) => setEditedEstablishmentDate(text)}
          />
        </View>
        <View style={styles.editableContent}>
          <Text style={styles.label}>모집인원</Text>
          <TextInput
            style={styles.input}
            placeholder="모집인원을 입력하세요"
            value={editedApplyCount}
            onChangeText={(text) => setEditedApplyCount(text)}
          />
        </View>
        <View style={styles.editableContent}>
          <Text style={styles.label}>강사이름</Text>
          <TextInput
            style={styles.input}
            placeholder="강사님의 성함을 입력하세요"
            value={editedTeacher}
            onChangeText={(text) => setEditedTeacher(text)}
          />
        </View>
      </>
    );
  };

  return (
    <ScrollView>
      <View  style={styles.container}>
        <View style={styles.boardTitle}>

          <TouchableOpacity style={styles.button} onPress={handleSavePress}>
            <Text style={styles.buttonText}>저장</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.titleText}>창업 교육 게시판</Text>
            <Text style={styles.subtitleText}>카테고리별 강의 홍보글 게시</Text>
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
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F7C524',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
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

export default BoardEduComEdit;
