import { View, Text, FlatList } from 'react-native'
import React from 'react'
import indexStyles from '../../../app/indexStyle'
import {LinearGradient} from 'expo-linear-gradient'
import { useFonts } from 'react-native-google-fonts';

const Categories = () => {
    return (
        <View style={[indexStyles.cont]}>
            <View style={[indexStyles.contNormal]}>
                <Text style={[indexStyles.fontA]}>
                    Categories
                </Text>
            </View>
            <FlatList
                horizontal={true}
                data={['Design', 'Cyber Security', 'Programming', 'Animation', 'Blender 3D', 'Item 6', 'Item 7']}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={indexStyles.wrapper}>
                        <LinearGradient style={[indexStyles.item]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#e398ff', '#0077ff']}>
                            <Text style={indexStyles.fontB}>{item}</Text>
                        </LinearGradient>
                    </View>
                )}
            />
        </View>
    )
}

export default Categories