import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useFonts } from 'expo-font';

import Info from '../assets/data/Info';
import Popular from '../assets/data/Popular';

const {width} = Dimensions.get('window')

const Card = ({data, navigation}) => {
    return (
        <TouchableOpacity style={styles.MainCard} activeOpacity={0.7} onPress={() => navigation.navigate('DetailsScreen',data)}>
            <MaterialCommunityIcons name='heart-outline' size={28} color={'#313234'} style={styles.MainIconImage}/>
            <Image source={data.image} style={styles.CardImage}/>
            <Text style={styles.CardbottomName}>{data.name}</Text>
            <View style={styles.CardbottomCon}>
                <Text style={styles.CardbottomPrice}>$ {data.price}</Text>
                <View style={styles.Cardbottomwrap}>
                    <MaterialCommunityIcons name='star' size={20} color={'yellow'} style={styles.starIconImage}/>
                    <Text style={styles.CardbottomRate}>{data.ratings}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Pops =({data, navigation}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.PopsMain}>
                <View>
                    <View style={styles.TopWrapper}>
                        <View style={styles.PopsLeft}>
                            <Image source={data.image} style={styles.PopsImage}/>
                        </View>
                        <View style={styles.PopsTitleWrapper}>
                            <Text style={styles.PopsTitleTitle}>{data.name}</Text>
                        </View>
                        <View style={styles.PopsBottom}>
                            <Text style={styles.bottomPice}>$ {data.price}</Text>
                            <Text style={styles.bottomRate}>{data.ratings}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function HomeScreen({navigation}) {
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
        <ScrollView>
        <View style={styles.container}>

            {/* Heading */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <MaterialCommunityIcons name='menu' size={24} color={'#313234'} />
                    <Text style={styles.headerText}>Sushi Shop</Text>
                    <Feather name='bell' size={24} color={'#313234'} />
                </View>
            </SafeAreaView>

            {/* Box Field */}
            <View style={styles.boxWrapper}>
                <View>
                <Text style={styles.firstText}>Get Special discount</Text>
                    <Text style={styles.secondText}>Up to 85%</Text>
                    <View style={styles.voucherCon}>
                        <Text style={styles.voucherText}>Claim Voucher</Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../assets/images/icon2.png')} style={styles.boxMainImage}/>
                </View>
            </View>

            {/* Search */}
            <View style={styles.searchWrapper}>
            <Feather name='search' size={16} color={global.textDark} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>

            {/* First Main List */}

            <FlatList 
                data={Info}
                renderItem={({item}) => <Card data={item} navigation={navigation}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

            {/* Popular Text */}
            {/* <View style={styles.popularCon}>
                <Text style={styles.popularText}>Popular Sushi</Text>
                <Text style={styles.viewText}>View all</Text>
            </View> */}

            {/* Popular List */}
            <Text style={styles.popularText}>Popular Sushi</Text>

            <FlatList 
                data={Popular}
                renderItem={({item}) => <Pops data={item} navigation={navigation}/>}
                
            />



        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerWrapper:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:"row",
        marginTop:20,
        marginHorizontal:20,
    },  
    headerText:{
        font:18,
        fontWeight:'bold',
        color:'#313234',
    },  
    boxWrapper:{
        marginTop:20,
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:150,
        width:'90%',
        backgroundColor:'#333',
        borderRadius:20,
    },
    boxMainImage:{
        height:100,
        width:100,
        marginRight:40,
    },
    firstText:{
        color:'#ffffff',
        fontFamily:'montserrat-semibold',
        fontSize:18,
        marginLeft:20,
        marginVertical:7
    },
    secondText:{
        color:'#ffffff',
        fontFamily:'montserrat-bold',
        fontSize:22,
        marginLeft:20,
    },
    voucherCon:{
        width:150,
        height:45,
        backgroundColor:'#ffffff',
        borderRadius:10,
        marginLeft:20,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    voucherText:{
        color:'#333',
        fontFamily:'montserrat-semibold',
        fontSize:13,
    },
    searchWrapper:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        marginTop:30,
        marginHorizontal:20,
        height:40,
        backgroundColor:'rgba(255,255,255,0.7)',
        borderRadius:20
    },
    search:{
        flex:1,
        marginLeft: 10,
    },
    searchText:{
        color: '#313234',
        fontFamily: 'montserrat-semibold',
        marginBottom:5,
        fontSize:14,
    },
    popularCon:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        top:-55,
        marginHorizontal:20
    },
    popularText:{
        fontFamily:'montserrat-semibold',
        fontSize:18,
        color:'#313234',
        marginTop:20,
        marginHorizontal:20
    },
    viewText:{
        fontFamily:'montserrat-regular',
        fontSize:14,
        color:'#313234',
    },
    MainCard:{
        height:200,
        width:width*0.50,
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

    },
    MainIconImage:{
        position:"absolute",
        zIndex:1,
        right:10,
        top:10
    },
    CardImage:{
        width:70,
        height:80,
        marginLeft:50,
        marginTop:15
    },
    CardbottomName:{
        fontFamily:'montserrat-semibold',
        fontSize:15,
        color:'#313234',
        marginTop:20,
        marginRight:50,
        marginLeft:15
    },
    CardbottomCon:{
        flexDirection:"row",
        marginTop:10,
        justifyContent:'space-between',
        marginHorizontal:15
    },
    CardbottomPrice:{
        fontFamily:'montserrat-bold',
        fontSize:17,
        color:'#313234',
    },
    Cardbottomwrap:{
        flexDirection:'row'
    },
    starIconImage:{
        marginRight:4,
    },
    CardbottomRate:{
        fontFamily:'montserrat-bold',
        fontSize:15,
        color:'#cdcdcd',
    },
    PopsMain:{
        borderRadius:25,
        paddingTop:20,
        paddingLeft:20,
    },
    TopWrapper:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ffffff',
        paddingVertical:15,
        paddingRight:20,
        paddingLeft:20,
        borderRadius:30,
        shadowColor:'#A8A8A8',
        shadowRadius:10,
        shadowOpacity:0.3,
        shadowOffset:{height:10},
        elevation:10,
    },
    PopsLeft:{
        marginRight:20
    },
    PopsImage:{
        width:175,
        height:125,
        borderRadius:20
    },
    PopsTitleWrapper:{
        paddingBottom:40
    },
    PopsTitleTitle:{
        fontFamily:'montserrat-semibold',
        fontSize:16,
        color:'#313234',
        marginBottom:5
    },
    PopsBottom:{
        flexDirection:'row',
        marginLeft:-50,
        marginTop:80,
        alignItems:'center'
    },
    bottomPice:{
        fontFamily:'montserrat-semibold',
        fontSize:16,
        color:'#313234',
    },
    bottomRate:{
        marginLeft:20,
        backgroundColor:'#333',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:20,
        fontFamily: 'montserrat-semibold',
        fontSize:14,
        color:'white',
        marginRight:15
    },
})