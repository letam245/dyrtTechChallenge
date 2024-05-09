interface AutocompleteCampground {
  id: number;
  name: string;
  region: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  photos_count: number;
  reviews_count: number;
  slug: string;
  videos_count: number;
  type: string;
  photoUrl: string;
  region_name?: string;
  distance_mi?: string;
}

type CampGroundCardProp = Pick<
  AutocompleteCampground,
  'id' | 'name' | 'photoUrl' | 'region_name' | 'distance_mi'
> & {
  full_width?: boolean;
};
