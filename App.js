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
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { AuthProvider, useAuth } from './AuthContext';

// import for About
import Company from './Company';
import Greeting from './Greeting';

// import for Applogin
import Applogin from './Applogin';

//import for Education
import BoardEduTech from './BoardEduTech';

import BoardEduTechWrite from './BoardEduTechWrite';

import BoardEduTechDetail from './BoardEduTechDetail';
import BoardEduTechEdit from './BoardEduTechEdit';

import BoardEduTechDetail2 from './BoardEduTechDetail2';
import BoardEduTechEdit2 from './BoardEduTechEdit2';

import BoardEduTechDetail3 from './BoardEduTechDetail3';
import BoardEduTechEdit3 from './BoardEduTechEdit3';


// import for Art Class
import BoardEduArt from './BoardEduArt';
import BoardEduArtWrite from './BoardEduArtWrite';
import BoardEduArtDetail from './BoardEduArtDetail';
import BoardEduArtEdit from './BoardEduArtEdit';


// import for Job Board
import BoardJob from './Board_Job';
import BoardJobDetail from './BoardJobDetail';
import BoardJobEdit from './BoardJobEdit';
import BoardJobWrite from './BoardJobWrite';

// import for Hobby Board
import BoardHobby from './BoardHobby';
import BoardHobbyView from './BoardHobbyView';
import BoardHobbyEdit from './BoardHobbyEdit';
import BoardHobbyWrite from './BoardHobbyWrite';

// import for Sign-in, Sign-up
import Signin from './Signin';
import Signup from './Signup';
import Signupuser from './Signupuser';
import Signupenterprise from './Signupenterprise';
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
  
  const [showAboutSubMenu, setShowAboutSubMenu] = useState(false);
  const [showEducationSubMenu, setShowEducationSubMenu] = useState(false);

  const toggleAboutSubMenu = () => {
    setShowAboutSubMenu(!showAboutSubMenu);
    setShowEducationSubMenu(false);
  };

  const toggleEducationSubMenu = () => {
    setShowEducationSubMenu(!showEducationSubMenu);
    setShowAboutSubMenu(false);
  };

  return (
    <View style={styles.container}>

      <View style={styles.title}>

      <Text style={styles.titleText}>The Shine Factory</Text>
        
        
        
        
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

    <View style={styles.menu}>
        
      <View>

          <TouchableOpacity onPress={toggleAboutSubMenu}>
            <Text  style={styles.menuItem}>About</Text>
          </TouchableOpacity>

          {showAboutSubMenu && (
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('Company')}>
              <Text style={styles.submenu}>The Shine Factory</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
              <Text style={styles.submenu}>Greetnig</Text>
            </TouchableOpacity>

          </View>
          )}

        </View>

        <View>

          <TouchableOpacity onPress={toggleEducationSubMenu}>
            <Text  style={styles.menuItem}>Education</Text>
          </TouchableOpacity>

          {showEducationSubMenu && (
            <View>

              <TouchableOpacity onPress={() => navigation.navigate('BoardEduTech')}>
                <Text  style={styles.submenu}>Technology</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('BoardEduArt')}>
                <Text  style={styles.submenu}>Art Class</Text>
              </TouchableOpacity>

            </View>
          )}
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('BoardHobby')}>
            <Text style={styles.menuItem}>Hobby</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('BoardJob')}>
            <Text style={styles.menuItem}>Job</Text>
          </TouchableOpacity>
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
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: 'white',
      padding: 20,
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
    fontSize: 24,
    paddingBottom: 20,
    paddingTop: 20,
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

        <Stack.Screen name="Applogin" component={Applogin}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>

        <Stack.Screen name="Signupenterprise" component={Signupenterprise}/>
        <Stack.Screen name="Signupuser" component={Signupuser}/>

        <Stack.Screen name="FindPW" component={FindPW}/>
        <Stack.Screen name="ResetPW" component={ResetPW}/> 

        <Stack.Screen name="Company" component={Company} />
        <Stack.Screen name="Greeting" component={Greeting} />

        <Stack.Screen name="BoardHobby" component={BoardHobby} />
        <Stack.Screen name='BoardHobbyView' component={BoardHobbyView}/>
        <Stack.Screen name='BoardHobbyEdit' component={BoardHobbyEdit}/>
        <Stack.Screen name='BoardHobbyWrite' component={BoardHobbyWrite}/>

        <Stack.Screen name="BoardJob" component={BoardJob} />
        <Stack.Screen name="BoardJobDetail" component={BoardJobDetail} />
        <Stack.Screen name="BoardJobEdit" component={BoardJobEdit} />
        <Stack.Screen name="BoardJobWrite" component={BoardJobWrite} />

        <Stack.Screen name="BoardEduTech" component={BoardEduTech} />
        <Stack.Screen name='BoardEduTechWrite' component={BoardEduTechWrite}/>

        <Stack.Screen name="BoardEduTechDetail" component={BoardEduTechDetail} />
        <Stack.Screen name='BoardEduTechEdit' component={BoardEduTechEdit}/>

        <Stack.Screen name='BoardEduTechDetail2' component={BoardEduTechDetail2}/>
        <Stack.Screen name='BoardEduTechEdit2' component={BoardEduTechEdit2}/>

        <Stack.Screen name='BoardEduTechDetail3' component={BoardEduTechDetail3}/>
        <Stack.Screen name='BoardEduTechEdit3' component={BoardEduTechEdit3}/>
        
        <Stack.Screen name="BoardEduArt" component={BoardEduArt} />
        <Stack.Screen name='BoardEduArtWrite' component={BoardEduArtWrite}/>
        <Stack.Screen name="BoardEduArtDetail" component={BoardEduArtDetail} />
        <Stack.Screen name='BoardEduArtEdit' component={BoardEduArtEdit}/>
        
        
        
        
        
        
      </Stack.Navigator>

      </AuthProvider>

    </NavigationContainer>
    
  );
};

export default App;
