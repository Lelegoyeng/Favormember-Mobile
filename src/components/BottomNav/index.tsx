import { Box, Center, HStack, Pressable, Text } from "native-base";
import React from "react";
// import {
//   AkunIcon,
//   HomeIcon,
//   InformasiIcon,
//   ReportIcon,
//   TransaksiIcon,
// } from "../../assets";

// import HomeIcon from "../../assets/home.svg";

// const Icon = ({ label }: any) => {
//   switch (label) {
//     case "Akun":
//       return <AkunIcon />;
//     case "Transaksi":
//       return <TransaksiIcon />;
//     case "Report":
//       return <ReportIcon />;
//     case "Informasi":
//       return <InformasiIcon />;
//     default:
//       return <HomeIcon />;
//   }
// };

const BottomNav = ({ state, descriptors, navigation }: any) => {
  return (
    // <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">
    <HStack bg="#0e0c28" alignItems="center" safeAreaBottom shadow={6}>
      {state.routes.map((route: any, index: number) => {
        const selected = state.index === index;
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        return (
          <Pressable
            opacity={selected ? 1 : 0.5}
            py="3"
            flex={1}
            // onPress={() => setSelected(0)}
          >
            <Center>
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
