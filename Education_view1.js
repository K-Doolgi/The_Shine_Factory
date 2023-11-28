import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Education_view1 = ({ route }) => {
  const { Education_Id } = route.params;

  const Educationdetails = {
    id: 1,
    title: '교육 게시판',
    content: '교육 관련 게시판 입니다.',
    image: require('./assets/images/photo1.jpg'),
  };

  const navigation = useNavigation();

  const handleEditPress = () => {
    navigation.navigate('Education_edit1', { Education_Id });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>

        <View style={styles.EducationTitle}>

          <View style={styles.buttonWrap}>
            <TouchableOpacity style={styles.button} onPress={handleEditPress}>
              <Text style={styles.buttonText}>수정</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.titleText}>교육게시판</Text>
            <Text style={styles.subtitleText}>카테고리별 강의 홍보글 게시</Text>
          </View>

          <View style={styles.buttonWrap}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BoardEduTech')}>
              <Text style={styles.buttonText}>목록</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.boardView}>
          <Text style={styles.title}>{Educationdetails.title}</Text>
          <Image style={styles.image} source={Educationdetails.image} />
          <Text style={styles.content}>{Educationdetails.content}</Text>
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: StatusBar.currentHeight,
    backgroundColor: '#F0F0F0',
    paddingBottom: 30,
    paddingHorizontal: 20
  },
  EducationTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    paddingTop: 20
  },

  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
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
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 30,
    borderRadius: 10,
  },
  content: {
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
});

export default Education_view1;