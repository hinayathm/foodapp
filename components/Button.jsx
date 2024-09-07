import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Button({ title }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{
            backgroundColor: "#FF7600",width: 350,height: 60,borderRadius: 10,alignItems: "center",justifyContent: "center"}}
            onPress={() => navigation.navigate("Login")}
        >
            <Text style={{fontSize: 15,color: "white",fontWeight: "bold",}}>{title}</Text>
        </TouchableOpacity>

    )
}
