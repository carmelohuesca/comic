import { SHOES_SIZES } from './sizes/foot-sizes.mock';
import { PANT_SIZES } from './sizes/pant-sizes.mock';
import { GARMENT_SIZES } from './sizes/garment.sizes.mock';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable() export class SizeService {

  getFootSizes() {
    return of(SHOES_SIZES);
  }

  getPantSizes() {
    return of(PANT_SIZES);
  }

  getGarmentSizes() {
    return of(GARMENT_SIZES);
  }

}
