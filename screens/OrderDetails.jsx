import { Text,View ,StyleSheet,Image, TouchableOpacity, TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import OrderCard from "../components/OrderCard";
export default function OrderDetails()

{
  return(
    <SafeAreaView style={{flex:1,backgroundColor:"#121223"}}>
        <StatusBar style="light"> </StatusBar>
    <View style={{flex:4}}>
    <View style={{flexDirection:"row",alignItems:"center",gap:10,padding:15,}}>
<TouchableOpacity style={styles.iconview}>
      <Image source={ require("../assets/back.png")} style={styles.icon}></Image>

    </TouchableOpacity>
    <Text style={{color:"white"}}>Details</Text>
    <View style={{flex:1}}></View>
    <Text style={{color:"green"}}>HOME</Text>
    </View>
    <OrderCard></OrderCard>
    </View>
    <View style={{flex:2,backgroundColor:"white",borderTopStartRadius:20,borderTopEndRadius:20,padding:15,gap:18,}}>
<Text>DELIVERY ADDRESS</Text>
<TextInput placeholder="3rd Floor, 4 Wing Avenue , Panniyankara, " style={{backgroundColor:"#EDEDED",width:360,height:50,borderRadius:10,padding:5}}></TextInput>
<Text>TOTAL</Text>
<Text style={{fontWeight:"bold"}}>$96</Text>
<TouchableOpacity
 style={{backgroundColor:"orange",width:350,height:40,justifyContent:"center",alignItems:"center",borderRadius:10}}>
    <Text>PLACE ORDER</Text>
</TouchableOpacity>
    </View>
    </SafeAreaView>
  )}
  const styles=StyleSheet.create({
    icon:{
      width:25,
      height:25
    },
      iconview:{
        backgroundColor:"#D9D9D9",
        borderRadius:500,
        height:50,
        width:50,
        justifyContent:"space-around",
        alignItems:"center",
    
      },
  })