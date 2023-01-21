import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard, Login, Transaksi } from "../screens";
import { useAppSelector } from "../store";
import { selectAuth } from "../store/slices/auth.slice";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "native-base";
import BottomNav from "../components/BottomNav";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Transaksi = () => {
//   return <Text>Halaman Transaksi</Text>;
// };

const Report = () => {
  return <Text>Halaman Report</Text>;
};

const Informasi = () => {
  return <Text>Halaman Informasi</Text>;
};

const Account = () => {
  return <Text>Halaman Akun</Text>;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Transaksi"
        component={Transaksi}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Informasi"
        component={Informasi}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Akun"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  const { is_loggedin } = useAppSelector(selectAuth);

  return (
    <Stack.Navigator>
      {!is_loggedin ? (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="MainApp"
            component={TabNavigation}
            options={{ headerShown: false }}
          />

          {/* <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          ... */}
        </>
      )}
    </Stack.Navigator>
  );
};

export default Router;
