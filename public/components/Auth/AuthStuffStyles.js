import { StyleSheet } from "react-native"
const AuthStuffStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    container1: {
        backgroundColor: 'red',
        flex: 0.3,
        flexDirection: 'column'

    },
    image1: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    container2: {
        position: 'relative',
        flex: 0.7,
        marginTop: -20,
        paddingTop: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'column',
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    btn1: {
        top: 30,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 35,
        elevation: 5,
    },
    cont2Child1: {
        alignItems: 'center',
        margin: 0,
        top: 60,
        padding: 0
    },
    cont2Child2: {
        position: 'relative',
        top: 180,
        alignItems: 'center',
    },
    // extra stuff to use or make code more easy Xd
    inp1: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        width: 300,
        margin: 10,
        elevation: 5
    },
    
})
export default AuthStuffStyles