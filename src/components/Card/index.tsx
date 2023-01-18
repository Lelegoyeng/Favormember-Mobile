import { Box, HStack, Text } from "native-base";
import React from "react";
import Icons from "react-native-vector-icons/FontAwesome";

interface Props {
  title: string;
  value: string;
  color: string;
  icon: string;
  colorIcon: string;
}
const Card = ({ title, value, color, icon, colorIcon }: Props) => {
  return (
    <HStack>
      <Box
        w={"100%"}
        alignItems={"center"}
        paddingX="4"
        paddingY="4"
        rounded="lg"
        overflow="hidden"
        borderTopColor="coolGray.200"
        borderRightColor="coolGray.200"
        borderBottomColor="coolGray.200"
        borderLeftColor="green.500"
        borderLeftWidth={"5"}
        borderWidth="2"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <HStack justifyItems={"center"} alignItems="center" space={2}>
          <Icons name={icon} size={25} color={colorIcon} />
          <Text bold color={color} fontSize={16}>
            {title}
          </Text>
        </HStack>
        <Text bold fontSize={20}>
          {value}
        </Text>
      </Box>
    </HStack>
  );
};

export default Card;
