import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray } from 'class-validator';
import { HydratedDocument } from 'mongoose';

@Schema({ _id: false })
export class GeoJSON {
  @Prop({ required: true })
  @IsArray()
  coordinates: [number];

  @Prop({
    required: true,
    default: 'Point',
    enum: ['Point'],
  })
  type: string;
}
@Schema()
export class Place {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({
    index: true,
  })
  location: GeoJSON;
}

export type PlaceDocument = HydratedDocument<Place>;
export const PlaceSchema = SchemaFactory.createForClass(Place);

PlaceSchema.index({ location: '2dsphere' });
