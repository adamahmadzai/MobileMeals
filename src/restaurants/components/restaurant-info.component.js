import React from "react";
import { View,Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../components/typography/text.component.js";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import {Spacer} from "../../components/spacer/spacer.component";
import open from "../../../assets/open"
import {
  RestaurantCard,RestaurantCardCover,Address,Rating,Status,StatusEnd,Icon

} from "./restaurant-info-card-styles";


export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://img.freepik.com/premium-photo/pizza_100342-33.jpg?w=740",
    ],
    address = "515 Loudon Rd, Loudonville, NY 12211",
    isOpenNow = true,
    rating = 3.7,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArray);

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Text variant="label">{name}</Text>
        <Status>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} height={20} width={20}/>
            ))}
          </Rating>
          <StatusEnd>
            {isClosedTemporarily && (
              <Text variant="error" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </StatusEnd>
        </Status>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};
