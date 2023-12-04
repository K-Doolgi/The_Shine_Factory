// 수정사항(1125) - Log-in, out 상황별 기능제한 추가
// App.js - log out 상태, 게시판 접근시 바로 로그인 화면으로 이동
//Applogin.js - log in 상태, 게시판 접근 정상화
// 수정사항(1128) - 상단 메뉴의 구성 및 디자인 개편
// 취미, 취업 게시판 분리, 프론트 디자인 png로 구성 (나중에 필요에 따라 교육홍보에 링크 걸 수 있음)
// 수정사항 (1130) - 로그인 API 기능 추가
// 로그인 했을 때 기존 App.js의 버튼이 log-in -> log-out으로 변경 가능
// 이 기능을 이용해서 계정별 게시판 이용권한 조정 예정
// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { AuthProvider, useAuth } from './AuthContext';

// 수정사항(1202) - 피드백을 토대로 게시판 구성요소 수정
// 상위 메뉴와 하위 서브 메뉴는 디자인적으로는 상하 관계를 가지지만,
// 변수 자체로 봤을 때는 상하위 상관없이 독립적으로 변수를 가짐 -> 새로 요구한 게시판만큼 새로 제작

// import for Education
// import for Certificate
import BoardEduCer from './BoardEduCer';
import BoardEduCerWrite from './BoardEduCerWrite';
import BoardEduCerDetail from './BoardEduCerDetail';
import BoardEduCerEdit from './BoardEduCerEdit';

// import for Company
import BoardEduCom from './BoardEduCom';
import BoardEduComWrite from './BoardEduComWrite';
import BoardEduComDetail from './BoardEduComDetail';
import BoardEduComEdit from './BoardEduComEdit';

// import for Tech
import BoardEduTech from './BoardEduTech';

import BoardEduTechWrite from './BoardEduTechWrite';

import BoardEduTechDetail from './BoardEduTechDetail';
import BoardEduTechEdit from './BoardEduTechEdit';

import BoardEduTechDetail2 from './BoardEduTechDetail2';
import BoardEduTechEdit2 from './BoardEduTechEdit2';

import BoardEduTechDetail3 from './BoardEduTechDetail3';
import BoardEduTechEdit3 from './BoardEduTechEdit3';

// import for Music Class
import BoardEduMusic from './BoardEduMusic';
import BoardEduMusicWrite from './BoardEduMusicWrite';
import BoardEduMusicDetail from './BoardEduMusicDetail';
import BoardEduMusicEdit from './BoardEduMusicEdit';

// import for Art Class
import BoardEduArt from './BoardEduArt';
import BoardEduArtWrite from './BoardEduArtWrite';
import BoardEduArtDetail from './BoardEduArtDetail';
import BoardEduArtEdit from './BoardEduArtEdit';

// import for Gym Class
import BoardEduGym from './BoardEduGym';
import BoardEduGymWrite from './BoardEduGymWrite';
import BoardEduGymDetail from './BoardEduGymDetail';
import BoardEduGymEdit from './BoardEduGymEdit';

// import for Cul Class
import BoardEduCul from './BoardEduCul';
import BoardEduCulWrite from './BoardEduCulWrite';
import BoardEduCulDetail from './BoardEduCulDetail';
import BoardEduCulEdit from './BoardEduCulEdit';

// import for Hobby Board
import BoardHobby from './BoardHobby';
import BoardHobbyView from './BoardHobbyView';
import BoardHobbyEdit from './BoardHobbyEdit';
import BoardHobbyWrite from './BoardHobbyWrite';

// import for Job Board
import BoardJob from './BoardJob';
import BoardJobDetail from './BoardJobDetail';
import BoardJobEdit from './BoardJobEdit';
import BoardJobWrite from './BoardJobWrite';

// import for Area Board
import BoardArea from './BoardArea';
import BoardAreaView from './BoardAreaView';
import BoardAreaEdit from './BoardAreaEdit';
import BoardAreaWrite from './BoardAreaWrite';

