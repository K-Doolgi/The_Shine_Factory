import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const Applogin = ({ navigation }) => {
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

  return (
    <View style={styles.container}>

      <View style={styles.title}>
        <Text style={styles.titleText}>The Shine Factory</Text>
        <TouchableOpacity style={styles.Sign} onPress={() => navigation.navigate('Signin')}>
            <Text>Log-out</Text>
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
              <TouchableOpacity onPress={() => navigation.navigate('BoardEduTech')}>
                <Text>Technology</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('BoardEduArt')}>
                <Text>Art Class</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('BoardEduApply')}>
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
              <TouchableOpacity onPress={() => navigation.navigate('BoardHobby')}>
                <Text>Hobby</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('BoardJob')}>
                <Text>Job</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
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
  });

  export default Applogin;