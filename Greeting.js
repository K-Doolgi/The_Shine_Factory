import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';

const Greeting = () => {
  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
        
          <Text style={styles.title}>The Shine Factory</Text>
        

        <Text style={styles.title}>CEO 인사말</Text>
        
        <Text style={styles.description}>
        {'\n'}
        경제적, 지역적 등의 환경적 요소와 상관없이 이런 교육을 접하지 못하는 학생이 있는 곳은 어디든{'\n'}{'\n'}
        SW교육 및 메이커 교육 기회를 제공 받을 수 있도록 노력 할 것입니다.{'\n'}{'\n'}
        </Text>

        <Text style={styles.projectDescription}>
        누구나 IT 혁신의 축복을 누리는 세상을 꿈꿉니다.{'\n'}
        </Text>
        
        <Text style={styles.description}>
        {'\n'}
        정보통신기술의 발전으로 인한 4차 산업혁명은 아무도 경험하지 못한 새로운 사회로의 변화를 이끌고 있습니다.{'\n'}{'\n'}
        이러한 사회변화가 더 나은 사회를 위한 징검다리가 되기 위해서는 사회혁신을 위한 교육과 지식의 확산이 필수적입니다.{'\n'}{'\n'}
        이러한 교육과 지식은 모두가 수혜자가 될 수 있는 소중한 자원으로 활용될 수 있도록 노력하겠습니다.{'\n'}{'\n'}

        </Text>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
      flex: 1,
  },

  container: {
    marginTop: StatusBar.currentHeight,
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Adjust as needed
    marginBottom: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 16,
    
  },
  description: {
    fontSize: 20,
    marginBottom: 16,
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  
  projectDescription: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'skyblue',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});

export default Greeting;
