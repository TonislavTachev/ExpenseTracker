import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Loading from './Loading';
import Home from './Home';
import TransactionState from './TransactionContext/TransactionState';
import HistoryModal from './HistoryModal';
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
   <MainStack.Navigator>
      <MainStack.Screen name='Loading' component={Loading} options={{
     headerShown:false
   }} />
      <MainStack.Screen  name='Home' component={Home}  options={{
      headerLeft:null,
      title:'Dashboad'
    }} />
    </MainStack.Navigator>
  )
}


const App: () => React$Node = () => {
  return (
   <NavigationContainer>
   <TransactionState>
   <RootStack.Navigator>
   <RootStack.Screen name='Main' component={MainStackScreen} options={{
     headerShown:false
   }}></RootStack.Screen>
    <RootStack.Screen name='Modal' component={HistoryModal}  options={{
      headerLeft:null,
      title:'Dashboad'
    }}></RootStack.Screen>
   </RootStack.Navigator>
   </TransactionState>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
