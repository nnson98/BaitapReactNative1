import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox (){
    return(
        <View style={styles.container}>
            <Text style={styles.boxone}>one</Text>
            <Text style={styles.boxtwo}>two</Text>
            <Text style={styles.boxthree}>three</Text>
            <Text style={styles.boxfour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        paddingTop:40,
        backgroundColor:'#ddd',
    },
    boxone:{
        flex:1,
        padding:10,
        backgroundColor:'violet'
    },
    boxtwo:{
        flex:2,
        padding:20,
        backgroundColor:'red'
    },
    boxthree:{
        flex:1,
        padding:30,
        backgroundColor:'pink'
    },
    boxfour:{
        flex:3,
        padding:40,
        backgroundColor:'green'
    },
});