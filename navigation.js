import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import { Provider } from 'react-redux'
import Home from './screens/Home'
import RestaurantDetails from './screens/RestaurantDetails'
import configureStore from './redux/store';
import OrderCompleted from './screens/OrderCompleted';
const store = configureStore();
export default function RootNavigation() {
    const Stack = createNativeStackNavigator()


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='RestaurantDetails' component={RestaurantDetails}/>
            <Stack.Screen name='OrderCompleted' component={OrderCompleted}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}