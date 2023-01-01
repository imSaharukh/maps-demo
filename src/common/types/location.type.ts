export type GeoLocation = {
  type: {
    type: string;
    enum: ['Point'];
    required: true;
  };
  coordinates: {
    type: [number];
    required: true;
  };
};
