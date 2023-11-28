import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView,} from 'react-native';

const Company = () => {
  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
        
          <Text style={styles.title}>The Shine Factory</Text>

        <Text style={styles.title}>더샤인팩토리란?</Text>
        
        <Text style={styles.description}>
          더샤인팩토리는 3D프린팅, 융합코딩, IOT프로젝트, 피지컬컴퓨팅 등 4차산업의 핵심기술을{'\n'}
          교육 콘텐츠와 융합, 개발하여 인재양성을 위한 미래적/혁신적/창의적/융합적 교육을 제시합니다.
        </Text>

        <Image source={require('./images/about_tsf.png')} style={styles.image} />
        
        <Text style={styles.projectDescription}>
          PBL프로젝트를 통해 예술적 상상력과 과학기술 창조력을 갖출 수 있고, 다양한 경험을 통해 창의성이 발달됩니다.{'\n'}{'\n'}
          전문적인 SW메이커교육 운영을 통한 미래역량 강화, SW메이커교육 사각지대 해소 및 균형있는 SW메이커교육 문화 조성.{'\n'}{'\n'}
          미래사회에 필요한 역량과 인성을 갖춘 창의적 인재양성과 소통, 공감, 협력을 통한 올바른 인성 함양.
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
  image: {
    width: '100%',
    height: '30%', // Adjust as needed
    marginBottom: 16,
    resizeMode: 'contain',
  },
  projectDescription: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});

export default Company;
