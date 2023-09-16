import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import authStyles from './AuthStuffStyles'
import indi from '../../../app/indexStyle'
import { useNavigation } from '@react-navigation/native';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSignUp = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        navigation.navigate('ContentScreen')
    };

    const navigation = useNavigation();
    return (

        <View style={authStyles.container}>
            <View style={authStyles.container1}>
                <Image style={authStyles.image1} source={{ uri: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80" }} />
            </View>
            <View style={authStyles.container2}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
                    Sign In
                </Text>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    mode="outlined"
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    mode="outlined"
                    style={styles.input}
                />
                <TextInput
                    label="ConfirmPassword"
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                    secureTextEntry
                    mode="outlined"
                    style={styles.input}
                />
                <Button
                    mode="contained"
                    onPress={handleSignUp}
                    style={styles.button}
                >
                    Sign In
                </Button>
                <Text style={indi.links} onPress={() => navigation.navigate('SignUp')} >
                    Don't have an Account ? click here
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        marginBottom: 16,
        width: '100%',
        maxWidth: 400,
    },
    button: {
        marginTop: 16,
        width: '100%',
        maxWidth: 400,
    },
});
export default SignIn