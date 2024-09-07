import { Text,View ,StyleSheet,Image, TouchableOpacity, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Burger from "../components/Burger";
import Restaurant from "../components/Restaurant";
export default function Nonveg()
{
    
  return(
    <SafeAreaView style={{flex:1}}>
  <ScrollView>
      <View style={styles.iconandtext}>
    <TouchableOpacity style={styles.iconview}>
      <Image source={ require("../assets/back.png")} style={styles.icon}></Image>

    </TouchableOpacity>
    <View style={{backgroundColor:"#E8E8E8",borderRadius:10,height:50,width:150,borderWidth:0.5,borderColor:"#CCCCCC",alignItems:"center",justifyContent:"center"}}>
    <Text style={styles.username}>Non-Vegetarian</Text>
    
    </View>
   
    <View style={{justifyContent:"center"}}>
    <Image source={ require("../assets/cart.png")}></Image>
    </View>

    </View>
    <Text style={{fontWeight:"500",padding:20}}>Popular Items</Text>
    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
    <Burger></Burger>
    <Burger></Burger>
    
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-around",paddingTop:30}}>
    <Burger></Burger>
    <Burger></Burger>
    
    
    </View>
    <View style={{gap:10,margin:10}}>
   <Restaurant></Restaurant>
<Restaurant></Restaurant>
</View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  iconview:{
    backgroundColor:"#D9D9D9",
    borderRadius:500,
    height:50,
    width:50,
    justifyContent:"space-around",
    alignItems:"center"

  },
  mainview:{
    justifyContent:"space-between",
    flexDirection:"row",
    paddingHorizontal:10

  },
  icon:{
    width:25,
    height:25
  },
  username:{
    color:"black",
    
  },
  wish:{
    color:"#9D9D9D"
  },
  iconandtext:{
    flexDirection:"row",
    gap:25,
    justifyContent:"space-around",
    marginVertical:10
    
  },
  
  

})

