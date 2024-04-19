import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { FlatList } from "react-native";

const SafeArea = styled(SafeAreaView)`
flex: 1;
  background-color: #fff;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled(View)`
  flex: 0.08;
  padding: 10px;
  justify-content: center;
`;
const RestaurantListContainer = styled(View)`
  flex: 0.95;
  background-color: blue;
  padding: 10px;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList 
    data={[{name:1},{name:2}]}
    renderItem={()=> <RestaurantInfo/>}
    keyExtractor={(item)=>item.name}
    contentContainerStyle={{padding:15}}
    />
  </SafeArea>
);
