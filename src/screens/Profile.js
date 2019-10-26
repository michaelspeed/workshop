import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function Profile() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState('');

  auth().onAuthStateChanged(us => {
    if (us && user === null) {
      setUser(us);
      setProfile(us.email)
    }
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: 'black'}}>
          <View
            style={{
              padding: 20,
            }}>
            <Text style={{fontSize: 34, fontWeight: '600', color: 'red'}}>
              NetFlix Clone
            </Text>
          </View>
          {user === null ? (
            <View>
              <View style={{paddingHorizontal: 20}}>
                <TextInput
                  label="Email"
                  value={email}
                  style={{marginVertical: 20}}
                  onChangeText={text => setEmail(text)}
                />
                <TextInput
                  label="Password"
                  secureTextEntry={true}
                  value={pass}
                  style={{marginVertical: 20}}
                  onChangeText={text => setPass(text)}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginVertical: 20,
                }}>
                <Button
                  mode="contained"
                  onPress={() => {
                    auth()
                      .createUserWithEmailAndPassword(email, pass)
                      .then(value => {
                        console.log(value);
                      })
                      .catch(error => {
                          auth().signInWithEmailAndPassword(email, pass).then(value => {
                              setUser(value)
                              setProfile(value.user.email)
                          }).catch(error => console.log(error))
                      });
                  }}>
                  Sign Up / Login
                </Button>
              </View>
            </View>
          ) : (
            <View />
          )}
          {profile !== '' && <View style={{padding: 20}}>
              <Text style={{color: 'white', marginVertical: 20}}>{profile}</Text>
              <Button
                  mode="contained"
                  onPress={() => {
                      auth().signOut().then(() => {
                          setUser(null)
                          setProfile('')
                      })
                  }}
                  >
                  Logout
                </Button>
          </View>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
});
