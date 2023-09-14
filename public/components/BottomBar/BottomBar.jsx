import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BottomBar = () => {
  return (
    <View style={styles.footer}>
      <Text>BottomBar</Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    footer: {
      backgroundColor: 'lime',
    },
  }
)
export default BottomBar