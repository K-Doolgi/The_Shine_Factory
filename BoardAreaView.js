// BoardAreaView.js
// 수정사항 (1128) - 디자인적인 개선과 양식 통일 위해 UI와 디자인 개편
// 수정사항 (1130) - 로그인 API 기능 추가
// 취미 -> 회원만 수정 및 작성할 수 있도록 권한 부여 (모든 유형의 회원)
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';
import BoardArea from './BoardArea';

const BoardAreaView = ({ route, navigation: propNavigation }) => {
  const { AreaId } = route.params;

  const navigation = useNavigation();

  const { isLoggedIn, userType } = useAuth();

  const handleAreaEdit = () => {
    // 작성 버튼 클릭 시 로직
    if (isLoggedIn && (userType === 'admin' || userType === 'company' || userType === 'user')) {
      // 로그인 상태이고, 유저타입이 admin 또는 company, user인 경우에만 작성 가능
      propNavigation.navigate('BoardAreaEdit', { AreaId: AreaId });
    } else {
      // 그 외의 경우에는 작성 권한이 없음을 알림
      alert('작성 권한이 없습니다.');
    }
  };
  const [confirmDelete, setConfirmDelete] = useState(false);

  const AreaDetails = {
    id: 1,
    title: '부산 광안리 (여행지 추천)',
    writer: '관리자',
    date: '2021.1.16',
    image: require('./images/Area.jpg'),
    content: '부산 광안리는 푸른 바다와 환상적인 야경이 어우러진 여행지입니다. 해변가 카페에서 바다를 바라보며 즐기는 여유, 광안대교 밑에서 별빛 같은 야경을 감상하는 순간은 잊지 못할 추억이 될 것입니다. 또한, 부산의 특색 있는 맛집과 쇼핑도 즐길 수 있습니다. 광안리에서 당신만의 특별한 추억을 만들어보세요.',
  };

  // 수정사항(1128) - 삭제 버튼과 경고창 추가
  // 삭제 버튼 클릭 시, 경고창이 뜨도록 제작
  const handleDelete = () => {
    // 여기에서 게시글 삭제 로직을 추가
    // 이 부분에서 실제로 데이터를 삭제하거나 API를 호출하여 서버에서 삭제할 수 있습니다.

    // 삭제가 완료되면 모달을 닫고 이동 등의 작업을 수행할 수 있습니다.
    setConfirmDelete(false);
    // 예시로 Alert 창을 띄웁니다.
    Alert.alert('게시글이 삭제되었습니다.');
    // 추가로 필요한 작업 수행
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
            navigation.navigate(BoardArea),
            Alert.alert('게시글이 삭제되었습니다.');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boardTitle}>

        <View>
        {isLoggedIn && (userType === 'admin' || userType === 'user') && (
          <TouchableOpacity style={styles.editButton} onPress={handleAreaEdit}>
          <Text style={styles.buttonText}>수정</Text>
          </TouchableOpacity>
        )}
        </View>

          <View>
            <Text style={styles.titleText}>지역별 여행 정보</Text>
            <Text style={styles.subtitleText}>카테고리 별 지역 정보글 게시</Text>
          </View>

          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('BoardArea')}>
            <Text style={styles.buttonText}>목록</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boardViewWrap}>
          <View style={styles.boardView}>
            <Text style={styles.title}>제목: {AreaDetails.title}</Text>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>번호</Text>
                <Text style={styles.infoValue}>{AreaDetails.id}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>글쓴이</Text>
                <Text style={styles.infoValue}>{AreaDetails.writer}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>작성일</Text>
                <Text style={styles.infoValue}>{AreaDetails.date}</Text>
              </View>
            </View>
            <Image style={styles.image} source={AreaDetails.image} />

            <Text style={styles.content}>{AreaDetails.content}</Text>

          </View>

          {/* // 수정사항(1128) - 삭제 버튼과 경고창 추가
              // 삭제 버튼 클릭 시, 경고창이 뜨도록 제작 */}
          {isLoggedIn && (userType === 'admin' || userType === 'user') && (
            <TouchableOpacity style={styles.deleteButton} onPress={DeletePress}>
            <Text style={styles.buttonText}>삭제</Text>
            </TouchableOpacity>
          )}    
          

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
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
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
    backgroundColor: '#F7C524',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: '#F7C524',
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

export default BoardAreaView;
