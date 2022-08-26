import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import LottieView  from "lottie-react-native";
import AsyncStorage  from '@react-native-async-storage/async-storage';
import MenuItem from "../components/restaurantDetail/MenuItem";
import { useNavigation } from '@react-navigation/native';
export default function OrderCompleted() {
      const [lastOrder, setLastOrder] = useState({})
  const navigation = useNavigation();
  useEffect(() => {
       async function getOrder() {
      const orderString=await AsyncStorage.getItem('uber-eat-order');
        setLastOrder(JSON.parse(orderString));
        }
        getOrder();
    }, [])
    const total = lastOrder?.items
    ?.map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total?.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
      <LottieView
        
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {lastOrder?.restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItem
            foods={lastOrder?.items}
            hideCheckBox={true}
            marginLeft={10}
          />
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}