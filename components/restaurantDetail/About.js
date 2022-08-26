import { View, Text, Image } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'
export default function About() {
    const route=useRoute();
    const { name, image_url, price, reviews, rating, categories } =
    route?.params?.restaurant;
    const formattedCategories= categories.map((cat) => cat.title).join(" • ");
    const description = `${formattedCategories} ${
        price ? " • " + price : ""
      } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image_url} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}
const RestaurantImage = ({image}) => (
    <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
  );
  const RestaurantName = ({name}) => (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {name}
    </Text>
  );
  const RestaurantDescription = ({description}) => (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {description}
    </Text>
  );