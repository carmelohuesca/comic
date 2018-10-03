import { Format } from '../../common/format/Format';

export interface GarmentInterface {
  id: string;
  color: string;
  itsMine: boolean;
  picture: string;
  pictures: string[];
}
export class Garment implements GarmentInterface {
  itsMine: boolean;
  id: string;
  color: string;
  picture: string;
  pictures: string[];

  constructor(id?: string, color?: string) {
    this.id = id || '31037017';
    this.color = color || '94';
    this.itsMine = false;
    this.pictures = [];
    this.addPicture();
    this.picture = this.getPicture();
  }

  getPicture() {
    const picturePattern = 'assets/img/fotos/{0}_{1}.jpg';
    return Format.interpolate(picturePattern, this.id, this.color);
  }

  addPicture() {
    this.pictures.push(this.getPicture());
  }

}

export interface OutfitInterface {
  name: string;
  garments: GarmentInterface[];
}

export class Outfit implements OutfitInterface {
  name: string;
  garments: GarmentInterface[];

  constructor(name: string) {
    this.name = name;
    this.garments = [];
  }

}
