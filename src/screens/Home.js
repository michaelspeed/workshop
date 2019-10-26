import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import NavigationBar from '../Components/NavigationBar';
import Jumbotron from '../Components/Jumbotron';
import MyList from '../Components/MyList';

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: 'black'}}>
          <NavigationBar/>
          <Jumbotron/>
          <MyList />
          <MyList />
          <MyList />
          <MyList />
          <MyList />
          <MyList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
