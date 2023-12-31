import { StyleSheet } from "react-native";

const indexStyles = StyleSheet.create({
    image1: {
        width: '100%',
        height:120,
        resizeMode: 'stretch'
    },
    BGwhite:{
        backgroundColor:'white'
    },
    Fwhite:{
        color:'white',
    },
    fontA:{
        fontSize:25,
    },
    fontB:{
        fontSize:17,
        marginBottom:3,
        marginTop:3,
    },
    fontC:{
        fontSize:14,
    },
    fontD:{
        fontSize:10,
    },
    MLT:{
        marginTop:5,
        marginLeft:5,
    },
    ML10:{
        marginLeft:10
    },
    wrap:{
        overflow:"wrap"
    },
    cont:{
        backgroundColor:'white',
        padding:10,
        margin:4,
        borderRadius:10,
        elevation:5,
    },
    contNormalHCenter:{
        backgroundColor:'transparent',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    contNormalVCenter:{
        backgroundColor:'transparent',
        display:'flex',
        overflow:'wrap',
        flexDirection:'row',
        justifyContent:'flex-start',
        margin:10
    },
    btnA:{
        height:40,
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:4,
        margin:5,

    },
    B20:{
        borderRadius:20,
    },
    B10:{
        borderRadius:10,
    },
    contNormal:{
        margin:4,
        backgroundColor:'white',
        padding:10,
    },
    cardA:{
        padding:10,
        margin:10,
        borderRadius:10,
        elevation:5,
        width:180

    },
    cardB:{
        padding:10,
        margin:10,
        borderRadius:10,
        elevation:5,
        height:140,
        width:140

    },
    item:{
        padding:10,
        margin:10,
        backgroundColor:'grey',
        borderRadius:30,
        elevation:5,
    },
    wrapper:{
        backgroundColor:'white',
        borderRadius:20,

    },
    P20:{
        paddingHorizontal:20
    },
    search1:{
        backgroundColor:'white',
    },
    rowCont:{
        flexDirection:'row',
        justifyContent:'center'
    },
    heading: {
        fontSize: 30,
    },
    heading2: {
        fontSize: 20,
    },
    links: {
        top: 0,
        marginTop: 0,
        padding: 0,
        position: 'relative',
        textDecorationLine: 'underline',
        color: 'blue'
    },
    mgT20:{
        marginTop:20
    },
    mgB20:{
        marginBottom:20
    },
    mgL20:{
        marginLeft:20
    },
    mgR20:{
        marginRight:20
    },
    mgT50:{
        marginTop:20
    },
    mgB50:{
        marginBottom:20
    },
    mgL50:{
        marginLeft:20
    },
    mgR50:{
        marginRight:20
    },
    mgT100:{
        marginTop:20
    },
    mgB100:{
        marginBottom:20
    },
    mgL100:{
        marginLeft:20
    },
    mgR100:{
        marginRight:20
    },
    inp1: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        width: 300,
        margin: 10,
        elevation: 5
    },
    inp2: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,

        margin: 10,
        elevation: 5
    },
    contDust: {
        flex: 1,
        flexDirection: 'row',

    },
    cont1: {
        flex: 0.8,
        backgroundColor:'transparent'
    },
    cont2: {
        flex: 0.2,
        backgroundColor:'transparent',
        textAlign:'center',
        textAlignVertical:'center',
        color:'blue',
        
    },
})

export default indexStyles