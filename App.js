// 수정사항(1125) - Log-in, out 상황별 기능제한 추가
// App.js - log out 상태, 게시판 접근시 바로 로그인 화면으로 이동
//Applogin.js - log in 상태, 게시판 접근 정상화
// 수정사항(1128) - 상단 메뉴의 구성 및 디자인 개편
// 취미, 취업 게시판 분리, 프론트 디자인 png로 구성 (나중에 필요에 따라 교육홍보에 링크 걸 수 있음)
import React, { useState, } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// import for About
import Company from './Company';
import Greeting from './Greeting';

// import for Applogin
import Applogin from './Applogin';

//import for Education
import BoardEduTech from './BoardEduTech';
import BoardEduArt from './BoardEduArt';
import BoardEduApply from './BoardEduApply';
import Education_Write1 from './Education_Write1';
import Education_edit1 from './Education_edit1';
import Education_view1 from './Education_view1';
import Education_Write2 from './Education_Write2';
import Education_edit2 from './Education_edit2';
import Education_view2 from './Education_view2';

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

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
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

        <TouchableOpacity style={styles.Sign} onPress={() => navigation.navigate('Signin')}>
            <Text>Log-In</Text>
          </TouchableOpacity>

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
          <Image source={require('./images/ad1.png')} style={styles.adImage} resizeMode="contain" />
          <Image source={require('./images/ad2.png')} style={styles.adImage} resizeMode="contain" />
          <Image source={require('./images/ad3.png')} style={styles.adImage} resizeMode="contain" />
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
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Applogin" component={Applogin}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Signupenterprise" component={Signupenterprise}/>
        <Stack.Screen name="Signupuser" component={Signupuser}/>
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
        <Stack.Screen name="BoardEduArt" component={BoardEduArt} />
        <Stack.Screen name='BoardEduApply' component={BoardEduApply}/>
        <Stack.Screen name='Education_Write1' component={Education_Write1}/>
        <Stack.Screen name='Education_view1' component={Education_view1}/>
        <Stack.Screen name='Education_edit1' component={Education_edit1}/>
        <Stack.Screen name='Education_Write2' component={Education_Write2}/>
        <Stack.Screen name='Education_view2' component={Education_view2}/>
        <Stack.Screen name='Education_edit2' component={Education_edit2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
