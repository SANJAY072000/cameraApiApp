import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Came from './screens/Camera';

const stack=createStackNavigator();

export default class App extends Component{
  render(){
  return (
    <NavigationContainer>
    <stack.Navigator initialRouteName='Home'>
    <stack.Screen name='Home' component={Home} 
    options={{
      title:'Start Here',
      headerStyle:{
        backgroundColor:'#b83227'
      },
      headerTintColor:'#fff'
    }}/>
    <stack.Screen name='Camera' component={Came} 
    options={{
      title:'Photo Capture',
      headerStyle:{
        backgroundColor:'#b83227'
      },
      headerTintColor:'#fff'
    }}/>
    </stack.Navigator>
    </NavigationContainer>
  );
}
}

