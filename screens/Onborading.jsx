import { Text, View ,Image, SafeAreaView,StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Onborading(){
  const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.safearea}>
            <View style={styles.view1}>
        <Image source={require("../assets/delivery.png")} style={styles.img} ></Image>
        </View>
        <View style={styles.view2}>
        <Text style={styles.heading}>All your favorites</Text>
        <Text style={styles.content}>Get all your loved foods in one once place, you just place the order we do the rest</Text>
        <TouchableOpacity style={{
            backgroundColor: "#FF7600",width: 350,height: 60,borderRadius: 10,alignItems: "center",justifyContent: "center"}}
            onPress={() => navigation.navigate("Login")}
        >
            <Text style={{fontSize: 15,color: "white",fontWeight: "bold",}}>Next</Text>
        </TouchableOpacity>
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
    
    alignItems:"center",
    justifyContent:"center"
    
  },
  heading:{
    fontSize:18,
    fontWeight:"bold",
    
    
    

  },
  content:{
    fontSize:12,
    alignItems:"center",
    margin:20,
    textAlign:"center",
    color:"#949494",
    paddingVertical:20
    


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
    height:300,
    width:300,
    flexShrink:1
    
  },
  textskip:{
    color:"#7C7C7C"

  },
  skip:{
    padding:30
  }

})