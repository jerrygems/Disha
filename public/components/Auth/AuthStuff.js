import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const AuthStuff = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image style={styles.image1} source={{ uri: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80" }} />
            </View>
            <View style={styles.container2}>
                <View style={styles.cont2Child1}>
                    <Text style={styles.heading}>LearnEra</Text>
                </View>
                <View style={styles.cont2Child2}>
                    <TextInput style={styles.inp1} placeholder='Enter Email' value={email} onChangeText={text => setEmail(text)}></TextInput>
                    <TextInput style={styles.inp1} placeholder='Enter Password' value={pass} onChangeText={text => setPass(text)}></TextInput>
                    <TouchableOpacity>
                        <LinearGradient style={styles.btn1} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={['#e398ff', '#0077ff']}>
                            <Text style={{ fontSize: 18 }}>Login/SignUp</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    container1: {
        backgroundColor: 'red',
        flex: 0.3,
        flexDirection: 'column'

    },
    image1: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    container2: {
        position:'relative',
        flex: 0.7,
        marginTop: -20,
        paddingTop: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'column',
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    btn1: {
        top: 30,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 35,
        elevation: 5,
    },
    cont2Child1: {
        margin: 0,
        top: 60,
        padding: 0
    },
    cont2Child2: {
        top: 180,
        alignItems: 'center',
    },
    // extra stuff to use or make code more easy Xd
    heading: {
        fontSize: 30,
    },
    inp1: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        width: 300,
        margin: 10,
        elevation: 5
    }
})
export default AuthStuff