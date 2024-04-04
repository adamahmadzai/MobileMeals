import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled(Text)`
color: ${(props) => props.theme.colors.ui.primary};
padding: ${(props) => props.theme.space[3]};
font-size: 15px;
`;

const RestaurantCard = styled(Card)`
  backgroundcolor: "#fff";
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundcolor: "#fff";
`;


export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://img.freepik.com/premium-photo/pizza_100342-33.jpg?w=740",
    ],
    address = "515 Loudon Rd, Loudonville, NY 12211",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};
