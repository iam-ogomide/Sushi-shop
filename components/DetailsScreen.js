import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useFonts } from 'expo-font';

export default function DetailsScreen({navigation, route}) {
    const data = route.params;
    const [loaded] = useFonts({
        'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'montserrat-semibold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf')
      });
    
    if (!loaded) {
        return null;
    }
    return (

        <View style={styles.container}>
            <ScrollView>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <MaterialCommunityIcons name='arrow-left' size={24} color={'#313234'} onPress={() => navigation.goBack()}/>
                    <Feather name='heart' size={24} color={'#313234'} />
                </View>
            </SafeAreaView>

            <View style={styles.imageWrapper}>
                <Image source={data.image} style={styles.mainImage}/>
            </View>

            {/* Title and Ratings */}
            <View style={styles.TitleWrapper}>
                <Text style={styles.Title}>{data.name}</Text>
                <View style={styles.bottomwrap}>
                    <MaterialCommunityIcons name='star' size={20} color={'yellow'} style={styles.starIconImage}/>
                    <Text style={styles.bottomRate}>{data.ratings}</Text>
                </View>
            </View>

            {/* Price and counter */}
            <View style={styles.PriceWrapper}>
                <Text style={styles.price}>$ {data.price}</Text>
                <View style={styles.Counter}>
                    <Text style={styles.mini}>-</Text>
                    <Text style={styles.mini}>1</Text>
                    <Text style={styles.mini}>+</Text>
                </View>
            </View>

            {/* Description */}
            <Text style={styles.describe}>Desciption</Text>
            <Text style={styles.describeText}> inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut oquia dolor sit amet, consectetur</Text>

            <View style={styles.bottomWrapper}>
                <View style={styles.BottomPriceWrapper}>
                    <Text style={styles.BottomPrice}>$ {data.price}</Text>
                    <Text style={styles.BottomPriceText}>Total Price</Text>
                </View>
                <View style={styles.placeCon}>
                    <Text style={styles.placeText}>Place Order</Text>
                </View>
            </View>


            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    headerWrapper:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        marginHorizontal:20,
        marginTop:15
    },
    imageWrapper:{},
    mainImage:{
        width:250,
        height:250,
        marginLeft:50
    },
    TitleWrapper:{
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:15
    },
    Title:{
        fontFamily:'montserrat-semibold',
        fontSize:28,
    },
    bottomwrap:{
        flexDirection:'row',
    },
    bottomRate:{
        fontFamily:'montserrat-semibold',
        fontSize:14,
        color:'#cdcdcd',
        marginLeft:3,
    },
    PriceWrapper:{
        marginTop:30,
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    price:{
        fontFamily:'montserrat-regular',
        fontSize:23,
    },
    Counter:{
        flexDirection:'row',
        height:40,
        width:100,
        backgroundColor:'#333',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
        borderRadius:20
    },
    mini:{
        color:'#ffffff',
        fontSize:19
    },
    describe:{
        marginHorizontal:20,
        fontFamily:'montserrat-semibold',
        fontSize:18,
        marginTop:20
    },
    describeText:{
        marginHorizontal:20,
        fontFamily:'montserrat-regular',
        fontSize:15,
        lineHeight:25,
        marginTop:5,
        marginBottom:15,
    },
    bottomWrapper:{
        // marginTop:-30,
        // backgroundColor:'#DCDCDC',
        // flex:1
        height:120,
        width:'90%',
        backgroundColor:'#ffffff',
        marginLeft:20,
        shadowColor:'#A8A8A8',
        shadowRadius:10,
        shadowOpacity:0.3,
        shadowOffset:{height:10},
        elevation:10,
        borderRadius:20,
        borderWidth:7,
        borderColor:'#ffffff',
        marginTop:30,
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    BottomPriceWrapper:{
    },
    BottomPrice:{
        fontFamily:'montserrat-semibold',
        fontSize:19,
    },
    BottomPriceText:{
        fontFamily:'montserrat-regular',
        fontSize:15,
       
    },
    placeCon:{
        height:50,
        width:130,
        backgroundColor:'#333',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
    },
    placeText:{
        fontSize:16,
        color:'#ffffff'
    },
})