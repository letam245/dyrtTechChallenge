import type {
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

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

// type HomeScreenNavigationProp = NativeStackNavigationProp<
//   HomeStackNavigatorParamList,
//   'CampgroundDetails'
// >;

type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, 'CampgroundDetails'>
>;

type SearchScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<SearchScreenNavigationProp, 'CampgroundDetails'>
>;

type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'CampgroundDetails'
>;
