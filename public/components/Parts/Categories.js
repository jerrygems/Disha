import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import indexStyles from '../../../app/indexStyle'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from 'expo-router'

const Categories = () => {
    const navigation = useNavigation()
    return (
        <View style={[indexStyles.cont]}>
            <View style={[indexStyles.contNormal]}>
                <View style={[indexStyles.contDust]}>
                    <Text style={[indexStyles.fontA, indexStyles.cont1]}>
                        Popular Courses
                    </Text>
                    <Text style={[{ fontSize: 15 }, indexStyles.cont2]} onPress={() => { navigation.navigate('SeeAll1') }}>
                        See all
                    </Text>
                </View>
            </View>
            <FlatList
                style={{ flex: 0.8 }}
                horizontal={true}
                data={['Design', 'Cyber Security', 'Programming', 'Animation', 'Blender 3D', 'Item 6', 'Item 7']}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={indexStyles.wrapper}>
                        <LinearGradient style={[indexStyles.item]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#e398ff', '#0077ff']}>
                            <Text style={indexStyles.fontB} onPress={()=>{navigation.navigate('SeeAll1')}}>{item}</Text>
                        </LinearGradient>
                    </View>
                )}
            />
        </View>
    )
}



export default Categories