import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Bookshelf from "./BookshelfComponent";
import Book from "./BookComponent";
import Home from "./HomeComponent";
import CarList from "./CarListComponent";
import CarItem from "./CarItemComponent";

function CarListNavigatorScreen() {
  const CarListNavigator = createStackNavigator();
  return (
    <CarListNavigator.Navigator
      initialRouteName="CarList"
      screenOptions={{
        headerStyle: { backgroundColor: "#ffcdd2" },
        headerTintColor: "#000",
        headerTitleStyle: { color: "#000" },
      }}
    >
      <CarListNavigator.Screen name="CarList" component={CarList} />
      <CarListNavigator.Screen
        name="CarItem"
        component={CarItem}
        options={{ headerTitle: "Car Detail" }}
      />
    </CarListNavigator.Navigator>
  );
}

function HomeNavigatorScreen() {
  const HomeNavigator = createStackNavigator();
  return (
    <HomeNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#ffcdd2" },
        headerTintColor: "#000",
        headerTitleStyle: { color: "#000" },
      }}
    >
      <HomeNavigator.Screen name="Home" component={Home} />
    </HomeNavigator.Navigator>
  );
}

function BookshelfNavigatorScreen() {
  const BookshelfNavigator = createStackNavigator();
  return (
    <BookshelfNavigator.Navigator
      initialRouteName="Bookshelf"
      screenOptions={{
        headerStyle: { backgroundColor: "#ffcdd2" },
        headerTintColor: "#000",
        headerTitleStyle: { color: "#000" },
      }}
    >
      <BookshelfNavigator.Screen name="Bookshelf" component={Bookshelf} />
      <BookshelfNavigator.Screen
        name="Book"
        component={Book}
        options={{ headerTitle: "Book Detail" }}
      />
    </BookshelfNavigator.Navigator>
  );
}

function MainNavigatorScreen() {
  const MainNavigator = createDrawerNavigator();
  return (
    <MainNavigator.Navigator initialRouteName="HomeScreen">
      <MainNavigator.Screen
        name="HomeScreen"
        component={HomeNavigatorScreen}
        options={{ title: "Home", headerShown: false }}
      />
      <MainNavigator.Screen
        name="BookshelfScreen"
        component={BookshelfNavigatorScreen}
        options={{ title: "Bookshelf", headerShown: false }}
      />
      <MainNavigator.Screen
        name="CarListScreen"
        component={CarListNavigatorScreen}
        options={{ title: "CarList", headerShown: false }}
      />
    </MainNavigator.Navigator>
  );
}

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}
export default Main;
