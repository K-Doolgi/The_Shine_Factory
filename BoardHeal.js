//BoardHeal.js
import React, { useState, useEffect } from 'react';
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

const BoardHeal = ({ navigation: propNavigation }) => {
  const { isLoggedIn, userType } = useAuth();
  const handleWrite = () => {
    // 작성 버튼 클릭 시 로직
    if (isLoggedIn && (userType === 'admin' || userType === 'company'|| userType === 'user')) {
      // 로그인 상태이고, 유저타입이 admin 또는 company인 경우에만 작성 가능
      propNavigation.navigate('BoardHealWrite');
    } else {
      // 그 외의 경우에는 작성 권한이 없음을 알림
      alert('작성 권한이 없습니다.');
    }
  };
  const HealData = [
    { id: 1, title: '오늘의 건강 상식 (23/12/04)', writer: '관리자', date: '2023.12.04'},
    // Add more data as needed
  ];

  // 수정사항(1128) - 게시글 8개당 한페이지 씩 넘어가도록 구현
  const navigation = useNavigation();
  const pageSize = 8; // 페이지당 보여질 게시글 수
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedHealData = HealData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // 여기서도 게시글 데이터 호출을 어떤 방식으로 하는지 감이 안잡혀,
  // 만들고 방치
  const totalPages = Math.ceil(HealData.length / pageSize);

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card} key={item.id}>
      <TouchableOpacity onPress={() => navigation.navigate('BoardHealView', { HealId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
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
          {isLoggedIn && (userType === 'admin'||userType === 'user') && (
            <TouchableOpacity
            style={styles.button}
            onPress={handleWrite}
          >
            <Text style={styles.buttonText}>등록</Text>
          </TouchableOpacity>
          )}
            
          </View>


          <View>
            <Text style={styles.titleText}>건강 정보 게시판</Text>
            <Text style={styles.subtitleText}>카테고리별 지역 정보글 게시</Text>
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

        {/* 수정사항(1128) - 게시글 8개당 한 페이지를 이뤄 넘길 수 있도록 수정 */}
        <FlatList
          data={paginatedHealData}
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
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
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
    backgroundColor: '#F7C524',
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
    backgroundColor: '#F7C524',
    padding: 8,
    borderRadius: 5,
  },
});

export default BoardHeal;
