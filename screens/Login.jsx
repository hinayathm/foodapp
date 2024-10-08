import { Text, View ,Image,StyleSheet, TouchableOpacity, TextInput, ImageBackground, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../server/firebaseConfig";


export default function Login(){
    const [hidden,setHidden]=useState(true)
    const navigation=useNavigation()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    function handleSubmit(){
        const auth = getAuth();
signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log( "login " ,user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
    }

 
    return(
        <SafeAreaView style={styles.safearea}>
            <View style={styles.viwe1}>
                <ImageBackground source={ require("../assets/backgroundimg.png")} resizeMode="cover" style={styles.bgimg}>
                <Text style={styles.login}>Login</Text>
                <Text style={styles.text}>Please sign in your existing account</Text>
                </ImageBackground>
            </View>
            <ScrollView style={{flex:1}}>
            

            <View style={styles.view2}>
                <Text style={styles.text1}>Email</Text>

                <TextInput style={styles.inputbox} placeholder="hinayath@gmail.com" onChangeText={(value)=>setUsername(value)}></TextInput>
                <Text style={styles.text1}>Password</Text>
                <View style={styles.inputbox}>
                <TextInput style={styles.inputbo} placeholder="**********" secureTextEntry={hidden}
                maxLength={20} 
                onChangeText={(value)=>setPassword(value)}
           >

                </TextInput>

                <MaterialCommunityIcons 
                    size={24} 
                    color="#aaa"
                    style={styles.icon} 
                    name="eye-off"
                    onPress={function(){
                    setHidden(!hidden)
                    }}
                /> 
                
                </View>

                <Text style={styles.forgot} >Forgot Password </Text>
                <TouchableOpacity style={{
            backgroundColor: "#FF7600",width: 350,height: 60,borderRadius: 10,alignItems: "center",justifyContent: "center"}}
            onPress={handleSubmit}
        >
            <Text style={{fontSize: 15,color: "white",fontWeight: "bold",}}>Login</Text>
        </TouchableOpacity>
        
                <Text>Don’t have an account ?<Text style={styles.sign}> Sign Up</Text></Text>

            </View>
            </ScrollView>
        </SafeAreaView>
    )}
    const styles=StyleSheet.create({
        safearea:{
            flex:1,
            backgroundColor:"#121223"
        },
        viwe1:{
            flex:1,
         
            
            




        },
        view2:{
            flex:1,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            backgroundColor:"white",
            gap:18,
            justifyContent:"center",
            padding:20,
            alignItems:"center"
            
        },
        inputbox:{
            backgroundColor:"#E8E9EB",
            borderRadius:10,
            height:50,
            width:"100%",
            paddingHorizontal:10,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"
            

        },
        forgot:{
            color:"#FF7600",
            alignSelf:"flex-end",
            fontWeight:"bold"
         

        },
        button:{
            alignSelf:"center"
        },
        text1:{
            alignSelf:"flex-start",
            paddingLeft:4,
            color: "#595959"

        },
        login:{
            color:"white",
            fontWeight:"bold",
            fontSize:35,

            

        },
        text:{
            color:"white",
            fontSize:20,
            padding:10,
            textAlign:"center",

        },
        sign:{
            color:"#FF7600"
        },
        bgimg:{
            flex:1,
            justifyContent:"center",
            gap:50,
            alignItems:"center",  
           
        },
        icon:{
            
        }


    })