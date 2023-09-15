import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import indexStyles from '../../../app/indexStyle'

const Recommended = () => {
  return (
    <View style={[indexStyles.cont]}>
            <View style={[indexStyles.contNormal]}>
                <Text style={[indexStyles.fontA]}>
                    Recommended
                </Text>
            </View>
            <FlatList
                horizontal={true}
                data={['UI/UX Design', 'Graphic Design', 'Anime', 'Animation 3D', 'Android Development', 'card 5', 'card 6']}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={indexStyles.wrapper}>
                        <LinearGradient style={[indexStyles.cardB]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#e398ff', '#0077ff']}>
                            <View style={indexStyles.wrap}>
                                <Text style={[indexStyles.Fwhite,indexStyles.fontB]}>{item}</Text>
                            </View>
                            <View>
                                <Text>
                                    Background image
                                </Text>
                            </View>
                            <View>
                                <Text>Viewers</Text>
                            </View>
                        </LinearGradient>
                    </View>
                )}
            />
        </View>
  )
}

export default Recommended