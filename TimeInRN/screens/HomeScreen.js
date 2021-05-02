import * as React from 'react';
import { Button, Text, View } from 'react-native';
import type {Node} from 'react';
import NotificationsScreen from './NotificationsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



const HomeScreen =({}) =>{
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>HomeScreen</Text>
       
      </View>
    );
    }

    export default HomeScreen;