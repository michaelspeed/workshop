import React from 'react';
import {View, StyleSheet, Image, Text, Button} from 'react-native';

export default class Jumbotron extends React.Component {
  onClickButton = () => {
    console.log('Play');
  };

  render() {
    return (
      <View style={styles.JumbotronContainer}>
        <Image
          style={styles.jumbImage}
          resizeMode={'contain'}
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/workshop-57074.appspot.com/o/rise%20of%20skywalker.jpg?alt=media&token=7ff1ee12-a504-432d-8803-39b28214b59f',
          }}
        />

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={styles.jumboText}>Star wars: Rise of Skywalker</Text>
        </View>

        <View
          style={{
            marginBottom: 20,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 10,
              borderBottomRightRadius: 6,
              borderBottomLeftRadius: 6,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
            }}>
            <Button
              onPress={() => this.onClickButton()}
              title={'Play'}
              color={'red'}
            />
          </View>
        </View>

            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  JumbotronContainer: {
    backgroundColor: 'black',
  },
  jumbImage: {
    height: 400,
  },
  jumboText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
