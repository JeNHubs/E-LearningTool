import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import colors from '../Config/colors.js';


function LearnScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <ScrollView>
          <Text style={styles.navbar}>
            LEARN
          </Text>
          <TouchableOpacity onPress={() => setShowSidebar(!showSidebar)}>
            <Image source={require('../assets/menu-bar.png')} style={styles.logo} />
          </TouchableOpacity>
  
          {showSidebar && <Sidebar navigation={navigation} setSidebarVisible={setShowSidebar} />}
          
          <Image source={require('../assets/lesson.png')} style={styles.watch} />
  
          <Text style={styles.heading}>
            ENGLISH LESSONS
          </Text>
  
          {/* GRAMMAR BASICS AND VOCABULARY --- GRAMMAR BASICS AND VOCABULARY */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5%', alignSelf: 'center', marginLeft: '2.5%', marginRight: '2.5%', marginTop: '-5%' }}>
            <TouchableOpacity
                style={[styles.square, { backgroundColor: '#0BCE83', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                onPress={() => console.log('Pressed Grammar')}
              >
              <Image source={require('../assets/grammar.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
              <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Grammar Basics</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
                style={[styles.square, { backgroundColor: '#5856D6', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                onPress={() => console.log('Pressed Vocabulary')}
              >
              <Image source={require('../assets/vocabulary.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
              <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Vocabulary</Text>
            </TouchableOpacity>
          </View>
          {/* GRAMMAR BASICS AND VOCABULARY --- GRAMMAR BASICS AND VOCABULARY */}
  
          {/* LISTENING AND WRITING --- LISTENING AND WRITING */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5%', alignSelf: 'center', marginLeft: '2.5%', marginRight: '2.5%', marginTop: '-2.5%' }}>
            <TouchableOpacity
                style={[styles.square, { backgroundColor: '#E571A9', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                onPress={() => console.log('Pressed Listening')}
              >
              <Image source={require('../assets/speaking.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
              <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Listening</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
                style={[styles.square, { backgroundColor: '#F55E55', borderRadius: 5, width: 140, height: 136, alignItems: 'center', justifyContent: 'center', margin: '2.5%' }]}
                onPress={() => console.log('Pressed Writing')}
              >
              <Image source={require('../assets/writing.png')} style={[styles.squareIcon, { width: 100, height: 100}]} />
              <Text style={[{ color: '#FFFFFF', textAlign: 'center', position: 'absolute', top: 145, left: 2 }, styles.grammarText]}>Writing</Text>
            </TouchableOpacity>
          </View>
          {/* LISTENING AND WRITING --- LISTENING AND WRITING */}
  
          {/* SHOW ALL LESSONS BUTTON --- SHOW ALL LESSONS BUTTON --- SHOW ALL LESSONS BUTTON */}
          <TouchableOpacity
            style={{ backgroundColor: '#0BCE83', borderRadius: 40, padding: '3%', width: '80%', alignSelf: 'center', marginTop: '5%', marginBottom: '5%' }}
            onPress={() => navigation.navigate('Learn')}>
            <Text style={{ fontSize: 18, color: '#FFFFFF', textAlign: 'center' }}>SHOW ALL LESSON</Text>
          </TouchableOpacity>
          {/* SHOW ALL LESSONS BUTTON --- SHOW ALL LESSONS BUTTON --- SHOW ALL LESSONS BUTTON */}
        </ScrollView>
      </View>  
    );
}

function HomeScreen({ navigation }) {
const Sidebar = ({ navigation, setSidebarVisible }) => {
    return (
      <View style={styles.sidebar}>
        <View style={styles.sideBarProfileContainer}>
          <View style={styles.profileIcon}>
            <Text style={styles.profileIconText}>U</Text>
          </View>
          <View>
            <Text style={styles.profileInfoUser}>USER</Text>
            <Text style={styles.profileInfoEmail}>user@gmail.com</Text>
          </View>
          <View style={styles.sidebarArrowBackContainer}>
            <TouchableOpacity style={styles.sidebarArrowBack} onPress={() => setSidebarVisible(false)}>
              <Image style={styles.sidebarArrowBackIcon} source={require('../assets/arrow-left.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sidebarItemsContainer}>
          {/* HOMEPAGE --- HOMEPAGE */}
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => {
              navigation.navigate('Home');
              setSidebarVisible(false);
            }}>
            <Image style={styles.sidebarItemIcon} source={require('../assets/home-navigation.png')} />
            <Text style={styles.sidebarItemText}>Home</Text>
          </TouchableOpacity>
           {/* HOMEPAGE --- HOMEPAGE */}
            
           {/* PROGRESS PAGE --- PROGRESS PAGE */}
            <TouchableOpacity
              style={styles.sidebarItem}
              onPress={() => {
                navigation.navigate('About');
                setSidebarVisible(false);
              }}>
              <Image style={styles.sidebarItemIcon} source={require('../assets/progress-navigation.png')} />
              <Text style={styles.sidebarItemText}>Progress</Text>
            </TouchableOpacity>
            {/* PROGRESS PAGE --- PROGRESS PAGE */}
  
          {/* LEARN PAGE --- LEARN PAGE */}
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => {
              navigation.navigate('Learn');
              setSidebarVisible(false);
            }}>
            <Image style={styles.sidebarItemIcon} source={require('../assets/learn-navigation.png')} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.sidebarItemTextTitle}>Learn</Text>
              <Text style={styles.sidebarItemTextDescription}>words and phrases</Text>
            </View>
          </TouchableOpacity>
          {/* LEARN PAGE --- LEARN PAGE */}
  
          {/* ABOUT PAGE --- ABOUT PAGE */}
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => {
              navigation.navigate('About');
              setSidebarVisible(false);
            }}>
            <Image style={styles.sidebarItemIcon} source={require('../assets/community-navigation.png')} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.sidebarItemTextTitle}>About Us</Text>
              <Text style={styles.sidebarItemTextDescription}>....</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.sidebarItemLogout}>
            <TouchableOpacity
              style={styles.sidebarItemLogoutButton}
              onPress={() => {
                navigation.navigate('Login');
                setSidebarVisible(false);
              }}>
              <Text style={styles.sidebarItemLogoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
}
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },
});

export default LearnScreen;