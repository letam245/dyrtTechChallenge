import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SearchStackNavigatorParamList } from 'types/navigation';
import SearchScreen from 'screens/SearchScreen';
import CampgroundScreen from 'screens/CampgroundScreen';

const SearchStack = createNativeStackNavigator<SearchStackNavigatorParamList>();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen
        name="CampgroundDetails"
        component={CampgroundScreen}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
