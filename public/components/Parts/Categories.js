import { View, Text, FlatList } from 'react-native'
import React from 'react'
import indexStyles from '../../../app/indexStyle'
import LinearGradient from 'expo-linear-gradient'

const Categories = () => {
    return (
        <View style={[indexStyles.cont]}>
            <View style={[indexStyles.contNormal]}>
                <Text style={[indexStyles.fontA]}>
                    Welcome, Itachi
                </Text>
            </View>
            <FlatList
                horizontal={true}
                data={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={indexStyles.wrapper}>
                        <LinearGradient style={styles.btn1} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#e398ff', '#0077ff']}>
                            <Text style={indexStyles.item}>{item}</Text>
                        </LinearGradient>
                    </View>
                )}
            />
        </View>
    )
}

export default Categories