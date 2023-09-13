import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useWindowDimensions } from 'react-native';
import styles from './headerStyle';

const Header = ({ title, onMenuPress }) => {
  const windowWidth = useWindowDimensions().width;

  // Determine header style based on screen width
  const headerStyle = windowWidth >= 768 ? styles.desktopHeader : styles.mobileHeader;

  return (
    <View style={headerStyle}>
      <TouchableOpacity onPress={onMenuPress}>
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
