import { useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  Image,
  Text,
  View,
  VStack,
  Center,
} from "native-base";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectAuth, setAuthData } from "../../store/slices/auth.slice";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useAppDispatch();

  const { data } = useAppSelector(selectAuth);

  useEffect(() => {
    console.log("data nya", data);
  }, [data]);

  const onSubmitHandler = () => {
    // console.log(email);
    // console.log(password);
    const payload = {
      email,
      password,
    };
    fetch(`https://devapi.thefavored-one.com/member/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          const { message, result } = jsonRes;
          if (res.status !== 200) {
            setIsError(true);
            setMessage(message);
          } else {
            setIsError(false);
            setMessage(message);
            console.log(jsonRes);
            dispatch(setAuthData(result));
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMessage = () => {
    return message;
  };
  return (
    <VStack h={"100%"} w={"100%"} alignItems={"center"} justifyContent="center">
      <Box
        // alignSelf={"center"}
        paddingX="12"
        paddingY="8"
        maxW="90%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
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
        {/* <Box style={{ marginTop: "50%" }}> */}
        {/* <Box marginX={"auto"}> */}
        <VStack space={4}>
          <Image
            alignSelf={"center"}
            source={{
              uri: "data:image/png;base64,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",
            }}
            alt="logo"
            size="sm"
          />

          <Text
            alignSelf={"center"}
            style={{ fontWeight: "bold", fontSize: 20, marginBottom: 1 }}
          >
            THEFAVORED-ONE
          </Text>
          <HStack>
            <Text
              style={{
                width: "100%",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
              }}
            ></Text>
          </HStack>
          <HStack>
            <Input
              w={"100%"}
              variant="rounded"
              placeholder="Username"
              //defaultValue="0000000000"
              onChangeText={setEmail}
            />
          </HStack>
          <HStack>
            <Input
              //defaultValue="123456"
              w={"100%"}
              variant="rounded"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </HStack>
          <HStack>
            <Text style={{ color: isError ? "red" : "green" }}>
              {message ? getMessage() : null}
            </Text>
          </HStack>
          <HStack>
            <Button
              leftIcon={<Icon name="sign-in" size={20}></Icon>}
              w={"100%"}
              onPress={onSubmitHandler}
              style={{ borderRadius: 75, flex: 1 }}
            >
              Sign
            </Button>
          </HStack>
          <HStack>
            <Text
              style={{
                width: "100%",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
              }}
            ></Text>
          </HStack>
          <HStack marginX={"auto"}>
            <Button variant={"link"}>Forgot Password?</Button>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Login;
