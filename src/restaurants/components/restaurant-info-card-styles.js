import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "../../components/typography/text.component";
import { View,Image } from "react-native";

export const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Rating = styled(View)`
  flex-direction: row;

`;
export const Status = styled(View)`
flex-direction: row;
justify-direction: space-between;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
`;
export const StatusEnd = styled(View)`
  flex-direction: row;
  justify-direction: flex-end;
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;