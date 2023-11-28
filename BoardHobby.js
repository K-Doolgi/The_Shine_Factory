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

const BoardHobby = () => {
  const HobbyData = [
    { id: 1, title: '밴드 동아리 구합니다.', writer: '무야호', date: '2021.1.16', count: 33 },
    // Add more data as needed
  ];

  // 수정사항(1128) - 게시글 8개당 한페이지 씩 넘어가도록 구현
  const navigation = useNavigation();
  const pageSize = 8; // 페이지당 보여질 게시글 수
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedHobbyData = HobbyData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // 여기서도 게시글 데이터 호출을 어떤 방식으로 하는지 감이 안잡혀,
  // 만들고 방치
  const totalPages = Math.ceil(HobbyData.length / pageSize);

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card} key={item.id}>
      <TouchableOpacity onPress={() => navigation.navigate('BoardHobbyView', { HobbyId: item.id })}>
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('BoardHobbyWrite')}
            >
              <Text style={styles.buttonText}>등록</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.titleText}>자유게시판</Text>
            <Text style={styles.subtitleText}>동아리, 동호회 홍보글</Text>
          </View>

          <View style={styles.buttonWrap}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Applogin')}
            >
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 수정사항(1128) - 게시글 8개당 한 페이지를 이뤄 넘길 수 있도록 수정 */}
        <FlatList
          data={paginatedHobbyData}
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

export default BoardHobby;
