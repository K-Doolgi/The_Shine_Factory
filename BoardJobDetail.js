//BoardJobDetail.js
//수정사항(1127) - 수정, 목록 버튼 디자인 통일 (자유게시판)
// 수정 버튼을 누를 때, 일반 네비게이션이 아닌, 게시글을 구성하는 매개변수의 데이터를 수정 컴포넌트로 넘길 수 있게 수정
// 백엔드와 연동이 되는 부분이여서, 엑스포만으로는 디버깅하기 어려운 부분이 있음
// Import necessary dependencies
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';
import BoardJob from './BoardJob';

const BoardJobDetail = ({ route, navigation: propNavigation }) => {
  // Get the job details from the route params
  const { jobId } = route.params;

  const navigation = useNavigation();

  const { isLoggedIn, userType } = useAuth();
  const handleEdit = () => {
    // 작성 버튼 클릭 시 로직
    if (isLoggedIn && (userType === 'admin' || userType === 'company')) {
      // 로그인 상태이고, 유저타입이 admin 또는 company인 경우에만 작성 가능
      propNavigation.navigate('BoardJobEdit', { jobId: jobId });
    } else {
      // 그 외의 경우에는 작성 권한이 없음을 알림
      alert('작성 권한이 없습니다.');
    }
  };
  const [confirmDelete, setConfirmDelete] = useState(false);

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
            navigation.navigate(BoardJob),
            Alert.alert('게시글이 삭제되었습니다.');
          },
        },
      ],
      { cancelable: false }
    );
  };

  // Dummy data for job details (replace with actual data retrieval logic)
  const jobDetails = {
    id: 1,
    title: '구인합니다.',
    writer: '무야호',
    date: '2021.1.16',
    count: 33,
    content: `
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
    `,
    companyInfo: {
      companyName: '기업명',
      industry: '업종',
      businessType: '사업내용',
      establishmentDate: '2023.11.12',
      employeeCount: '00명',
      CEO: 'CEO',
    },
  };

  return (
    
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >

        <View style={styles.boardTitle}>
          
        <View style={styles.buttonWrap}>
        {isLoggedIn && (userType === 'admin'||userType==='company') && (
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>수정</Text>
          </TouchableOpacity>
        )}
          
        </View>
            
            <View>
              <Text style={styles.titleText}>일자리 정보</Text>
              <Text style={styles.subtitleText}>구인 관련글 게시</Text>
            </View>
            
            <View style={styles.buttonWrap}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BoardJob')}>
            <Text style={styles.buttonText}>목록</Text>
          </TouchableOpacity>
        </View>
        </View>
        
          <View style={styles.boardView}>
            
            <Text style={styles.title}>제목: {jobDetails.title}</Text>

            <View style={styles.info}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>번호</Text>
                <Text style={styles.infoValue}>{jobDetails.id}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>글쓴이</Text>
                <Text style={styles.infoValue}>{jobDetails.writer}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>작성일</Text>
                <Text style={styles.infoValue}>{jobDetails.date}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>조회</Text>
                <Text style={styles.infoValue}>{jobDetails.count}</Text>
              </View>
            </View>

            <Text style={styles.content}>{jobDetails.content}</Text>

            <Text style={styles.title}>기업정보</Text>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>기업명</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.companyName}</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>업종</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.industry}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>사업내용</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.businessType}</Text>
              </View>
            
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>설립일</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.establishmentDate}</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>사원수</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.employeeCount}</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>대표자명</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.CEO}</Text>
              </View>

            
          </View>
          {isLoggedIn && (userType === 'admin'||userType==='company') && (
            <TouchableOpacity style={styles.deleteButton} onPress={DeletePress}>
            <Text style={styles.buttonText}>삭제</Text>
          </TouchableOpacity>
          )}

      </ScrollView>
      </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#F0F0F0',
    paddingBottom: 30,
    paddingHorizontal: 20
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  boardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    paddingTop: 20
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
  content: {
    marginBottom: 20,
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
  deleteButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
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

export default BoardJobDetail;
