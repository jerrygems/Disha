import { View, Text, Dimensions, Platform, StyleSheet} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
const Header = () => {

  const isAndroid = Platform.OS === 'android';
  return (
    <View>
      {
        isAndroid ? (
          <>
            <View style={styles.androidHeader}>
              <Text>Android</Text>
            </View>
          </>
        ) : (
          <View style={styles.webHeader}>
            <Text>WebSite</Text>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create(
  {
    androidHeader: {
      backgroundColor: 'lightblue',
      fontSize: 250,
    },
    webHeader: {
      backgroundColor: 'lime'
    }
  }
)


export default Header;