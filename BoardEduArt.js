import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const BoardEduArt = () => {

  const ArtData = [
    { id: 1, title: '교육 게시판', content: '교육 관련 게시판 입니다.', image: '' },
    // Add more data as needed
  ];
  

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card} key={item.id}>
      <TouchableOpacity onPress={() => navigation.navigate('Education_view1', { Education_Id: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardContent}>{item.content}</Text>
      </TouchableOpacity>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.boardTitle}>

          <View style={styles.buttonWrap}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Education_Write1')}>
              <Text style={styles.buttonText}>등록</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.titleText}>교육게시판</Text>
            <Text style={styles.subtitleText}>카테고리별 강의 홍보글 게시</Text>
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

      <FlatList
        data={ArtData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      
      
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
  cardContent: {
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
});

export default BoardEduArt;