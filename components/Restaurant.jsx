import { Text,View ,StyleSheet,Image, TouchableOpacity, ScrollView} from "react-native";
export default function Restaurant()
{
    
  return(
    <TouchableOpacity style={{padding:10,gap:7,backgroundColor:"#F6F6F6",borderRadius:10}}>
    <TouchableOpacity style={{}}>
    <Image style={{height:150,width:340,borderRadius:10,flex:1,alignSelf:"center"}} source={require("../assets/paragon.png")}></Image>
    </TouchableOpacity>
    <Text style={{fontSize:15}}>Rahmath Family Restaurant</Text>
    <Text style={{fontSize:12,color:"#909090"}}>Beef Biriyani, Chicken Biriayani, and veg meals </Text>
    <View style={{flexDirection:"row",justifyContent:"sp"}}>
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
  </TouchableOpacity>

  )}
