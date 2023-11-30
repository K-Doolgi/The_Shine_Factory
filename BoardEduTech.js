import React ,{useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';

const BoardEduTech = () => {

  const { isLoggedIn, userType } = useAuth();
  

  const TechData = [
    { id: 1, title: '3D 프린팅과 3D펜 교육', writer: '관리자', date: '2023.11.12', screen: 'BoardEduTechDetail' },
    { id: 2, title: 'SW코딩교육', writer: '관리자', date: '2023.11.12', screen: 'BoardEduTechDetail2' },
    { id: 3, title: '미디어콘텐츠개발 교육', writer: '관리자', date: '2023.11.12', screen: 'BoardEduTechDetail3' },
  ];


  // Card -> flatlist 하나로 게시글 여러개를 불러 올 수 있는 구조인지, 
  // 어떤 방식으로 DB에서 데이터를 갖고오는지 몰라서 일단 제작후 방치
  const navigation = useNavigation();
  const pageSize = 8; // 페이지당 보여질 게시글 수
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedTechData = TechData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
    
  );

  const totalPages = Math.ceil(TechData.length / pageSize);

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card} key={item.id}>
      <TouchableOpacity onPress={() => navigation.navigate(item.screen, { EducationId: item.id })}>
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
          {isLoggedIn && (userType === 'admin') && (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BoardEduTechWrite')}>
              <Text style={styles.buttonText}>등록</Text>
            </TouchableOpacity>
          )}
          </View>

          <View>
            <Text style={styles.titleText}>교육 게시판</Text>
            <Text style={styles.subtitleText}>카테고리별 강의 홍보글 게시</Text>
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

      <FlatList
        data={TechData}
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
    padding: 20,
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

export default BoardEduTech;