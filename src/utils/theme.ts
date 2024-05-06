import {Dimensions} from 'react-native';

export const colors = {
  success: '#4CD964',
  error: '#FF3B30',
  disabled: '#9E9E9E',
  dirthGray: '#3d3b3b',
  dirtOrange: '#E57150',
  dirtGreen: '#397C70',
  dirtYellow: '#FEF3E2',
  dirtPurple: '#920b66',
};

export const deviceWidthRatio = (ratio: number) => {
  return Dimensions.get('screen').width * ratio;
};

export const deviceHeightRatio = (ratio: number) => {
  return Dimensions.get('screen').height * ratio;
};
