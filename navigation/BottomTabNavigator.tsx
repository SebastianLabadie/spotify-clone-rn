/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons,Entypo,EvilIcons,MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import Premium from '../screens/PremiumScreen';
import SearchScreen from '../screens/SearchScreen';
import YourLibrary from '../screens/YourLibraryScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreenavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} style={{ marginBottom: -3 }}  color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search"  size={30} style={{ marginBottom: -3 }}  color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={YouLibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="library-shelves"  size={30} style={{ marginBottom: -3 }}  color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={PremiumNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="spotify"  size={30} style={{ marginBottom: -3 }}  color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator();

function HomeScreenavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home', headerTitleAlign:'center' }}
      />

      <HomeScreenStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Album', headerTitleAlign:'center' }}
      />
    </HomeScreenStack.Navigator>
  );
}

const SearchScreenStack = createStackNavigator();

function SearchScreenNavigator() {
  return (
    <SearchScreenStack.Navigator>
      <SearchScreenStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: 'Search', headerTitleAlign:'center' }}
      />
    </SearchScreenStack.Navigator>
  );
}

const YourLibraryStack = createStackNavigator();

function YouLibraryNavigator() {
  return (
    <YourLibraryStack.Navigator>
      <YourLibraryStack.Screen
        name="Your Library"
        component={YourLibrary}
        options={{ headerTitle: 'Your Library', headerTitleAlign:'center' }}
      />
    </YourLibraryStack.Navigator>
  );
}


const PremiumStack = createStackNavigator();

function PremiumNavigator() {
  return (
    <PremiumStack.Navigator>
      <PremiumStack.Screen
        name="Premium"
        component={Premium}
        options={{ headerTitle: 'Premium', headerTitleAlign:'center' }}

      />
    </PremiumStack.Navigator>
  );
}
