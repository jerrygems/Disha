import { Button, View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import React from 'react'
import styles from './styles'
import indi from '../../../app/indexStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import HorizontalLine from '../Parts/HorizontalLine'

const CoursePage = () => {


    return (
        <View>
            <View>
                <WebView
                    source={{ uri: 'https://www.youtube.com/embed/g7-Eu0qLDYs' }}
                    style={styles.video}
                />
            </View>
            <View style={[indi.contNormalVCenter]}>
                <TouchableOpacity>
                    <LinearGradient style={[indi.btnA]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#e398ff', '#0077ff']}>
                        <Text style={indi.fontB}>Btn1</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient style={[indi.btnA]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#e398ff', '#0077ff']}>
                        <Text style={indi.fontB}>Btn2</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient style={[indi.btnA]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#e398ff', '#0077ff']}>
                        <Text style={indi.fontB}>Btn3</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <HorizontalLine />
            <View>
                <View>
                    <Text style={[indi.fontA,indi.mgL50]}>
                        Description
                    </Text>
                    <View style={[indi.contNormal,indi.mgL100,{backgroundColor:'grey'}]}>

                    </View>
                </View>

            </View>
        </View>
    );
}

export default CoursePage
