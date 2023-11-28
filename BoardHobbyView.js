import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoardHobbyView = ({ route }) => {
  const { hobbyId } = route.params;
  const navigation = useNavigation();

  const [confirmDelete, setConfirmDelete] = useState(false);

  const hobbyDetails = {
    id: 1,
    title: '밴드 동아리 구합니다.',
    writer: '무야호',
    date: '2021.1.16',
    count: 33,
    image: require('./assets/images/photo1.jpg'),
    content: '밴드 동아리원을 모집합니다. 연습 시간은 매주 화, 목요일 오후 7시부터 9시까지입니다. 연락주세요!',
  };

  const handleEditPress = () => {
    navigation.navigate('BoardHobbyEdit', { hobbyId });
  };

  const handleDelete = () => {
    // 여기에서 게시글 삭제 로직을 추가
    // 이 부분에서 실제로 데이터를 삭제하거나 API를 호출하여 서버에서 삭제할 수 있습니다.

    // 삭제가 완료되면 모달을 닫고 이동 등의 작업을 수행할 수 있습니다.
    setConfirmDelete(false);
    // 예시로 Alert 창을 띄웁니다.
    Alert.alert('게시글이 삭제되었습니다.');
    // 추가로 필요한 작업 수행
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boardTitle}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Text style={styles.buttonText}>수정</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.titleText}>자유게시판</Text>
            <Text style={styles.subtitleText}>동아리, 동호회 홍보글</Text>
          </View>
          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('BoardHobby')}>
            <Text style={styles.buttonText}>목록</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boardViewWrap}>
          <View style={styles.boardView}>
            <Text style={styles.title}>제목: {hobbyDetails.title}</Text>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>번호</Text>
                <Text style={styles.infoValue}>{hobbyDetails.id}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>글쓴이</Text>
                <Text style={styles.infoValue}>{hobbyDetails.writer}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>작성일</Text>
                <Text style={styles.infoValue}>{hobbyDetails.date}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>조회</Text>
                <Text style={styles.infoValue}>{hobbyDetails.count}</Text>
              </View>
            </View>
            <Image style={styles.image} source={hobbyDetails.image} />
            <Text style={styles.content}>{hobbyDetails.content}</Text>
          </View>
          <TouchableOpacity style={styles.deleteButton} onPress={() => setConfirmDelete(true)}>
            <Text style={styles.buttonText}>삭제</Text>
          </TouchableOpacity>
        </View>

        {confirmDelete && (
          <View style={styles.confirmModal}>
          
            <Text>정말로 삭제하시겠습니까?</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.confirmButton} onPress={handleDelete}>
              <Text>확인</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => setConfirmDelete(false)}>
              <Text>취소</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
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

  boardViewWrap: {},

  boardView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
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
    height: '40%',
    resizeMode: 'contain',
    // padding: 10,
    // borderRadius: 10,
  },
  content: {
    marginEnd: 10,
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

export default BoardHobbyView;
