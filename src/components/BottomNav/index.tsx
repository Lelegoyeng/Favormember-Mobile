import { Box, Center, HStack, Pressable, Text } from "native-base";
import React from "react";
import Icons from "react-native-vector-icons/FontAwesome";

const Icon = ({ label, active }: any) => {
  switch (label) {
    case "Akun":
      return <Icons name="user" size={active ? 25 : 15} />;
    case "Transaksi":
      return <Icons name="shopping-bag" size={active ? 25 : 15} />;
    case "Report":
      return <Icons name="pie-chart" size={active ? 25 : 15} />;
    case "Informasi":
      return <Icons name="bullhorn" size={active ? 25 : 15} />;
    default:
      return <Icons name="home" size={active ? 25 : 15} />;
  }
};

const BottomNav = ({ state, descriptors, navigation }: any) => {
  return (
    // <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">
    <HStack
      bg="#0e0c28"
      alignItems="center"
      safeAreaBottom
      shadow={6}
      rounded={25}
      padding={1}
      margin={2}
    >
      {state.routes.map((route: any, index: number) => {
        const selected = state.index === index;
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!selected && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <Pressable
            opacity={selected ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={onPress}
          >
            <Center>
              <Icon label={label} active={selected} />
              <Text color="white" fontSize="12">
                {label}
              </Text>
            </Center>
          </Pressable>
        );
      })}
    </HStack>
    // </Box>
  );
};

export default BottomNav;
