import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TextInput} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {SearchScreenNavigationProp} from '../../types/navigation';
import CampgroundCard, {CardProps} from '../../components/ui/CampgroundCard';

const SearchScreen = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const [campgrounds, setCampgrounds] = useState<AutocompleteCampground[]>();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchForCamp = async (
    query: string,
  ): Promise<AutocompleteCampground[]> => {
    try {
      const {data} = await axios.get<AutocompleteCampground[]>(
        `https://staging.thedyrt.com/api/v6/autocomplete/campgrounds?q=${encodeURIComponent(
          query,
        )}`,
      );
      setCampgrounds(data);
      return data;
    } catch (error) {
      console.error('Error fetching campgrounds:', error);
      throw error;
    } finally {
    }
  };

  const handleSearch = () => {
    searchForCamp(searchQuery.trim().toLowerCase());
  };

  const renderItem = ({item}: {item: CardProps}) => {
    return (
      <CampgroundCard
        name={item.name}
        photoUrl={item.photoUrl}
        region_name={item.region_name}
        id={item.id}
        navigation={navigation}
        full_width
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Search for a campground..."
        onEndEditing={() => handleSearch()}
        style={styles.searchBarContainer}
      />
      <FlatList
        data={campgrounds}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginVertical: 16,
  },
});

export default SearchScreen;
