import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Platform, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Config/colors.js';



function AboutScreen() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
             <View style={styles.navbarContainer}>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.navbarIconContainer}
                     onPress={() => setSidebarVisible(true)}
                    >
                        <Image style={styles.navbarIcon} source={require('../assets/menu-bar.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.navbarTitle}>ABOUT US</Text>
                </View>
            </View>
            {sidebarVisible && (
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
                            <TouchableOpacity style={styles.sidebarArrowBack} onPress={() => setSidebarVisible(false)} >
                                <Image style={styles.sidebarArrowBackIcon} source={require('../assets/arrow-left.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.sidebarItemsContainer}>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Home')}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/home-navigation.png')} />
                            <Text style={styles.sidebarItemText}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('About')}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/progress-navigation.png')} />
                            <Text style={styles.sidebarItemText}>Progress</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('About')}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/watch-navigation.png')} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.sidebarItemTextTitle}>Learn</Text>
                                <Text style={styles.sidebarItemTextDescription}>words and phrases</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('About')}>
                            <Image style={styles.sidebarItemIcon} source={require('../assets/learn-navigation.png')} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.sidebarItemTextTitle}>Learn</Text>
                                <Text style={styles.sidebarItemTextDescription}>words and phrases</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.sidebarItemLogout}>
                            <TouchableOpacity style={styles.sidebarItemLogoutButton} onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.sidebarItemLogoutText}>Logout</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                   
                </View>
            )}
           

            <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
                <View style={styles.personContainer}>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/user-pfp.png')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Nuarin Jerry</Text>
                            <Text style={styles.personPosition}>Leader</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <Text style={styles.personDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/user-pfp.png')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Chavez Leo</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <Text style={styles.personDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.personContainer}>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/user-pfp.png')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Nepomuceno Wencer</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <Text style={styles.personDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/user-pfp.png')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Penoliar, Roi Gabriel</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <Text style={styles.personDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.personContainer}>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/user-pfp.png')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Acosta, Karl Dave</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <Text style={styles.personDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.personProfileContainer}>
                            <Image style={styles.personProfile} source={require('../assets/user-pfp.png')} />
                        </View>
                        <View style={styles.personNameContainer}>
                            <Text style={styles.personName}>Arenas, Eron</Text>
                        </View>
                        <View style={styles.personDescriptionContainer}>
                            <Text style={styles.personDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    navbarContainer: {
        alignItems: 'center',
        marginTop:10,
        width: '100%',
        marginBottom: 37,
    },
    nav: {
        width: '90%',
        height: 70,
        backgroundColor: colors.white,
        borderTopStartRadius: 35,
        borderTopEndRadius: 18,  
        borderBottomStartRadius: 18,
        borderBottomEndRadius: 35,
        alignItems: 'center',
        flexDirection: 'row',
    },
    navbarTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.primary,
        paddingLeft: 10,
    },
    navbarIconContainer: {
        marginLeft: 15,
    },
    navbarIcon: {
        width: 50,
        height: 50,
    },
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: colors.navBarProfile,
        zIndex: 1,
        bottom: 0,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    sideBarProfileContainer: {
        backgroundColor: colors.navBarProfile,
        width: '100%',
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileIcon: {
        width: 80,
        height: 80,
        backgroundColor: colors.white,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 20,
    },
    profileIconText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: colors.primary,
    },
    profileInfoUser: {
        color: colors.white,
        fontSize: 18,
        marginBottom: -6,
    },
    profileInfoEmail: {
        color: colors.gray,
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    sidebarArrowBackContainer: {
        width:'42%',
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    sidebarArrowBack: {
        width: 50,
        height: 50,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    sidebarArrowBackIcon: {
        width: 20,
        height: 20,
    },
    sidebarItemsContainer: {
        width: '100%',
        height : '85%',
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sidebarItem: {
        fontSize: 18,
        width: '90%',
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
        alignItems: 'center',
        flexDirection: 'row',
    },
    sidebarItemIcon: {
        width: 45,
        height: 45,
    },
    sidebarItemText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginLeft: 10,
    },
    sidebarItemTextTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginLeft: 10,
    },
    sidebarItemTextDescription: {
        fontSize: 15,
        color: colors.primary,
        marginLeft: 10,
    },
    sidebarItemLogout: {    
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 280,
    },
    sidebarItemLogoutButton: {
        borderRadius: 20,
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.navBarProfile,
    },
    sidebarItemLogoutText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
    },

    personContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    box: {
        width: '45%',
        height: 250,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 30,
    },
    personProfileContainer: {
        width: 90,
        height: 90,
        top: -35,
    },
    personProfile: {
        width: 90,
        height: 90,
        borderRadius: 50,
        
    },
    personNameContainer: {
        width: '85%',
        height: 40,
        alignItems: 'center',
        top: -30,
    },
    personName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
    },
    personPosition: {
        fontSize: 12,
        color: colors.watchbackground,
    },

    personDescriptionContainer: {
        width: '80%',
        height: 100,
        top: -25,
    },
    
    personDescription: { 
        fontSize: 12,
        color: colors.primary, 
    },
   
});

export default AboutScreen;