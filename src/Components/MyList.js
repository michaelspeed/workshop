import Swiper from 'react-native-swiper';
import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function MyList() {
    return (
        <View style={{marginTop: 40, height: 200}}>
            <Swiper showsButtons={true} autoplay={true} loop={true} autoplayTimeout={2}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
            </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue'
    },
    text: {
      color: 'red',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })