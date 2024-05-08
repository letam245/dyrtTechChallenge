import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from 'screens/SearchScreen';
import CampgroundScreen from 'screens/CampgroundScreen';
import { SearchStackNavigatorParamList } from 'types/navigation';

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
