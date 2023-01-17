import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router";
import { NativeBaseProvider } from "native-base";
import { persistor, store } from "./src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
