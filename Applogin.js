// 수정사항(1128) - 상단 메뉴의 구성 및 디자인 개편
// 취미, 취업 게시판 분리, 프론트 디자인 png로 구성 (나중에 필요에 따라 교육홍보에 링크 걸 수 있음)
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const Applogin = ({ navigation }) => {
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
            <Text>Log-out</Text>
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
      fontSize: 18,
      fontWeight: 'bold',
    },
    submenu: {
      paddingBottom: 10,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default Applogin;