import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button, Menu, Divider, Text } from 'react-native-paper';
import indi from '../../../app/indexStyle'
import authStyles from './AuthStuffStyles';
import { useNavigation } from 'expo-router';


const SignUp = () => {
    const navigation=useNavigation()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [visible, setVisible] = useState(false);

    const keywords = ['Keyword 1', 'Keyword 2', 'Keyword 3'];

    const showMenu = () => setVisible(true);

    const hideMenu = () => setVisible(false);

    const addKeyword = (keyword) => {
        setSelectedKeywords([...selectedKeywords, keyword]);
        hideMenu();
    };

    const handleSignUp = () => {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Date of Birth:', dateOfBirth);
        console.log('Selected Keywords:', selectedKeywords);
        navigation.navigate('SignIn')

    };

    return (
        <View style={authStyles.container}>
            <View style={authStyles.container1}>
                <Image style={authStyles.image1} source={{ uri: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80" }} />
            </View>
            <View style={styles.container}>

                <View style={styles.form}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
                        Sign Up
                    </Text>
                    <TextInput
                        label="Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        mode="outlined"
                        style={styles.input}
                    />
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
                        label="Confirm Password"
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        secureTextEntry
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        label="Date of Birth"
                        value={dateOfBirth}
                        onChangeText={(text) => setDateOfBirth(text)}
                        mode="outlined"
                        style={styles.input}
                    />
                    <Menu
                        visible={visible}
                        onDismiss={hideMenu}
                        anchor={
                            <Button
                                mode="outlined"
                                onPress={showMenu}
                                style={styles.keywordButton}
                            >
                                Select Keywords
                            </Button>
                        }
                    >
                        {keywords.map((keyword) => (
                            <Menu.Item
                                key={keyword}
                                onPress={() => addKeyword(keyword)}
                                title={keyword}
                            />
                        ))}
                        <Divider />
                        <Menu.Item onPress={() => setSelectedKeywords([])} title="Clear" />
                    </Menu>
                    <View style={styles.selectedKeywords}>
                        {selectedKeywords.map((keyword) => (
                            <Button key={keyword} style={styles.keywordChip}>
                                {keyword}
                            </Button>
                        ))}
                    </View>
                    <Button
                        mode="contained"
                        onPress={handleSignUp}
                        style={styles.button}
                    >
                        Sign Up
                    </Button>
                </View>
                <Text style={indi.links} onPress={() => navigation.navigate('SignIn')} >
                    Already have an Account ? click here
                </Text>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    form: {
        width: '100%',
        maxWidth: 400,
    },
    input: {
        marginBottom: 16,
    },
    keywordButton: {
        marginBottom: 16,
    },
    selectedKeywords: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 16,
    },
    keywordChip: {
        marginRight: 8,
        marginBottom: 8,
    },
    button: {
        marginTop: 16,
    },
});

export default SignUp;
