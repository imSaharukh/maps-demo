import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Place, PlaceDocument } from './entities/place.entity';
import { Model } from 'mongoose';

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel(Place.name) private placeModel: Model<PlaceDocument>,
  ) {}
  create(createPlaceDto: CreatePlaceDto) {
    return this.placeModel.create(createPlaceDto);
  }

  findAll(name?: string, lan?: string, lon?: string) {
    console.log(name, lan, lon);

    return this.placeModel.find({
      name: name ? { $regex: name, $options: 'i' } : { $exists: true },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lan), parseFloat(lon)],
          },
          $maxDistance: 1000,
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} place`;
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return `This action updates a #${id} place`;
  }

  remove(id: number) {
    return `This action removes a #${id} place`;
  }
}
