import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, Image, FlatList} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Text} from '@rneui/themed';
import {RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios';
import CampgroundCard from 'components/ui/CampgroundCard';
import { showLocationAccessAlert } from 'utils/methods';
import { colors, deviceWidthRatio } from 'utils/theme';
import { useLoader } from 'hooks/useLoader';

const HomeScreen: React.FC = () => {
  const {setIsLoading} = useLoader();
  const campNumber = 10;
  const [campgrounds, setCampgrounds] = useState<CampGroundCardProp[]>();

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = () => {
    Geolocation.requestAuthorization(
      () => {
        handleDisplayNearbyLocations();
      },
      error => {
        console.error('denie', error);
        showLocationAccessAlert();
      },
    );
  };

  const handleDisplayNearbyLocations = () => {
    Geolocation.getCurrentPosition(
      async position => {
        const {latitude, longitude} = position.coords;
        if (latitude && longitude) {
          try {
            const response = await fetchCampgrounds(latitude, longitude);
            if (response && response.length) {
              const filterCampgrounds = response
                .filter(camp => camp.photoUrl)
                .slice(0, campNumber);

              const result = filterCampgrounds.map(camp => ({
                name: camp.name,
                photoUrl: camp.photoUrl,
                distance_mi: camp.distance_mi,
                id: camp.id,
              }));
              setCampgrounds(result);
            }
          } catch (error) {
            console.error('Error fetching campgrounds:', error);
          }
        }
      },
      error => {
        console.error(error);
      },
    );
  };

  const fetchCampgrounds = async (
    lat: number,
    lon: number,
  ): Promise<AutocompleteCampground[]> => {
    try {
      setIsLoading(true);
      const response = await axios.get<AutocompleteCampground[]>(
        `https://staging.thedyrt.com/api/v6/autocomplete/campgrounds?lat=${lat}&lon=${lon}`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching campgrounds:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = ({item}: {item: CampGroundCardProp}) => {
    return (
      <CampgroundCard
        name={item.name}
        photoUrl={item.photoUrl}
        distance_mi={item.distance_mi}
        id={item.id}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text h2 style={styles.header}>
          Welcome to the Dirt
        </Text>
        <Image
          source={require('assets/the_dirt_home.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Show Nearby Locations</Text>
        <FlatList
          data={campgrounds}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.dirtYellow,
    padding: 30,
  },
  header: {
    color: colors.dirtGreen,
    fontWeight: 'bold',
    flex: 1,
  },
  logo: {
    width: deviceWidthRatio(0.3),
    height: deviceWidthRatio(0.3),
    aspectRatio: 1,
  },
  contentContainer: {
    marginVertical: 30,
    marginLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: RFValue(16),
    marginBottom: 16,
  },
});

export default HomeScreen;
