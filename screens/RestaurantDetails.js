import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItem from "../components/restaurantDetail/MenuItem";
import ViewCart from "../components/restaurantDetail/ViewCart";
const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-360x480.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2018/01/Chinese-Orange-Chicken-2-360x480.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2015/12/Levain-Bakery-Chocolate-Chip-Copycat-Cookie-Recipe-3-1024x870.jpg",
  },
];
export default function RestaurantDetails({route}) {
  return (
    <View style={{ flex: 1 }}>
        <StatusBar barStyle={'dark-content'} backgroundColor='#fff'/>
      <About />
      <Divider width={1} style={{ marginVertical: 20 }} />
      <View style={{ flex: 1 }}>
        <MenuItem foods={foods} />
      </View>
      <ViewCart />
    </View>
  );
}
