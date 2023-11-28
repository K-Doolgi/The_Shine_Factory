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

const BoardJobWrite = () => {
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(true); // Start in editing mode

  // State variables to hold edited values
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editedCompanyName, setEditedCompanyName] = useState('');
  const [editedIndustry, setEditedIndustry] = useState('');
  const [editedBusinessType, setEditedBusinessType] = useState('');
  const [editedEstablishmentDate, setEditedEstablishmentDate] = useState('');
  const [editedEmployeeCount, setEditedEmployeeCount] = useState('');
  const [editedCEO, setEditedCEO] = useState('');

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
    console.log('New Company Name:', editedCompanyName);
    console.log('New Industry:', editedIndustry);
    console.log('New Business Type:', editedBusinessType);
    console.log('New Establishment Date:', editedEstablishmentDate);
    console.log('New Employee Count:', editedEmployeeCount);
    console.log('New CEO:', editedCEO);

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
          <Text style={styles.label}>기업명</Text>
          <TextInput
            style={styles.input}
            placeholder="기업명을 입력하세요"
            value={editedCompanyName}
            onChangeText={(text) => setEditedCompanyName(text)}
          />
        </View>
        <View style={styles.editableContent}>
          <Text style={styles.label}>업종</Text>
          <TextInput
            style={styles.input}
            placeholder="업종을 입력하세요"
            value={editedIndustry}
            onChangeText={(text) => setEditedIndustry(text)}
          />
        </View>
        <View style={styles.editableContent}>
          <Text style={styles.label}>사업내용</Text>
          <TextInput
            style={styles.input}
            placeholder="사업내용을 입력하세요"
            value={editedBusinessType}
            onChangeText={(text) => setEditedBusinessType(text)}
          />
        </View>
        <View style={styles.editableContent}>
          <Text style={styles.label}>설립일</Text>
          <TextInput
            style={styles.input}
            placeholder="설립일을 입력하세요"
            value={editedEstablishmentDate}
            onChangeText={(text) => setEditedEstablishmentDate(text)}
          />
        </View>
        <View style={styles.editableContent}>
          <Text style={styles.label}>사원수</Text>
          <TextInput
            style={styles.input}
            placeholder="사원수를 입력하세요"
            value={editedEmployeeCount}
            onChangeText={(text) => setEditedEmployeeCount(text)}
          />
        </View>
        <View style={styles.editableContent}>
          <Text style={styles.label}>대표자명</Text>
          <TextInput
            style={styles.input}
            placeholder="대표자명을 입력하세요"
            value={editedCEO}
            onChangeText={(text) => setEditedCEO(text)}
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
            <Text style={styles.titleText}>취업 관련 게시판</Text>
            <Text style={styles.subtitleText}>구인 관련글 게시</Text>
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
  },
  subtitleText: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: '#4CAF50',
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

export default BoardJobWrite;
