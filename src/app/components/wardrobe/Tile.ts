
export interface TileInterface {
  cols: number;
  rows: number;
  color: string;
  text: string;
  horizontal: boolean;
  outfits: any[];
  protected: boolean;
}
export class Tile implements TileInterface {
  protected: boolean;
  horizontal: boolean;
  outfits: any[];
  text: string;
  cols: number;
  rows: number;
  color: string;
  constructor(cols: number, rows: number) {
    this.cols = cols;
    this.rows = rows;
    this.color = 'white';
    this.horizontal = false;
    this.outfits = [];
    this.protected = false;
  }
}
