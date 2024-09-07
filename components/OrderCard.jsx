
import { Text,View ,StyleSheet,Image, TouchableOpacity, ScrollView, TextInput} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
export default function OrderCard()

{
    const [state,setState]=useState(0);
  return(
  
  <View style={{backgroundColor:"#121223",width:352,height:153,borderRadius:22,borderColor:"#cccccc",borderWidth:2,flexDirection:"row",alignSelf:"center",gap:10,alignItems:"center",paddingVertical:15,padding:10}}>
<View style={{width:128,height:133,borderRadius:22,backgroundColor:"#2D2D2DAB",}}></View>
<View style={{alignSelf:"flex-start"}}>
    <Text style={{color:"white"}}>Pizza Calone </Text>
    <Text style={{color:"white"}}>European</Text>
    <Text style={{color:"white"}}>18 $</Text>
    <Text style={{color:"#CCC"}}>''14</Text>

</View>
<View style={{flexDirection:"row",gap:10,alignSelf:"flex-end",paddingHorizontal:10,right:10}}>
 
 
<TouchableOpacity 

onPress={()=>{if(state>=1) setState(state-1)}}>
<AntDesign name="minus" size={20} color="white" style={{backgroundColor:"#414141",borderRadius:100}} />
</TouchableOpacity>
    <Text style={{color:"#fff"}}>{ state}</Text>
    <TouchableOpacity onPress={()=>setState(state+1)}>
    <AntDesign name="plus" size={20} color="white" style={{backgroundColor:"#414141",borderRadius:100}} />
    </TouchableOpacity>

</View>

</View>)}