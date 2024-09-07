import { Text,View ,StyleSheet,Image, TouchableOpacity} from "react-native";
export default function Header()
{
  return(
    <View style={styles.mainview}>
      <View style={styles.iconandtext}>
    <TouchableOpacity style={styles.iconview}>
      <Image source={ require("../assets/hamburger.png")} style={styles.icon}></Image>

    </TouchableOpacity>
    <View>
    <Text style={styles.username}>Hinayath M</Text>
    <Text style={styles.wish}>Good Morning</Text>
    </View>
    </View>
    <View>
    <Image source={ require("../assets/cart.png")}></Image>
    </View>

    </View>
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
    color:"#FF7622",
    fontWeight:"bold"
  },
  wish:{
    color:"#9D9D9D"
  },
  iconandtext:{
    flexDirection:"row",
    gap:25
    
  }
  
  

})
