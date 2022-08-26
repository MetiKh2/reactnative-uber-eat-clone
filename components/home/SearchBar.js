import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { YELP_API_KEY } from "../../screens/Home";
export default function SearchBar({setCity,city,getRestaurantsFromYelp}) {
   
  console.log('ddd');
  return (
    <View style={{ marginTop: 15, flexDirection: "row"}}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#eee",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 30,
          flex:1
        }}
      >
        <Ionicons name="location-sharp" size={24} />
        <TextInput style={{flex:1}} placeholder="Search" value={city} onChangeText={setCity}/>
        <Pressable
        onPress={()=>{
          getRestaurantsFromYelp();
          console.log('hey');
        }}
          style={{
            flexDirection: "row",
            marginRight: 8,
            backgroundColor: "white",
            padding: 9,
            borderRadius: 30,
            alignItems: "center",
          }}
        >
          <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
          <Text>Search</Text>
        </Pressable>
      </View>
      {/* <GooglePlacesAutocomplete
       placeholder='Search'
       styles={{
        textInput: {
          backgroundColor: "#eee",
          borderRadius: 20,
          fontWeight: "700",
          marginTop: 7,
        },
        textInputContainer: {
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
        },
      }}
      renderLeftButton={() => (
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" size={24} />
        </View>
      )} renderRightButton={() => (
        <View
          style={{
            flexDirection: "row",
            marginRight: 8,
            backgroundColor: "white",
            padding: 9,
            borderRadius: 30,
            alignItems: "center",
          }}
        >
          <AntDesign
            name="clockcircle"
            size={11}
            style={{ marginRight: 6 }}
          />
          <Text>Search</Text>
        </View>
      )}/> */}
    </View>
  );
}
