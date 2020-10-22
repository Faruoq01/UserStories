import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import PrivacyPage from './Screens/PrivacyPage';
import NotificationPage from './Screens/NotificationPage';
import BookOfEsther from './Screens/BookOfEsther';
import HomeCell from './Screens/HomeCell';


export default function App() {
  
  return (
    <BookOfEsther/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 30
  },

  header:{
    width: '100%',
    height: '7%',
    shadowColor: 'black',
    shadowOffset: {width:0, height:2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '7%'
  },

  headerText:{
    paddingLeft: '20%',
    fontSize: 18
  },

  list: {
    width: '100%',
    height: '8%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '4%'
  },

  listText:{

  }

  
});
