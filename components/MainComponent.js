import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { View, Text, Linking } from 'react-native';
import { Icon, Image } from 'react-native-elements';

import Bookshelf from "./BookshelfComponent";
import Book from "./BookComponent";
import Home from "./HomeComponent";

// redux
import { connect } from 'react-redux';
import { fetchLeaders } from '../redux/ActionCreators';
const mapDispatchToProps = (dispatch) => ({
  fetchLeaders: () => dispatch(fetchLeaders())
});

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
      <HomeNavigator.Screen name="Home" component={Home}
      options={({ navigation }) => ({
        headerTitle:'Home',
        headerLeft:() => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
      })} />
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
      <BookshelfNavigator.Screen name="Bookshelf" component={Bookshelf}
      options={({ navigation }) => ({
        headerTitle: 'Bookshelf',
        headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
      })} />
      <BookshelfNavigator.Screen
        name="Book"
        component={Book}
        options={{ headerTitle: "Book Detail" }}
      />
    </BookshelfNavigator.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: '#ffcdd2', height: 80, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Image source={require('../shared/images/logo.png')} style={{ margin: 10, width: 80, height: 60, backgroundColor:'#fff' }} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ color: '#ffcdd2', fontSize: 22, fontWeight: 'bold' }}>TDK & Friends</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Help'
        icon={({ focused, color, size }) => <Icon name='help' size={size} color={focused ? '#7cc' : '#ccc'} />}
        onPress={() => Linking.openURL('https://reactnavigation.org/docs/getting-started')} />
    </DrawerContentScrollView>
  );
}

function MainNavigatorScreen() {
  const MainNavigator = createDrawerNavigator();
  return (
    <MainNavigator.Navigator initialRouteName="HomeScreen">
      <MainNavigator.Screen
        name="HomeScreen"
        component={HomeNavigatorScreen}
        options={{ title: "Home", headerShown: false,
        drawerIcon: ({ focused, size }) => (<Icon name='home' size={size} color={focused ? '#7cc' : '#ccc'} />)
       }}
      />
      <MainNavigator.Screen
        name="BookshelfScreen"
        component={BookshelfNavigatorScreen}
        options={{ 
          title: "Bookshelf", headerShown: false,
          drawerIcon: ({ focused, size }) => (<Icon name='home' size={size} color={focused ? '#7cc' : '#ccc'} />) 
        }}
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
export default connect(null, mapDispatchToProps)(Main);
