import { Text, View ,Image, SafeAreaView,StyleSheet, TouchableOpacity} from "react-native";
import Button from "../components/Button";

export default function Home(){
    return(
        <SafeAreaView style={styles.safearea}>
            <View style={styles.view1}>
        <Image source={require("../assets/delivery.png")} style={styles.img} ></Image>
        </View>
        <View style={styles.view2}>
        <Text style={styles.heading}>All your favorites</Text>
        <Text style={styles.content}>Get all your loved foods in one once place, you just place the order we do the rest</Text>
       <Button title={"Next"}></Button>
        <TouchableOpacity style={styles.skip}>
            <Text style={styles.textskip}>SKIP</Text>
        </TouchableOpacity>
        </View>

        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    safearea:{
        flex:1

    },
  view1:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginRight:40
    
    
  }  ,
  view2:{
    flex:1,
    gap:40,
    alignItems:"center",
    
  },
  heading:{
    fontSize:30,
    fontWeight:"bold",
    
    
    

  },
  content:{
    fontSize:15,
    alignItems:"center",
    margin:20,
    textAlign:"center"

  },
  next:{
    backgroundColor:"#FF7600",
    width:300,
    height:50,
    justifyContent:"space-around",
    borderRadius:10

  },
  textnext:{
    margin:10,
    marginLeft:120,
    fontSize:20,
    color:"white",
    fontWeight:"bold"

  },
  img:{
    height:350,
    width:350,
    flexShrink:1
    
  },
  textskip:{
    color:"#7C7C7C"

  }

})