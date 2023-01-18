import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Logout } from "../../store/slices/auth.slice";
import Icons from "react-native-vector-icons/FontAwesome";
import Card from "../../components/Card";
import { RefreshControl } from "react-native";
import {
  GetDashboard,
  selectDashboard,
} from "../../store/slices/dashboard.slice";
import { useEffect } from "react";
import { formatCurrency } from "../../utils";

const Dashboard = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    dispatch(GetDashboard());

    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const dispatch = useAppDispatch();
  const { suspend, member }: any = useAppSelector(selectDashboard);

  useEffect(() => {
    console.log(member?.bonus);
  }, [suspend, member]);

  const logout = () => {
    dispatch(Logout());
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <VStack padding={6} space={5}>
        <Button onPress={logout}>logout</Button>
        <Card
          title="Total Bonus"
          icon="pie-chart"
          colorIcon={"green"}
          color="green.600"
          value={formatCurrency(member?.bonus?.total_bonus)}
        />
        <Card
          title="Bonus Terbayar"
          icon="pie-chart"
          colorIcon={"green"}
          color="green.600"
          value={formatCurrency(member?.bonus?.total_dibayar)}
        />
        <Card
          title="Bonus Pending"
          icon="pie-chart"
          colorIcon={"green"}
          color="green.600"
          value={formatCurrency(member?.bonus?.total_pending)}
        />
        <Card
          title="Expired Pairing"
          icon="pie-chart"
          colorIcon={"green"}
          color="green.600"
          value={member?.pairing?.tanggal_expired}
        />
      </VStack>
    </ScrollView>

    // <HStack space={3} justifyContent="center" padding="1/2">
    //   <Button onPress={logout} rounded="full" size={40}>
    //     Logout
    //   </Button>
    // </HStack>
  );
};

export default Dashboard;
