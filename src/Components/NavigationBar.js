import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

export default function NavigationBar() {
    return (
        <View style={{
            padding: 20
        }}>
            <Text style={{fontSize: 34, fontWeight: '600', color: 'red'}}>NetFlix Clone</Text>
            <View style={{ flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={styles.textHeader}>Series</Text>
                <Text style={styles.textHeader}>Flims</Text>
                <Text style={styles.textHeader}>My List</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white'
    },
    
})