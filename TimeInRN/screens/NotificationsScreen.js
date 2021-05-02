import * as React from 'react';
import { Button, Text, View } from 'react-native';
import type {Node} from 'react';
import HomeScreen from './HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const NotificationsScreen =({}) =>{

return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications</Text>
    </View>
  );
}

  export default NotificationsScreen;