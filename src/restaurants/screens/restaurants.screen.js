import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { SearchBar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";

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
      <SearchBar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfo />
    </RestaurantListContainer>
  </SafeArea>
);
