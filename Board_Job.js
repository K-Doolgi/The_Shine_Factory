// Board_Job.js
// 수정사항(1130) - 유저타입에 따른 게시판 기능 권한 차등 부여
// 취업 게시판 - 일반유저를 제외한, 관리자, 기업만 게시판에 작성 및 수정 가능
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';

const BoardJob = ({ navigation: propNavigation }) => {
  const { isLoggedIn, userType } = useAuth();
  const handleWrite = () => {
    // 작성 버튼 클릭 시 로직
    if (isLoggedIn && (userType === 'admin' || userType === 'company')) {
      // 로그인 상태이고, 유저타입이 admin 또는 company인 경우에만 작성 가능
      propNavigation.navigate('BoardJobWrite');
    } else {
      // 그 외의 경우에는 작성 권한이 없음을 알림
      alert('작성 권한이 없습니다.');
    }
  };
  const jobData = [
    { id: 1, title: '구인합니다.', writer: '김이름', date: '2021.1.15', count: 33 },
    // Add more data as needed
  ];
  // 수정사항(1128) - 게시글 8개당 한페이지 씩 넘어가도록 구현
  // Card -> flatlist 하나로 게시글 여러개를 불러 올 수 있는 구조인지, 
  // 어떤 방식으로 DB에서 데이터를 갖고오는지 몰라서 일단 제작후 방치
  const navigation = useNavigation();
  const pageSize = 8; // 페이지당 보여질 게시글 수
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedJobData = jobData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
    
  );

  const totalPages = Math.ceil(jobData.length / pageSize);

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card} key={item.id}>
      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    
      <View style={styles.container}>
        <View style={styles.boardTitle}>
          <View style={styles.buttonWrap}>
          {isLoggedIn && (userType === 'admin'||userType==='company') && (
            <TouchableOpacity
            style={styles.button}
            onPress={handleWrite}
          >
            <Text style={styles.buttonText}>등록</Text>
          </TouchableOpacity>
          )}
            
          </View>

          <View>
            <Text style={styles.titleText}>취업 관련 게시판</Text>
            <Text style={styles.subtitleText}>구인 관련글 게시</Text>
          </View>

          <View style={styles.buttonWrap}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 수정사항(1128) - 게시글 8개당 한페이지 씩 넘어가도록 구현 */}
        {/* Card -> flatlist 하나로 게시글 여러개를 불러 올 수 있는 구조인지,  */}
        {/* 어떤 방식으로 DB에서 데이터를 갖고오는지 몰라서 일단 제작후 방치 */}
        <FlatList
          data={paginatedJobData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        
        <View style={styles.paginationContainer}>
          
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => handlePageChange(currentPage - 1)}
          >
            <Text style={styles.buttonText}>이전</Text>
          </TouchableOpacity>
          <Text>{`페이지: ${currentPage} / ${totalPages}`}</Text>
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => handlePageChange(currentPage + 1)}
          >
            <Text style={styles.buttonText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#F0F0F0',
    padding: 10,
  },
  boardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    paddingTop: 20,
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
  card: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoText: {
    color: 'gray',
  },
  buttonWrap: {
    alignItems: 'center',
    marginTop: 20,
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
  },
});

export default BoardJob;
