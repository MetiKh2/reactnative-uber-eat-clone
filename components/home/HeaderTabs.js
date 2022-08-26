import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs({activeTab,setActiveTab}) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text={"Delivery"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text={"Pickup"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({ text, textColor, btnColor,activeTab,setActiveTab }) => {
  return (
    <View>
      <TouchableOpacity
      onPress={()=>setActiveTab(text)}
        style={{
          backgroundColor: activeTab==text?'black':'white',
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
      >
        <Text style={{ color: activeTab==text?'white':'black', fontSize: 15, fontWeight: "bold" }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
