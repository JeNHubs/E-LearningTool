import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App/screens/homescreen.js';
import WatchScreen from './App/screens/watchscreen.js';
import LearnScreen from './App/screens/learnscreen.js';
import LoginScreen from './App/screens/LoginScreen.js';
import SignUpScreen from './App/screens/signupscreen.js';
import AboutScreen from './App/screens/aboutscreen.js';
import LearnGrammar from './App/screens/grammar/grammarscreen.js';
import LearnVocabulary from './App/screens/vocabulary/vocabularyscreen.js';
import LearnSpeaking from './App/screens/SpeakingAndListening/speakingscreen.js';
import LearnWriting from './App/screens/writing/writingscreen.js';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Watch" component={WatchScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} />
        <Stack.Screen name="Grammar" component={LearnGrammar} />
        <Stack.Screen name="Vocabulary" component={LearnVocabulary} />
        <Stack.Screen name="Speaking" component={LearnSpeaking} />
        <Stack.Screen name="Writing" component={LearnWriting} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}