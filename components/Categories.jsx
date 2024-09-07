
import { Text,StyleSheet,Image, TouchableOpacity,} from "react-native";
import { useState } from "react";
export default function Categories({title,image,color})
{
  const [state,setState]=useState("#CACACA");
return(
<TouchableOpacity onPress={()=>setState("#FFD27C")} style={[styles.categories,color?{backgroundColor:color}:{backgroundColor:state}]}>
        <Image style={{height:35,width:35,borderRadius:100}}  source={{uri:image}}></Image>
        <Text style={styles.categoriestext}>{title}</Text>
      </TouchableOpacity>
)}
const styles=StyleSheet.create({
    categories:{
         backgroundColor:"#FFD27C",
        height:52,
        width:120,
        borderRadius:44,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-around",
        padding:5,
        marginHorizontal:5
        
        
      },
      categoriestext:{
        fontWeight:"bold",
        fontSize:12
      },
})