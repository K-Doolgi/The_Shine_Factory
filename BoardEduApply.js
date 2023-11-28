import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const BoardEduApply = () => {
  const ApplyData = [
    { id: 1, title: '교육 게시판', content: '교육 관련 게시판 입니다.', image: '' },
    // Add more data as 
  ];

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card} key={item.id}>
      <TouchableOpacity onPress={() => navigation.navigate('Education_view2', { Educaiton_Id: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardContent}>{item.content}</Text>
      </TouchableOpacity>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.boardTitle}>
        <Text style={styles.titleText}>교육게시판2</Text>
      </View>
      <FlatList
        data={ApplyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Education_Write2')}>
          <Text style={styles.buttonText}>등록</Text>
        </TouchableOpacity>
        <View style={styles.buttonWrap}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Applogin')}
          >
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    marginVertical: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
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

export default BoardEduApply;