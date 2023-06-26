import { Injectable } from "@nestjs/common";
import { Place } from './place.model';

@Injectable()
export class PlacesService {
    places: Place[] = [];

    insertPlace(place: number) {}
}