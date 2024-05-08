import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {Text, Image} from '@rneui/themed';
import { Campground, CampDetail } from 'types/campground';
import { colors, deviceWidthRatio } from 'utils/theme';
import { useLoader } from 'hooks/useLoader';
import { DetailsScreenRouteProp } from 'types/navigation';

const CampgroundScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const [campDetail, setCampDetail] = useState<Campground>();
  const {setIsLoading} = useLoader();

  useEffect(() => {
    fetchCampgroundDetail(route.params.campgroundId);
  }, []);

  const fetchCampgroundDetail = async (
    campground_id: number,
  ): Promise<void> => {
    try {
      setIsLoading(true);
      const {data} = await axios.get<CampDetail>(
        `https://thedyrt.com/api/v6/campgrounds/${campground_id}`,
      );
      setCampDetail( data.data);
    } catch (error) {
      console.error('Error fetching campgrounds:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {campDetail ? (
        <>
          <Image
            source={{
              uri: campDetail.attributes['photo-url']
                ? campDetail.attributes['photo-url']
                : 'https://placehold.co/600x400/orange/white',
            }}
            childrenContainerStyle={styles.photo}
            PlaceholderContent={<ActivityIndicator />}
            placeholderStyle={styles.photo}
          />

          <View style={styles.content}>
            <Text h3 style={styles.name}>
              {campDetail.attributes.name}
            </Text>
            <Text>Location: {campDetail.attributes.address}</Text>
            <Text>
              Description:{' '}
              {campDetail.attributes.description
                ? campDetail.attributes.description
                : 'N/A'}
            </Text>
          </View>
        </>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    width: '100%',
    height: deviceWidthRatio(0.6),
  },
  content: {
    margin: 20,
  },
  name: {
    color: colors.dirtGreen,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default CampgroundScreen;

