import React from "react";
import { View, Text } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import Head from "../components/header/header"
import IndexStyles from "./indexStyle"
const Home = () => {
    return (
        <>
            <PaperProvider>
                <View style={IndexStyles.container}>
                    <Head />
                    <Text>Hello React Developer</Text>
                </View>
            </PaperProvider>
        </>
    )
}

export default Home