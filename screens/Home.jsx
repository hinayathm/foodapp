import { Text,TextInput,View ,StyleSheet,Image, ScrollView,StatusBar, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Categories from "../components/Categories";
export default function Home()
{
  return(
    <SafeAreaView style={{flex:1}}>
      <Header></Header>
      <View style={{padding:10}}>
      <TextInput style={styles.searchbutton} placeholder="Search dishes,restaurants"></TextInput>
      </View>
      <ScrollView style={styles.scrollView}>
        <View >
      <View style={{flexDirection:"row", justifyContent:"space-between",}}>
      <Text style={styles.title}>All Categories</Text>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
      <Text>see all</Text>
      <Image style={{width:20,height:20}} source={ require("../assets/arrow2.png")}></Image>
      </View>
      </View>
      <View style={styles.categoriesview}>
        <ScrollView horizontal style={{gap:20}}>
          
  <Categories title={"Veg"} color={"#FFD27C"} image={"https://i.pngimg.me/thumb/f/720/comdlpng6946264.jpg"}></Categories>
      <Categories onPress={function(){
  navigation.navigate("Nonveg")
}}
 title={"non veg"}  image={"https://i.pngimg.me/thumb/f/720/comdlpng6946264.jpg"}></Categories> 
      </ScrollView>
      </View>
      <Text style={{padding:15}}>All open Restaurants</Text>
        <View>
      <View style={{justifyContent:"space-around" ,padding:10,gap:7}}>
        <TouchableOpacity style={{alignItems:"center"}}>
        <Image style={{height:150,width:360,borderRadius:10}} source={require("../assets/paragon.png")}></Image>
        </TouchableOpacity>
        <Text style={{fontSize:15}}>Rahmath Family Restaurant</Text>
        <Text style={{fontSize:12,color:"#909090"}}>Beef Biriyani, Chicken Biriayani, and veg meals </Text>
        <View style={{flexDirection:"row",justifyContent:"sp"}}>
          <View style={{flexDirection:"row",gap:30}}>
        <View style={{flexDirection:"row"}}>
        <Image source={ require("../assets/star.png")} ></Image>
        <Image source={ require("../assets/star.png")} ></Image>
        <Image source={ require("../assets/star.png")} ></Image>
        <Image source={ require("../assets/star.png")} ></Image>
        </View>
        <View style={{flexDirection:"row",gap:10,alignItems:"baseline"}}>
        <Image source={ require("../assets/freedelivery.png")} ></Image>
        <Text style={{fontSize:12,color:"#3F3F3F"}}>Free delivery</Text>
        <Image source={ require("../assets/time.png")} ></Image>
        <Text style={{fontSize:12}}>20 min</Text>
        </View>
        </View>
        </View>
      </View>
      <View style={{justifyContent:"space-around" ,padding:10,gap:7}}>
        <TouchableOpacity >
          <Image style={{height:150,width:360,borderRadius:10}} source={require("../assets/rahamath.jpg")}></Image>
        </TouchableOpacity>
        <Text style={{fontSize:15}}>Paragon Family Restaurant</Text>
        <Text style={{fontSize:12,color:"#909090"}}>Beef Biriyani, Chicken Biriayani, and veg meals </Text>
        <View style={{flexDirection:"row"}}>
          <View style={{flexDirection:"row",gap:30}}>
        <View style={{flexDirection:"row"}}>
        <Image source={ require("../assets/star.png")} ></Image>
        <Image source={ require("../assets/star.png")} ></Image>
        </View>
        <View style={{flexDirection:"row",gap:10,alignItems:"baseline"}}>
        <Image source={ require("../assets/freedelivery.png")} ></Image>
        <Text style={{fontSize:12,color:"#3F3F3F"}}>Free delivery</Text>
        <Image source={ require("../assets/time.png")} ></Image>
        <Text style={{fontSize:12}}>20 min</Text>
        </View>
        </View>
        </View>
      </View>
      <View style={{justifyContent:"space-around" ,padding:10,gap:7}}>
        <TouchableOpacity style={{alignItems:"center"}}>
        <Image  style={{height:150,width:360,borderRadius:10}}source={ require("../assets/rahamath2.jpg")} ></Image>
        </TouchableOpacity>
        <Text style={{fontSize:15}}>Rahmath Family Restaurant</Text>
        <Text style={{fontSize:12,color:"#909090"}}>Beef Biriyani, Chicken Biriayani, and veg meals </Text>
        <View style={{flexDirection:"row",justifyContent:"sp"}}>
          <View style={{flexDirection:"row",gap:30}}>
        <View style={{flexDirection:"row"}}>
        <Image source={ require("../assets/star.png")} ></Image>
        <Image source={ require("../assets/star.png")} ></Image>
        <Image source={ require("../assets/star.png")} ></Image>
        <Image source={ require("../assets/star.png")} ></Image>
        </View>
        <View style={{flexDirection:"row",gap:10,alignItems:"baseline"}}>
        <Image source={ require("../assets/freedelivery.png")} ></Image>
        <Text style={{fontSize:12,color:"#3F3F3F"}}>Free delivery</Text>
        <Image source={ require("../assets/time.png")} ></Image>
        <Text style={{fontSize:12}}>20 min</Text>
        </View>
        </View>
        </View>    
      </View>
      </View>
      </View>
      <TouchableOpacity style={{alignItems:"center"}}>
        <Image  style={{height:150,width:360,borderRadius:10}}source={ require("../assets/rahamath2.jpg")} ></Image>
        </TouchableOpacity>
      

      
</ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  searchbutton:{
    color:"#9D9D9D",
    backgroundColor:"#E8E8E8",
    width:367,
    height:64,
    borderRadius:12,
    padding:10,


  },
  searchview:{
    alignItems:"center",
    paddingTop:20
   
  },
  title:{
    padding:15
  },

  categoriesview:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingLeft:10
  },
  scrollView:{
    
  }
 
})
