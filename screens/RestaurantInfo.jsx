import { Text,View ,StyleSheet,Image, TouchableOpacity, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Burger from "../components/Burger";
import Bubble from "../components/Bubble";
export default function RestaurantInfo()
{
    
  return(
<SafeAreaView style={{backgroundColor:"#F6F6F6",flex:1}}>

  <View style={{flexDirection:"row",alignItems:"center",gap:30,padding:10,}}>
<TouchableOpacity style={styles.iconview}>
      <Image source={ require("../assets/back.png")} style={styles.icon}></Image>

    </TouchableOpacity>
    <Text>Details</Text>
    </View>
    <ScrollView>
<View style={{justifyContent:"space-around" ,padding:10,gap:7,backgroundColor:"#F6F6F6",borderRadius:10,gap:10,margin:10}}>
    <TouchableOpacity style={{alignItems:"center"}}>
    <Image style={{height:150,width:340,borderRadius:10}} source={require("../assets/paragon.png")}></Image>
    </TouchableOpacity>
    <Text style={{fontSize:15}}>Rahmath Family Restaurant</Text>
    <Text style={{fontSize:12,color:"#909090"}}>Beef Biriyani, Chicken Biriayani, and veg meals </Text>
    <View style={{flexDirection:"row"}}>
      <View style={{flexDirection:"row",gap:30}}>
    <View style={{flexDirection:"row"}}>
    <Image source={ require("../assets/star.png")} ></Image>
    <Image source={ require("../assets/star.png")} ></Image>
    <Image source={ require("../assets/star.png")} ></Image>
    <Image source={ require("../assets/star.png")} ></Image>
    </View>
    <View style={{flexDirection:"row",gap:10,alignItems:"baseline"}}>
    <Image source={ require("../assets/freedelivery.png")} ></Image>
    <Text style={{fontSize:12,color:"#3F3F3F"}}>Free delivery</Text>
    <Image source={ require("../assets/time.png")} ></Image>
    <Text style={{fontSize:12}}>20 min</Text>
    </View>
    </View>
    </View>
  </View> 
  <ScrollView horizontal style={{padding:10,gap:10}}>
 <Bubble></Bubble>
 <Bubble></Bubble>
 <Bubble></Bubble>
 <Bubble></Bubble>
  </ScrollView>
  <View style={{flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap",gap:10}}>
  <Burger></Burger>
  <Burger></Burger>
  <Burger></Burger>
  <Burger></Burger>
  <Burger></Burger>
  <Burger></Burger>
  </View>
  </ScrollView>  
  </SafeAreaView> 
  )}
  const styles=StyleSheet.create({
    icon:{
      width:25,
      height:25},
      iconview:{
        backgroundColor:"#D9D9D9",
        borderRadius:500,
        height:50,
        width:50,
        justifyContent:"space-around",
        alignItems:"center"
    
      },
      
  })