import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import {RFValue} from 'react-native-responsive-fontsize';
import HomeStackNavigator from './HomeStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import { colors } from 'utils/theme';
import { BottomTabParamList } from 'types/navigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = 'home';
    switch (route.name) {
      case 'HomeStack':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'SearchStack':
        iconName = focused ? 'card-search' : 'card-search-outline';
        break;
      default:
        iconName = focused ? 'home' : 'home-outline';
        break;
    }
    return (
      <Icon
        name={iconName}
        type="material-community"
        size={size}
        color={color}
      />
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.dirtOrange,
        tabBarLabelStyle: {fontSize: RFValue(10)},
        tabBarIcon: ({focused, color, size}) =>
          renderTabIcon(route, focused, color, size),
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: 'Search',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
