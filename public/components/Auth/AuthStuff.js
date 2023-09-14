import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'

const AuthStuff = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image style={styles.image1} source={{ uri: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80" }} />
            </View>
            <View style={styles.container2}>
                <View style={styles.cont2Child}>
                    <Text style={styles.heading}>LearnEra</Text>
                </View>
                <TouchableOpacity style={styles.btn1}>
                    <LinearGradient colors={['#e398ff','#796209','#0077ff']}>
                        <Text>Login/SignUp</Text>
                    </LinearGradient>

                </TouchableOpacity>
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
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    cont2Child: {
        margin: 0,
        top: 0,
        padding: 0
    },
    // extra stuff to use or make code more easy Xd
    heading: {
        fontSize: 30,
    }
})
export default AuthStuff