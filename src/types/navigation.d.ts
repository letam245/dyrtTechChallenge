import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigatorScreenParams<T> =
  import('@react-navigation/native').NavigatorScreenParams<T>;

type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList>;
};

type BottomTabParamList = {
  HomeStack: HomeStackNavigatorParamList;
  SearchStack: SearchStackNavigatorParamList;
};

type HomeStackNavigatorParamList = {
  Home: undefined;
  CampgroundDetails: {
    name: string;
    campgroundId: number;
  };
};

type SearchStackNavigatorParamList = {
  Search: undefined;
  CampgroundDetails: {
    name: string;
    campgroundId: number;
  };
};

type DetailScreenNavigationProp = StackNavigationProp<
  SearchStackNavigatorParamList,
  HomeStackNavigatorParamList
>;

type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'CampgroundDetails',
  SearchStackNavigatorParamList,
  'CampgroundDetails'
>;