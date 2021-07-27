/**
 * Tarea 02 Curso MOV-03
 */

import React from 'react';
import StartScreen from './components/organisms/StartScreen'
import {View,Header, SafeAreaView} from 'react-native';


const App = () => {
  return (   
    <SafeAreaView>        
      <StartScreen/>        
      </SafeAreaView>
  );
  
};

export default App;