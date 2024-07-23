import { Text, View ,Image,StyleSheet, TouchableOpacity, TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

export default function Login(){
    return(
        <SafeAreaView style={styles.safearea}>
            <View style={styles.viwe1}>
                <Text style={styles.login}>Login</Text>
                <Text style={styles.text}>Please sign in your existing account</Text>
            </View>
            <View style={styles.view2}>
                <Text style={styles.text1}>Email</Text>
                <TextInput style={styles.inputbox}placeholder="hinayath@gmail.com"></TextInput>
                <Text style={styles.text1}>Password</Text>
                <TextInput style={styles.inputbox}placeholder="**********" secureTextEntry={true}
                ></TextInput>

                <Text style={styles.forgot} >Forgot Password </Text>
                <Button title={"login"} style={styles.button} ></Button>
        
                <Text>Don’t have an account ? Sign Up</Text>

            </View>
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
            gap:20,
            justifyContent:"center",
            padding:20,
            alignItems:"center"
            
        },
        inputbox:{
            backgroundColor:"#E8E9EB",
            borderRadius:10,
            height:50,
            width:350,
            paddingHorizontal:10
            

        },
        forgot:{
            color:"#FF7600",
            alignSelf:"flex-end",
         

        },
        button:{
            alignSelf:"center"
        },
        text1:{
            alignSelf:"flex-start",
            paddingLeft:15
        }
        



    })