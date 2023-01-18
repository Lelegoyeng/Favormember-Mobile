import { Button, Center, HStack, Text, View } from "native-base";
import React from "react";
import BottomNav from "../../components/BottomNav";
import { useAppDispatch } from "../../store";
import { setAuthData } from "../../store/slices/auth.slice";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(setAuthData(null));
  };

  return (
    <HStack space={3} justifyContent="center" padding="1/2">
      <Button onPress={logout} rounded="full" size={40}>
        Logout
      </Button>
    </HStack>
  );
};

export default Dashboard;
