import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GeoLocation } from 'src/common/types/location.type';

@Schema()
export class Place {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  location: GeoLocation;
}

export type PlaceDocument = HydratedDocument<Place>;
export const PlaceSchema = SchemaFactory.createForClass(Place);
