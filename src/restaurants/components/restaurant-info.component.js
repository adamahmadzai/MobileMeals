import React from "react";
import { View,Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../components/typography/text.component.js";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import {Spacer} from "../../components/spacer/spacer.component";


const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Status = styled(View)`
flex-direction: row;
justify-direction: row;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
`;
const StatusEnd = styled(View)`
  flex-direction: row;
  justify-direction: row;
`;
const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://img.freepik.com/premium-photo/pizza_100342-33.jpg?w=740",
    ],
    address = "515 Loudon Rd, Loudonville, NY 12211",
    isOpenNow = false,
    rating = 3.2,
    isClosedTemporarily = false,
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
            {ratingArray.map(() => {
              <SvgXml xml={star} height={20} width={20}></SvgXml>;
            })}
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
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </StatusEnd>
        </Status>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};
