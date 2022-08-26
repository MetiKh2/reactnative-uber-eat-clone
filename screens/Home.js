import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import Constants  from 'expo-constants'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems from '../components/home/RestaurantItems'
import { localRestaurants } from './../components/home/RestaurantItems';
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'

export const YELP_API_KEY='_Uvz7g0aaCdJJUE5TllGGN6Nadt6e3b2q-uhykHu35N5V8FG52O4bxQqhAvXgz68d4u0KC4RP4CCieya3BIveFf-XbYCFBNif5e-l-HXzkorlXPHyz9PgRfRqxEFY3Yx'
const Home = ({navigation}) => {
  const [city, setCity] = useState("San Francisco");
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [activeTab, setActiveTab] = useState("Delivery");
   function getRestaurantsFromYelp() {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then((json) =>
      setRestaurantData(
        json.businesses.filter((business) =>
          business.transactions.includes(activeTab.toLowerCase())
        )
      )
    );
  }
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [ activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1,paddingTop:Constants.statusBarHeight}}>
    <View style={{ backgroundColor: "white", padding: 15 }}>
    <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
    <SearchBar city={city} setCity={setCity} getRestaurantsFromYelp={getRestaurantsFromYelp}/>
    </View>
    <ScrollView>
    <Categories/>
    <RestaurantItems  restaurantData={restaurantData}/>
    </ScrollView>
    <Divider width={1}/>
    <BottomTabs/>

  </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})