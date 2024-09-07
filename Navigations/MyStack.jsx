import { createStackNavigator } from '@react-navigation/stack';
import Onborading from '../screens/Onborading';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Nonveg from '../screens/Nonveg';
import RestaurantInfo from '../screens/RestaurantInfo';
import OrderDetails from '../screens/OrderDetails';
import OrderPlace from '../screens/OrderPlace';


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Onbording'>
      <Stack.Screen name="Onboarding" component={Onborading}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Login" component={Login}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Signup" component={Signup}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Home" component={Home}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Nonveg" component={Nonveg}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="ResturantInfo" component={RestaurantInfo}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="OrderDetails" component={OrderDetails}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="OrderPlace" component={OrderPlace}
      options={{
        headerShown:false
      }}
      />


    </Stack.Navigator>
  );
}