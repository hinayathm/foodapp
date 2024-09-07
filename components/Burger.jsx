import { Text,View ,StyleSheet,Image, TouchableOpacity, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Burger()
{
return(

<TouchableOpacity style={styles.cart}>
        <Image style={styles.cartimg} source={require("../assets/burger.jpeg" )}></Image>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <View style={{}}>
        <Text style={{elevation:20,shadowOffset:1000}}>Chicken burger </Text>
        <Text style={{fontSize:11,color:"#7F7F7F",elevation:10,shadowOffset:10}}>Rose garden </Text>
        <Text style={{fontSize:11,color:"#363636",elevation:10,shadowOffset:10}}>$ 30 /-</Text>
        </View>
        <View style={styles.add}>
            <Image style={{width:20,height:20}} source={require("../assets/add.png")}></Image>
            </View>
      
       
            </View>
    </TouchableOpacity>
)}
const styles=StyleSheet.create({
    cart:{
        width:165,
        height:171,
        borderRadius:22,
        alignItems:"center",
        backgroundColor:"#F6F6F6",
        elevation:3,
        shadowOffset:2,
        justifyContent:"space-around"
      },
      cartimg:{
        width:103,
        height:98,
        
        
      },
      add:{
        backgroundColor:"#FF7622",
        width:25,
        height:25,
        borderRadius:500,
        padding:10,
        alignItems:"center",
        justifyContent:"center",
      }
})