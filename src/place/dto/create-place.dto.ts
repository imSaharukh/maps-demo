import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, Validate } from 'class-validator';
import { GeoJSON } from '../entities/place.entity';

export class CreatePlaceDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty({
    default: {
      coordinates: [0, 0],
      type: 'Point',
    },
    type: GeoJSON,
    required: true,
  })
  @Type(() => GeoJSON)
  @Validate(GeoJSON)
  location: GeoJSON;
}
