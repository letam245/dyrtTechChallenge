import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Text, Image} from '@rneui/themed';
import { colors, deviceWidthRatio } from 'utils/theme';
import { useNavigation } from '@react-navigation/native';
import { DetailScreenNavigationProp } from 'types/navigation';
import { PLACEHOLDER_PHOTO } from 'utils/constant';

const CampgroundCard: React.FC<CampGroundCardProp> = ({
  id,
  name,
  photoUrl,
  distance_mi,
  region_name,
  full_width,
}) => {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CampgroundDetails', {
          name: name,
          campgroundId: id,
        })
      }>
      <View
        style={{
          ...styles.card,
          ...{width: full_width ? deviceWidthRatio(1) : deviceWidthRatio(0.85)},
        }}>
        <Image
          source={{
            uri: photoUrl
              ? photoUrl
              : PLACEHOLDER_PHOTO,
          }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {name}
          </Text>
          {distance_mi && <Text>{distance_mi} miles away</Text>}
          {region_name && <Text>{region_name}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: deviceWidthRatio(0.5),
  },
  textContainer: {
    justifyContent: 'center',
    padding: 12,
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: colors.dirtOrange,
    marginBottom: 4,
  },
});

export default CampgroundCard;
