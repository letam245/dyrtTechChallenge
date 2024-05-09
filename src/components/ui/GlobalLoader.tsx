import {useLoader} from 'hooks/useLoader';
import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {colors} from 'utils/theme';

const GlobalLoader: React.FC = () => {
  const {isLoading} = useLoader();

  return isLoading ? (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color={colors.dirtOrange} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GlobalLoader;
