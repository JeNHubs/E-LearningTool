import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './App/screens/LoginScreen.js';
import SignUpScreen from './App/screens/signupscreen.js';

import HomeScreen from './App/screens/homescreen.js';
import WatchScreen from './App/screens/watchscreen.js';
import LearnScreen from './App/screens/learnscreen.js';
import AllLesson from './App/screens/alllessonscreen.js';

import AboutScreen from './App/screens/aboutscreen.js';

import LearnGrammar from './App/screens/grammar/grammarscreen.js';
import GrammarLesson1 from './App/screens/grammar/lessons/lesson1screen.js';
import GrammarLesson2 from './App/screens/grammar/lessons/lesson2screen.js';


import LearnVocabulary from './App/screens/vocabulary/vocabularyscreen.js';
import LearnListening from './App/screens/SpeakingAndListening/speakingscreen.js';
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
        <Stack.Screen name="AllLesson" component={AllLesson} />
        
        <Stack.Screen name="About" component={AboutScreen} />

        <Stack.Screen name="Grammar" component={LearnGrammar} />
        <Stack.Screen name="GrammarLesson1" component={GrammarLesson1} />
        <Stack.Screen name="GrammarLesson2" component={GrammarLesson2} />
        <Stack.Screen name="Vocabulary" component={LearnVocabulary} />
        <Stack.Screen name="Listening" component={LearnListening} />
        <Stack.Screen name="Writing" component={LearnWriting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}