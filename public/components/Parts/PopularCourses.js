import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import indi from '../../../app/indexStyle'

const PopularCourses = () => {
    return (
        <View style={[indi.cont]}>
            <View style={[indi.contNormal]}>
                <Text style={[indi.fontA]}>
                    Popular courses
                </Text>
            </View>
            <FlatList
                horizontal={true}
                data={['UI/UX Design', 'Graphic Design', 'Anime', 'Animation 3D', 'Android Development', 'card 5', 'card 6']}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={indi.wrapper}>
                        <LinearGradient style={[indi.cardA]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#e398ff', '#0077ff']}>
                            <View style={[indi.contNormalHCenter]}>
                                <Image style={[indi.image1,indi.B10]} source={{ uri: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80" }} />

                            </View>
                            <View>
                                <Text style={indi.fontB}>{item}</Text>
                                <Text style={[indi.fontC,indi.ML10]}>description will be here so i hope you got it right</Text>
                                <Text style={[indi.fontD,indi.ML10]}>10/10/2025</Text>
                            </View>
                        </LinearGradient>
                    </View>
                )}
            />
        </View>
    )
}

export default PopularCourses