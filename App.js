import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { navigationRef } from "./app/Navigation/rootNavigation";
import navigationTheme from "./app/Navigation/navigationTheme";
import AppNavigator from "./app/Navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
