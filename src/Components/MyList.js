import Swiper from 'react-native-swiper';
import {View, Text, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import firestore from '@react-native-firebase/firestore'
import { Avatar } from 'react-native-paper';
import * as _ from 'lodash'

export default function MyList() {

    const [movies, setMovies] = useState([])
    const data = firestore().collection('movies').get().then(value => {
        let emptyArray = []
        value.docs.forEach(item => {
            const newItem = {
                id: item.id,
                ...item.data()
            }
            emptyArray.push(newItem)
        })
        let ind = 2
        let newArray = []
        while (emptyArray.length > 0)
            newArray.push(emptyArray.splice(0, ind))
        setMovies(newArray)
    }).catch(error => console.log(error))

    return (
        <View style={{marginTop: 40, height: 120, paddingHorizontal: 20, marginBottom: 20}}>
            <Swiper showsButtons={false} loop={true} autoplayTimeout={2}>
                {movies.map(newArray => (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                        {newArray.map(item => (
                            <Avatar.Image size={120} source={{uri: item.image}}/>
                        ))}
                    </View>
                ))}
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
      backgroundColor: 'black'
    },
    text: {
      color: 'red',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })