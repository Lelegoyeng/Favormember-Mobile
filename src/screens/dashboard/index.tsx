import { Button, Text, View } from "native-base";
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
    <View>
      <Button onPress={logout}></Button>
      {/* <BottomNav /> */}
    </View>
  );
};

export default Dashboard;
