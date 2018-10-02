import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tile, TileInterface } from './Tile';
import { AccountService } from '../../common/account.service';
import { Account } from '../../common/Account';

@Component({
  selector: 'mng-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.scss']
})
export class WardrobeComponent implements OnInit {

  tiles = [];
  sectionForm: FormGroup;
  account: Account | any;
  outfit: any;
  tile: Tile;

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.accountService.getAccount().subscribe(account => this.getAccount(account));
    this.sectionForm = this.fb.group({
      section: ['Sección ', Validators.required]
    });
  }

  getRandomColor() {
    const colors = [
      'White'
      // 'Black'
      // 'Red', 'Pink', 'Purple', 'Indigo', 'Blue', 'Cyan', 'Teal',
      // 'Green', 'Lime', 'Yellow', 'Amber', 'Orange', 'Brown', 'Grey'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }

  addTile(cols: number, rows: number) {
    const tile: TileInterface = new Tile(cols, rows);
    tile.text = this.sectionForm.controls.section.value;
    tile.color = this.getRandomColor();
    this.tiles.push(tile);
    this.saveToAccount();
  }

  removeTile() {
    this.tiles.pop();
    this.saveToAccount();
  }

  getAccount(account: Account | any) {
    this.account = account || new Account();
    this.tiles = account.wardrobe && account.wardrobe.tiles ? account.wardrobe.tiles : [];
  }

  saveToAccount() {
    this.account.wardrobe = { tiles: this.tiles };
    this.accountService.setAccount(this.account).subscribe(account => this.account = account);
  }

  toggle(tile: Tile) {
    if (tile.rows > 1) {
      tile.rows = 1;
      tile.cols = 1;
    } else {
      tile.rows = 3;
      tile.cols = 3;
    }
  }

  addItem(tile: Tile) {
    tile.outfits.push({ name: 'new tile' });
    this.saveToAccount();
  }

  removeItem(tile: Tile) {
    tile.outfits.pop();
    this.saveToAccount();
  }

  toggleType(tile: Tile) {
    tile.horizontal = !tile.horizontal;
  }

  selectOutfit(outfit: any) {
    this.outfit = outfit;
  }

  selectTile(tile: Tile) {
    this.tile = tile;
  }

}
