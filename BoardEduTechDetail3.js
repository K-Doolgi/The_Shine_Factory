import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';

import BoardEduTech from './BoardEduTech';

const BoardEduTechDetail3 = ({ route }) => {
  const { EducationId3 } = route.params;
  const navigation = useNavigation();
  const { isLoggedIn, userType, name, username, address, phoneNumber } = useAuth();

  const Educationdetail3 = {
    id: 3,
    title: '미디어콘텐츠개발 교육',
    writer: '관리자',
    date: '2023.11.12',
    image: require('./images/Tc3.jpg'),
    content: `
      아이들은 이미 예술가이며, 미디어 창작자입니다.
      미디어로 꿈을 키우고 자신 안의 끼를 찾을 수 있도록 도와주는
      맞춤형 미디어 교육
    `,
    EducationInfo: {
      EduName: '미디어콘텐츠개발 교육',
      EduContent: '전문적인 SW메이커교육 운영을 통한 미래역량 강화',
      establishmentDate: '2023.11.12',
      ApplyCount: '00명',
      Teacher: '강사명',
    },
  };

  const handleEduEdit = () => {
    if (isLoggedIn && userType === 'admin') {
      navigation.navigate('BoardEduTechEdit3', { EducationId3: EducationId3 });
    } else {
      alert('작성 권한이 없습니다.');
    }
  };

  const ApplyPress = () => {
    // 먼저 신청 여부를 묻는 경고창 띄우기
    Alert.alert(
      '교육 신청',
      '이 교육에 신청하시겠습니까?',
      [ 
        {
          text: '예',
          onPress: () => {
            // 신청 정보를 출력하고 알림창 띄우기
            console.log('신청자 정보:');
            console.log('교육명:', Educationdetail3.EducationInfo.EduName);
            console.log('User Type:', userType);
            console.log('Name:', name);
            console.log('UserName:', username);
            console.log('Address:', address);
            console.log('Phone Number:', phoneNumber);
            Alert.alert('교육이 신청되었습니다.');
          },
        },
        {
          text: '아니오',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  const DeletePress = () => {
    // 먼저 신청 여부를 묻는 경고창 띄우기
    Alert.alert(
      '게시글 삭제',
      '이 게시글을 삭제하시겠습니까?',
      [
        {
          text: '아니오',
          style: 'cancel',
        },
        {
          text: '예',
          onPress: () => {
            // 나중에 내용 삭제하는 매크로 추가해야함
            navigation.navigate(BoardEduTech),
            Alert.alert('게시글이 삭제되었습니다.');
          },
        },
      ],
      { cancelable: false }
    );
  };

  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.boardTitle}>
        <View style={styles.buttonWrap}>

        {isLoggedIn && (userType === 'admin') && (
          <TouchableOpacity style={styles.button} onPress={handleEduEdit}>
          <Text style={styles.buttonText}>수정</Text>
        </TouchableOpacity>
        )}
          
        </View>
        <View>
          <Text style={styles.titleText}>전문 기술 과정 게시판</Text>
          <Text style={styles.subtitleText}>카테고리별 강의 홍보글 게시</Text>
        </View>
        <View style={styles.buttonWrap}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BoardEduTech')}>
            <Text style={styles.buttonText}>목록</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boardViewWrap}>
        <View style={styles.boardView}>
          <Text style={styles.title}>제목: {Educationdetail3.title}</Text>
          <View style={styles.info}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>번호</Text>
              <Text style={styles.infoValue}>{Educationdetail3.id}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>작성자</Text>
              <Text style={styles.infoValue}>{Educationdetail3.writer}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>작성일</Text>
              <Text style={styles.infoValue}>{Educationdetail3.date}</Text>
            </View>
          </View>

          <View style={styles.content}>
            <Image style={styles.image} source={Educationdetail3.image} />
            <Text>{Educationdetail3.content}</Text>
          </View>

          <Text style={styles.title}>교육정보</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>교육명: </Text>
            <Text style={styles.infoValue}>{Educationdetail3.EducationInfo.EduName}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>교육내용: </Text>
            <Text style={styles.infoValue}>{Educationdetail3.EducationInfo.EduContent}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>교육기간: </Text>
            <Text style={styles.infoValue}>{Educationdetail3.EducationInfo.establishmentDate}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>모집인원: </Text>
            <Text style={styles.infoValue}>{Educationdetail3.EducationInfo.ApplyCount}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>강사이름: </Text>
            <Text style={styles.infoValue}>{Educationdetail3.EducationInfo.Teacher}</Text>
          </View>
        </View>

        <View>
          {/* ApplyPress 함수를 호출하는 버튼 */}
          {isLoggedIn && (userType === 'admin' || userType === 'user'|| userType === 'company') && (
            <TouchableOpacity style={styles.deleteButton} onPress={ApplyPress}>
              <Text style={styles.buttonText}>신청</Text>
            </TouchableOpacity>
          )}

          {/* 삭제 버튼과 경고창 추가 */}
          {isLoggedIn && (userType === 'admin') && (
          <TouchableOpacity style={styles.deleteButton} onPress={DeletePress}>
            <Text style={styles.buttonText}>삭제</Text>
          </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20,
  },
  boardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
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
  buttonWrap: {
    minWidth: 60,
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
  boardViewWrap: {
    flex: 1,
  },
  boardView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 5,
    paddingVertical: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
    resizeMode: 'contain',
  },
  content: {
    marginBottom: 20,
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  ApplyModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },

  confirmModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: 'center',
  },
});

export default BoardEduTechDetail3;