// import for Per Board
import BoardPer from './BoardPer';
import BoardPerView from './BoardPerView';
import BoardPerEdit from './BoardPerEdit';
import BoardPerWrite from './BoardPerWrite';

// import for Heal Board
import BoardHeal from './BoardHeal';
import BoardHealView from './BoardHealView';
import BoardHealEdit from './BoardHealEdit';
import BoardHealWrite from './BoardHealWrite';


// import for Sign-in, Sign-up
import Signin from './Signin';
import Signup from './Signup';
import FindPW from './FindPW';
import ResetPW from './ResetPW';


const Stack = createStackNavigator();

// 수정사항 (1130) - 로그인 API 기능 추가
// 로그인 했을 때 기존 App.js의 버튼이 log-in -> log-out으로 변경 가능
// 이 기능을 이용해서 계정별 게시판 이용권한 조정 예정
const HomeScreen = ({ navigation }) => {
  const { isLoggedIn, logout } = useAuth(); // useAuth 추가

  useEffect(() => {
    // isLoggedIn이 변경될 때 실행되는 로직
    console.log('isLoggedIn 상태:', isLoggedIn);
  }, [isLoggedIn]); // isLoggedIn이 변경될 때만 실행
  
  const [showCultureSubMenu, setShowCultureSubMenu] = useState(false);
  const [showEducationSubMenu, setShowEducationSubMenu] = useState(false);
  const [showInformationSubMenu, setShowInformationSubMenu] = useState(false);

  const toggleCultureSubMenu = () => {
    setShowCultureSubMenu(!showCultureSubMenu);
    setShowEducationSubMenu(false);
    setShowInformationSubMenu(false);
  };

  const toggleEducationSubMenu = () => {
    setShowEducationSubMenu(!showEducationSubMenu);
    setShowCultureSubMenu(false);
    setShowInformationSubMenu(false);
  };

  const toggleInformationSubMenu = () => {
    setShowInformationSubMenu(!showInformationSubMenu);
    setShowEducationSubMenu(false);
    setShowCultureSubMenu(false);
  };
  

  return (
    <SafeAreaView style={styles.statusbar}>
    <View style={styles.container}>

      <View style={styles.title}>

        <Image source={require('./images/brand.jpg')} style={styles.Imagetitle} resizeMode="contain" />
        
        <View>
        {isLoggedIn ? (
              // 로그인된 경우
              <TouchableOpacity style={styles.Sign} onPress={() => logout()}>
                <Text>Log-Out</Text>
              </TouchableOpacity>
            ) : (
              // 로그아웃된 경우
              <TouchableOpacity style={styles.Sign} onPress={() => navigation.navigate('Signin')}>
                <Text>Log-In</Text>
              </TouchableOpacity>
            )}
        </View>
          

      </View>


    <View style={styles.menu}>
        
      <View>

          <TouchableOpacity onPress={toggleCultureSubMenu}>
          <Image source={require('./images/culture.jpg')} style={styles.Imageicon} resizeMode="contain" />
          </TouchableOpacity>

          {showCultureSubMenu && (
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('BoardEduMusic')}>
                <Text  style={styles.submenu}>음악 교실</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('BoardEduArt')}>
                <Text  style={styles.submenu}>미술 교실</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('BoardEduGym')}>
                <Text  style={styles.submenu}>운동 교실</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('BoardEduCul')}>
                <Text  style={styles.submenu}>예술 교실</Text>
              </TouchableOpacity>
            
          </View>
          )}

        </View>

        <View>

          <TouchableOpacity onPress={toggleEducationSubMenu}>
          <Image source={require('./images/education.jpg')} style={styles.Imageicon} resizeMode="contain" />
          </TouchableOpacity>

          {showEducationSubMenu && (
            <View> 

              <TouchableOpacity onPress={() => navigation.navigate('BoardEduCer')}>
                <Text  style={styles.submenu}>자격증 과정</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('BoardEduCom')}>
                <Text  style={styles.submenu}>창업 과정</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('BoardEduTech')}>
                <Text  style={styles.submenu}>전문 기술 과정</Text>
              </TouchableOpacity>

            </View>
          )}
        </View>

        <View>

          <TouchableOpacity onPress={toggleInformationSubMenu}>
          <Image source={require('./images/information.jpg')} style={styles.Imageicon} resizeMode="contain" />
          </TouchableOpacity>
            
          {showInformationSubMenu && (
            <View>

              <TouchableOpacity onPress={() => navigation.navigate('BoardJob')}>
                <Text style={styles.submenu}>일자리 정보</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('BoardArea')}>
                <Text style={styles.submenu}>지역별 여행</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('BoardPer')}>
                <Text style={styles.submenu}>공연 및 전시회</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('BoardHeal')}>
                <Text style={styles.submenu}>건강 정보</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('BoardHobby')}>
                <Text style={styles.submenu}>동호회</Text>
              </TouchableOpacity>

            </View>
            )}

        </View>
          

      </View>

      <View style={styles.contents}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.imageContainer}>
          <Image source={require('./images/tsf_main.png')} style={styles.Image} resizeMode="cover" />
        </View>

        <View style={styles.adContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('BoardEduTechDetail',{ EducationId: 'EducationId' })}>
        <Image source={require('./images/ad1.png')} style={styles.adImage} resizeMode="contain" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('BoardEduTechDetail2',{ EducationId2: 'EducationId2' })}>
        <Image source={require('./images/ad2.png')} style={styles.adImage} resizeMode="contain" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('BoardEduTechDetail3',{ EducationId3: 'EducationId3' })}>
        <Image source={require('./images/ad3.png')} style={styles.adImage} resizeMode="contain" />
        </TouchableOpacity>
                   
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('./images/company_information.png')} style={styles.LowImage} resizeMode="contain" />
        </View>
      </ScrollView>
    </View>

    </View>
    </SafeAreaView>
  );
};

  const styles = StyleSheet.create({
    statusbar: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: '#000000',
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: '#ffffff',
      
      padding: 12,
    },
    // 수정사항(1128) - 이미지 배치에 관한 스타일 서식
    // 화면의 끝 부분에서 바운스 현상 없이 원하는 곳까지 스크롤 할 수 있도록 설정
    contents: {
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
    },
    imageContainer: {
      width: '100%',
      aspectRatio: 16 / 9,
    },
    Imagetitle: {
      flex: 1,
      width: 110,
      height: 50,
      marginRight: 100,
      
    },
    Imageicon: {
      width: 115,
      height: 110,
      aspectRatio: 1 / 1,
      marginHorizontal: 2,
    },
    Image: {
      flex: 1,
      width: '100%',
      height: undefined,
      aspectRatio: 16 / 9,
    },
    adContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    adImage: {
      width: '100%',
      height: undefined,
      aspectRatio: 16 / 9,
      marginBottom: 5,
    },
    LowImage: {
      width: '100%',
      height: undefined,
      aspectRatio: 16 / 9,
    },
    // 수정사항(1128) - 이미지 파일에 대한 스타일 서식 fin.

  title: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  titleText: {
    fontSize: 24,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Sign: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  menuItem: {
    padding: 10,
      fontSize: 18,
      fontWeight: 'bold',
  },
  submenu: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  Maintitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

const App = () => {
  return (
    
    <NavigationContainer>

      <AuthProvider>

      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>

        <Stack.Screen name="FindPW" component={FindPW}/>
        <Stack.Screen name="ResetPW" component={ResetPW}/> 

        <Stack.Screen name="BoardEduMusic" component={BoardEduMusic} />
        <Stack.Screen name='BoardEduMusicWrite' component={BoardEduMusicWrite}/>
        <Stack.Screen name="BoardEduMusicDetail" component={BoardEduMusicDetail} />
        <Stack.Screen name='BoardEduMusicEdit' component={BoardEduMusicEdit}/>

        <Stack.Screen name="BoardEduArt" component={BoardEduArt} />
        <Stack.Screen name='BoardEduArtWrite' component={BoardEduArtWrite}/>
        <Stack.Screen name="BoardEduArtDetail" component={BoardEduArtDetail} />
        <Stack.Screen name='BoardEduArtEdit' component={BoardEduArtEdit}/>

        <Stack.Screen name="BoardEduGym" component={BoardEduGym} />
        <Stack.Screen name='BoardEduGymWrite' component={BoardEduGymWrite}/>
        <Stack.Screen name="BoardEduGymDetail" component={BoardEduGymDetail} />
        <Stack.Screen name='BoardEduGymEdit' component={BoardEduGymEdit}/>

        <Stack.Screen name="BoardEduCul" component={BoardEduCul} />
        <Stack.Screen name='BoardEduCulWrite' component={BoardEduCulWrite}/>
        <Stack.Screen name="BoardEduCulDetail" component={BoardEduCulDetail} />
        <Stack.Screen name='BoardEduCulEdit' component={BoardEduCulEdit}/>

        <Stack.Screen name="BoardEduCer" component={BoardEduCer} />
        <Stack.Screen name='BoardEduCerWrite' component={BoardEduCerWrite}/>
        <Stack.Screen name="BoardEduCerDetail" component={BoardEduCerDetail} />
        <Stack.Screen name='BoardEduCerEdit' component={BoardEduCerEdit}/>

        <Stack.Screen name="BoardEduCom" component={BoardEduCom} />
        <Stack.Screen name='BoardEduComWrite' component={BoardEduComWrite}/>
        <Stack.Screen name="BoardEduComDetail" component={BoardEduComDetail} />
        <Stack.Screen name='BoardEduComEdit' component={BoardEduComEdit}/>
        
        <Stack.Screen name="BoardEduTech" component={BoardEduTech} />
        <Stack.Screen name='BoardEduTechWrite' component={BoardEduTechWrite}/>

        <Stack.Screen name="BoardEduTechDetail" component={BoardEduTechDetail} />
        <Stack.Screen name='BoardEduTechEdit' component={BoardEduTechEdit}/>

        <Stack.Screen name='BoardEduTechDetail2' component={BoardEduTechDetail2}/>
        <Stack.Screen name='BoardEduTechEdit2' component={BoardEduTechEdit2}/>

        <Stack.Screen name='BoardEduTechDetail3' component={BoardEduTechDetail3}/>
        <Stack.Screen name='BoardEduTechEdit3' component={BoardEduTechEdit3}/>

        <Stack.Screen name="BoardHobby" component={BoardHobby} />
        <Stack.Screen name='BoardHobbyView' component={BoardHobbyView}/>
        <Stack.Screen name='BoardHobbyEdit' component={BoardHobbyEdit}/>
        <Stack.Screen name='BoardHobbyWrite' component={BoardHobbyWrite}/>

        <Stack.Screen name="BoardJob" component={BoardJob} />
        <Stack.Screen name="BoardJobDetail" component={BoardJobDetail} />
        <Stack.Screen name="BoardJobEdit" component={BoardJobEdit} />
        <Stack.Screen name="BoardJobWrite" component={BoardJobWrite} />

        <Stack.Screen name="BoardArea" component={BoardArea} />
        <Stack.Screen name='BoardAreaView' component={BoardAreaView}/>
        <Stack.Screen name='BoardAreaEdit' component={BoardAreaEdit}/>
        <Stack.Screen name='BoardAreaWrite' component={BoardAreaWrite}/>

        <Stack.Screen name="BoardPer" component={BoardPer} />
        <Stack.Screen name='BoardPerView' component={BoardPerView}/>
        <Stack.Screen name='BoardPerEdit' component={BoardPerEdit}/>
        <Stack.Screen name='BoardPerWrite' component={BoardPerWrite}/>

        <Stack.Screen name="BoardHeal" component={BoardHeal} />
        <Stack.Screen name='BoardHealView' component={BoardHealView}/>
        <Stack.Screen name='BoardHealEdit' component={BoardHealEdit}/>
        <Stack.Screen name='BoardHealWrite' component={BoardHealWrite}/>
    
      </Stack.Navigator>

      </AuthProvider>

    </NavigationContainer>
    
  );
};

export default App;
