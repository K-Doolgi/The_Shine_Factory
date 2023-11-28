// 수정사항(1125) - Log-in, out 상황별 기능제한 추가
// App.js - log out 상태, 게시판 접근시 바로 로그인 화면으로 이동
//Applogin.js - log in 상태, 게시판 접근 정상화
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
// import GifPlayer from 'react-native-gif';

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

const gifs = [
  require('./images/tsf_main1.gif'),
  require('./images/tsf_main2.gif'),
  require('./images/tsf_main3.gif'),
];

const getRandomGif = () => {
  const randomIndex = Math.floor(Math.random() * gifs.length);
  return gifs[randomIndex];
};

const HomeScreen = ({ navigation }) => {
  const [showAboutSubMenu, setShowAboutSubMenu] = useState(false);
  const [showEducationSubMenu, setShowEducationSubMenu] = useState(false);
  const [showBoardSubMenu, setShowBoardSubMenu] = useState(false);

  const toggleAboutSubMenu = () => {
    setShowAboutSubMenu(!showAboutSubMenu);
    setShowBoardSubMenu(false);
    setShowEducationSubMenu(false);
  };

  const toggleEducationSubMenu = () => {
    setShowEducationSubMenu(!showEducationSubMenu);
    setShowBoardSubMenu(false);
    setShowAboutSubMenu(false);
  };

  const toggleBoardSubMenu = () => {
    setShowBoardSubMenu(!showBoardSubMenu);
    setShowEducationSubMenu(false);
    setShowAboutSubMenu(false);
  };

  // const [currentGif, setCurrentGif] = useState(getRandomGif());

  // useEffect(() => {
  //   setCurrentGif(getRandomGif());
  // }, []);

  return (
    <View style={styles.container}>
    
      <View style={styles.title}>
        <Text style={styles.titleText}>The Shine Factory</Text>
        <TouchableOpacity style={styles.Sign} onPress={() => navigation.navigate('Signin')}>
            <Text>Log-in</Text>
          </TouchableOpacity>
      </View>
      
      <View style={styles.menu}>
      <View style={styles.menuItem}>
          <TouchableOpacity onPress={toggleAboutSubMenu}>
            <Text>About</Text>
          </TouchableOpacity>
          {showAboutSubMenu && (
            <View style={styles.submenu}>
            <TouchableOpacity onPress={() => navigation.navigate('Company')}>
              <Text>The Shine Factory</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
              <Text>Greetnig</Text>
            </TouchableOpacity>
          </View>
          )}
        </View>
        
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={toggleEducationSubMenu}>
            <Text>Education</Text>
          </TouchableOpacity>
          {showEducationSubMenu && (
            <View style={styles.submenu}>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text>Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text>Art Class</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text>Apply</Text>
            </TouchableOpacity>
          </View>
          )}
        </View>
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={toggleBoardSubMenu}>
            <Text>Board</Text>
          </TouchableOpacity>
          {showBoardSubMenu && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text>Hobby</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text>Job</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        
      </View>
      {/* <GifPlayer
        gifSource={currentGif}
        style={styles.gif}
      />
      <View style={styles.overlay}>
        <Text style={styles.Maintitle}>The Shine Factory</Text>
      </View> */}
      
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
  },
  submenu: {
    marginLeft: 10,
    marginTop: 5,
  },
  // gif: {
  //   width: '100%',
  //   height: '100%',
  // },
  // overlay: {
  //   ...StyleSheet.absoluteFillObject,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
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
