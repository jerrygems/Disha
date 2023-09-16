import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AuthStuff from '../../public/components/Auth/SignIn'
import { DefaultTheme, Provider as PaperProvider, Provider } from 'react-native-paper';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
        <AuthStuff />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default Home