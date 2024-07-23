import { StyleSheet,TouchableOpacity,Text } from "react-native";
export default function Button({title}){
    return( 
        <TouchableOpacity style={styles.next}>
            <Text style={styles.textnext}>{title}</Text>
        </TouchableOpacity>
    )}
    const styles=StyleSheet.create({
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
    })