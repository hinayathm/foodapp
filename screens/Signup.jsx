import { Text, View ,Image,StyleSheet, TouchableOpacity, TextInput, ImageBackground, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from "react";


export default function Signup(){
    const [hidden,setHidden]=useState(true)
    return(
        <SafeAreaView style={styles.safearea}>
            <View style={styles.viwe1}>
                <ImageBackground source={ require("../assets/backgroundimg.png")} resizeMode="cover" style={styles.bgimg}>
                <Text style={styles.login}>Create an Account</Text>
                <Text style={styles.text}>Please create an account to get started</Text>
                </ImageBackground>
            </View>
            <ScrollView style={styles.bottom}>
            

            <View style={styles.view2}>
                <Text style={styles.text1}>Email</Text>
                <TextInput style={styles.inputbox} placeholder="hinayath@gmail.com"></TextInput>
                <Text style={styles.text1}>Password</Text>
                <View style={styles.inputbox}>
                <TextInput placeholder="**********" secureTextEntry={hidden}
                maxLength={20}>

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
                <Text style={styles.text1}>Re-Password</Text>
                <View style={styles.inputbox}>
                <TextInput placeholder="**********" secureTextEntry={hidden}
                maxLength={20}>

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

                <Button title={"Signup"} style={styles.button} ></Button>
        
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
            flex:2/3
         
            
            




        },
        view2:{
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
            
        },
        bottom:{
            flex:2/3,
            height:700
        }


    })