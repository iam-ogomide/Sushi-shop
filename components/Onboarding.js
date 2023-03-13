import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Onboarding({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/human3.jpg')} style={styles.mainImage}>
            <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')} activeOpacity={0.7}>
                <View style={styles.ButtonWrapper}>
                    <Text style={styles.ButtonText}>Get Started</Text>
                    <MaterialCommunityIcons name='arrow-right' size={20} color={'#000000'} />
                </View>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    mainImage:{
        height:'100%',
        width:'100%',
    },
    ButtonWrapper:{
        marginHorizontal:30,
        backgroundColor: '#f4ecc2',
        borderRadius:50,
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'150%'
    },
    ButtonText:{
        color:'#000000',
        fontSize:14,
        marginRight:10,
        fontWeight:'bold',
    },
})