import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Spacer,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import Icons from "react-native-vector-icons/FontAwesome";

import { useAppDispatch, useAppSelector } from "../../store";
import { Logout } from "../../store/slices/auth.slice";
import Card from "../../components/Card";
import { RefreshControl } from "react-native";
import {
  GetDashboard,
  selectDashboard,
} from "../../store/slices/dashboard.slice";
import { useEffect } from "react";
import { formatCurrency } from "../../utils";

const Transaksi = () => {
  return (
    <ScrollView>
      <VStack
        shadow={3}
        paddingBottom={15}
        space={5}
        backgroundColor={"#0e0c28"}
        roundedBottom={20}
      >
        <Heading color={"white"} paddingTop={15} paddingLeft={15}>
          Transaksi
        </Heading>
        <HStack space={4} justifyContent="center">
          <Center h="120" w="100" bg="primary.300" rounded="md" shadow={3}>
            <Icons name="group" size={50} />
            Registrasi
          </Center>
          <Center h="120" w="100" bg="primary.300" rounded="md" shadow={3}>
            <Icons name="arrow-circle-o-up" size={50} />
            Upgrade
          </Center>
          <Center h="120" w="100" bg="primary.300" rounded="md" shadow={3}>
            <Icons name="repeat" size={50} />
            Repeat Order
          </Center>
        </HStack>
      </VStack>
      <Text
        marginLeft={15}
        marginTop={15}
        fontWeight={"bold"}
        fontSize={15}
        color="#0e0c28"
      >
        History Transaksi
      </Text>

      <Pressable onPress={() => console.log("pressed")}>
        <HStack
          backgroundColor={"#0e0c28"}
          rounded={15}
          padding={2}
          marginBottom={2}
          marginTop={1}
          marginRight={5}
          marginLeft={5}
        >
          <Box marginY={"auto"} marginLeft={2}>
            <Icons color={"white"} name="group" size={40} />
          </Box>
          <VStack marginLeft={5}>
            <Heading color={"white"}>Registrasi</Heading>
            <Text color={"white"} fontSize={10}>
              FV01-2301-INV-002563
            </Text>
            <Text color={"white"} fontSize={10}>
              21 Januari 2023
            </Text>
          </VStack>
          <Box marginLeft={10} marginY={"auto"}>
            <Heading color={"white"} fontSize={15}>
              Rp9.481.940
            </Heading>
            <Box>
              <Text color={"white"} fontSize={10} alignSelf="center">
                PAID
              </Text>
            </Box>
          </Box>
        </HStack>
      </Pressable>

      <HStack
        backgroundColor={"#0e0c28"}
        rounded={15}
        padding={2}
        marginBottom={2}
        marginTop={1}
        marginRight={5}
        marginLeft={5}
      >
        <Box marginY={"auto"} marginLeft={2}>
          <Icons color={"white"} name="group" size={40} />
        </Box>
        <VStack marginLeft={5}>
          <Heading color={"white"}>Registrasi</Heading>
          <Text color={"white"} fontSize={10}>
            FV01-2301-INV-002563
          </Text>
          <Text color={"white"} fontSize={10}>
            21 Januari 2023
          </Text>
        </VStack>
        <Box marginLeft={10} marginY={"auto"}>
          <Heading color={"white"} fontSize={15}>
            Rp9.481.940
          </Heading>
          <Text color={"white"} fontSize={10} alignSelf="center">
            PAID
          </Text>
        </Box>
      </HStack>
      <HStack
        backgroundColor={"#0e0c28"}
        rounded={15}
        padding={2}
        marginBottom={2}
        marginTop={1}
        marginRight={5}
        marginLeft={5}
      >
        <Box marginY={"auto"} marginLeft={2}>
          <Icons color={"white"} name="group" size={40} />
        </Box>
        <VStack marginLeft={5}>
          <Heading color={"white"}>Registrasi</Heading>
          <Text color={"white"} fontSize={10}>
            FV01-2301-INV-002563
          </Text>
          <Text color={"white"} fontSize={10}>
            21 Januari 2023
          </Text>
        </VStack>
        <Box marginLeft={10} marginY={"auto"}>
          <Heading color={"white"} fontSize={15}>
            Rp9.481.940
          </Heading>
          <Text color={"white"} fontSize={10} alignSelf="center">
            PAID
          </Text>
        </Box>
      </HStack>
      <HStack
        backgroundColor={"#0e0c28"}
        rounded={15}
        padding={2}
        marginBottom={2}
        marginTop={1}
        marginRight={5}
        marginLeft={5}
      >
        <Box marginY={"auto"} marginLeft={2}>
          <Icons color={"white"} name="group" size={40} />
        </Box>
        <VStack marginLeft={5}>
          <Heading color={"white"}>Registrasi</Heading>
          <Text color={"white"} fontSize={10}>
            FV01-2301-INV-002563
          </Text>
          <Text color={"white"} fontSize={10}>
            21 Januari 2023
          </Text>
        </VStack>
        <Box marginLeft={10} marginY={"auto"}>
          <Heading color={"white"} fontSize={15}>
            Rp9.481.940
          </Heading>
          <Text color={"white"} fontSize={10} alignSelf="center">
            PAID
          </Text>
        </Box>
      </HStack>
      <HStack
        backgroundColor={"#0e0c28"}
        rounded={15}
        padding={2}
        marginBottom={2}
        marginTop={1}
        marginRight={5}
        marginLeft={5}
      >
        <Box marginY={"auto"} marginLeft={2}>
          <Icons color={"white"} name="group" size={40} />
        </Box>
        <VStack marginLeft={5}>
          <Heading color={"white"}>Registrasi</Heading>
          <Text color={"white"} fontSize={10}>
            FV01-2301-INV-002563
          </Text>
          <Text color={"white"} fontSize={10}>
            21 Januari 2023
          </Text>
        </VStack>
        <Box marginLeft={10} marginY={"auto"}>
          <Heading color={"white"} fontSize={15}>
            Rp9.481.940
          </Heading>
          <Text color={"white"} fontSize={10} alignSelf="center">
            PAID
          </Text>
        </Box>
      </HStack>
    </ScrollView>
  );
};

export default Transaksi;
