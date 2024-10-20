import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Platform, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Config/colors.js';
import { useFonts } from 'expo-font';


function LoginScreen() {

  const [loaded] = useFonts({
    'PaytoneOneRegular': require('../assets/fonts/PaytoneOne/PaytoneOne-Regular.ttf'),
    'InriaSansRegular': require('../assets/fonts/Inria_Sans/InriaSans-Regular.ttf'),
    'InterVariable': require('../assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf'),
  });

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>E-Learning Tool</Text>
                <Image style={styles.logo}
                source={require('../assets/logo.png')} 
                />
            </View>
            <View style={styles.subtitleHeader}>
                <Text numberOfLines={2} style={styles.subtitle}>EMPOWER YOUR ENGLISH!</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                <View style={styles.inputIconContainer}>
                    <Image
                    source={require('../assets/user-icon.png')}
                    style={styles.inputIcon}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    autoCapitalize="none"
                    autoCompleteType="username"
                />
                </View>
                <View style={styles.inputContainer}>
                <View style={styles.inputIconContainer}>
                    <Image
                    source={require('../assets/lock-icon.png')}
                    style={styles.inputIcon}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCompleteType="password"
                />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.signupLink}>Sign up</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      header: {
        height: 280,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomEndRadius: 80,
        borderBottomStartRadius: 80
      },
      title: {
        fontFamily: 'PaytoneOneRegular',
        fontSize: 38,
        color: colors.white,
        top: 50,
      },
      logo: {
        width: 194,
        height: 204,
        resizeMode: 'contain',
        marginBottom: 20,
        top: 105,
      },
      subtitleHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        top: 100,
      },
      subtitle: {
        color: colors.primary,
        width: '50%',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'PaytoneOneRegular',
      },
      form: {
        top: 150,
        paddingHorizontal: 20,
      },
    
      button: {
        backgroundColor: colors.primary,
        padding: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
      },
      buttonText: {
        color: colors.white,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'InterVariable',
        fontWeight: 'bold',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
        marginBottom: 20,
      },
      inputIconContainer: {
        paddingRight: 10,
      },
      inputIcon: {
        width: 20,
        height: 20,
      },
      input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
        fontFamily: 'InterVariable',
        fontSize: 16,
      },
      signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
      signupText: {
        fontSize: 16,
        color: colors.black,
        fontFamily: 'InterVariable',
      },
      signupLink: {
        fontSize: 16,
        color: colors.black,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontFamily: 'InterVariable',
      },
});


export default LoginScreen;