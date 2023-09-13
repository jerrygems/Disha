import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
  desktopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3498db',
    padding: 16,
  },
  mobileHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    padding: 16,
  },
  menuIcon: {
    fontSize: 24,
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8, // Spacing between menu icon and title in mobile view
  },
});

export default headerStyles;
