import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import colors from '../Config/colors.js';



function WatchScreen() {
    const navigation = useNavigation();
    const [sidebarVisible, setSidebarVisible] = useState(false);


    const sideBarClose = () => {
        setSidebarVisible(false);
    }

return (
    <View style={styles.container}>
        <View style={styles.navbarContainer}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navbarIconContainer}
                    onPress={() => setSidebarVisible(true)}
                >
                    <Image style={styles.navbarIcon} source={require('../assets/menu-bar.png')}/>
                </TouchableOpacity>
                <Text style={styles.navbarTitle}>WATCH</Text>
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
                    <TouchableOpacity style={styles.sidebarItem} onPress={() => {sideBarClose(); navigation.navigate('Home')}}>
                        <Image style={styles.sidebarItemIcon} source={require('../assets/home-navigation.png')} />
                        <Text style={styles.sidebarItemText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sidebarItem} onPress={() => {sideBarClose(); navigation.navigate('Progress')}}>
                        <Image style={styles.sidebarItemIcon} source={require('../assets/progress-navigation.png')} />
                        <Text style={styles.sidebarItemText}>Progress</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sidebarItem} onPress={() => {sideBarClose(); navigation.navigate('Learn'); }}>
                        <Image style={styles.sidebarItemIcon} source={require('../assets/learn-navigation.png')} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.sidebarItemTextTitle}>Learn</Text>
                            <Text style={styles.sidebarItemTextDescription}>words and phrases</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sidebarItem} onPress={() => {sideBarClose(); navigation.navigate('About')}}>
                        <Image style={styles.sidebarItemIcon} source={require('../assets/community-navigation.png')} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.sidebarItemTextTitle}>About Us</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.sidebarItemLogout}>
                        <TouchableOpacity style={styles.sidebarItemLogoutButton} onPress={() => {sideBarClose(); navigation.navigate('Login')}}>
                            <Text style={styles.sidebarItemLogoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </View>
        )}

        <ScrollView style={[styles.scrollView, {marginBottom: 'auto'}]}>
            <View style={styles.watch} />
            <Text style={styles.heading}>Recommended videos</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
                <View key={index} style={{ backgroundColor: 'white', width: '38%', height: 75, borderRadius: 5, marginVertical: 5, marginHorizontal: 5 }} />
            ))}
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {[1, 2, 3, 4].map((index) => (
                <View key={index} style={{ backgroundColor: 'white', width: '38%', height: 75, borderRadius: 5, marginVertical: 5, marginHorizontal: 5 }} />
                ))} 
            </View>
            <Text style={[styles.loadMore, { alignSelf: 'flex-end' }]}>
            see more
            </Text>
            <Text style={styles.heading}>Most watched videos</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <View key={index} style={{ backgroundColor: 'white', width: '38%', height: 75, borderRadius: 5, marginVertical: 5, marginHorizontal: 5 }} />
            ))}
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
    watch: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: 150,
        marginTop: 37,
        borderRadius: 5,
        alignSelf: 'center',
    },
    heading: {
        fontSize: 16,
        color: '#FFFFFF',
        marginTop: 37,
        marginLeft: 40,
        fontWeight: 'bold',
    },
    loadMore: {
        color: '#FFFFFF',
        marginRight: 44,
    },
});

export default WatchScreen;