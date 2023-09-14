import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import styles from './AuthStuffStyles'
import indiStyles from '../../../app/indexStyle'
import indexStyles from '../../../app/indexStyle'



const AuthStuff = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image style={styles.image1} source={{ uri: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80" }} />
            </View>
            <View style={styles.container2}>
                <View style={styles.cont2Child1}>
                    <Text style={indiStyles.heading}>LearnEraApp</Text>
                </View>
                <View style={styles.cont2Child2}>
                    <Text style={[indiStyles.heading2,indiStyles.mgB100]}>Login here</Text>
                    <TextInput style={indexStyles.inp1} placeholder='Enter Email' value={email} onChangeText={text => setEmail(text)}></TextInput>
                    <TextInput style={indexStyles.inp1} placeholder='Enter Password' value={pass} onChangeText={text => setPass(text)}></TextInput>
                    <TouchableOpacity>
                        <LinearGradient style={styles.btn1} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={['#e398ff', '#0077ff']}>
                            <Text style={{ fontSize: 18 }} onPress={() => navigation.navigate('MainSection')}>Login/SignUp</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={indiStyles.links} >
                        Don't have an Account ? click here
                    </Text>
                </View>

            </View>

        </View>
    )
}


export default AuthStuff