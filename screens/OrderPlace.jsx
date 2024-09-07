import { View,Text,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

export default function OrdrePlace() {
    return(
        <SafeAreaView style={{flex:1,justifyContent:"space-between",alignItems:"center",padding:50}}>
              <View></View>
            <View style={{alignItems:"center"}}>
            <Image style={{width:250,height:250,alignSelf:"center"}} source={require("../assets/submit2.jpg")}/>
            <Text style={{fontWeight:"bold",fontSize:20}}>Congratulations</Text>
            <Text style={{textAlign:"center",margin:20,color:"#909090"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sol</Text>
            </View>
          
            <Button title={"Track Order"}></Button>
        </SafeAreaView>)
}