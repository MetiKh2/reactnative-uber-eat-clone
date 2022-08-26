import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
import {useSelector}from'react-redux'
export default function MenuItem({ foods,hideCheckBox=false }) {
  const route = useRoute();
  const dispatch = useDispatch();
  const {items}=useSelector(state=>state.selectedItems)
  function isFoodInCard(food) {
   return Boolean(items.find(item=>item.title==food.title))
  }
  function selectItem(item, checkboxValue) {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        checkboxValue,
        ...item,
        restaurantName: route?.params?.restaurant?.name,
      },
    });
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods?.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {!hideCheckBox&&<BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              isChecked={isFoodInCard(food)}
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={10} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
const FoodInfo = (props) => (
  <View style={{ width: 200, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
