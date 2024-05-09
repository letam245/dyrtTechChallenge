import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, StyleSheet } from 'react-native';
import CampgroundScreen from 'screens/CampgroundScreen';
import HomeScreen from 'screens/HomeScreen';
import { HomeStackNavigatorParamList } from 'types/navigation';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <ImageBackground
              source={require('assets/the_dirt_logo.png')}
              style={styles.dirtLogo}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="CampgroundDetails"
        component={CampgroundScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </HomeStack.Navigator>
  );
};
const styles = StyleSheet.create({
  dirtLogo: {
    width: 36,
    aspectRatio: 1,
  },
});

export default HomeStackNavigator;
