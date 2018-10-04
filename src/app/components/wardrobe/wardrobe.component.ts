import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tile, TileInterface } from './Tile';
import { AccountService } from '../../common/account.service';
import { Account } from '../../common/Account';
import { Outfit } from '../outfit/Outfit';

@Component({
  selector: 'mng-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.scss']
})
export class WardrobeComponent implements OnInit {

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
    this.createTileForm();
  }

  createTileForm() {
    this.sectionForm = this.fb.group({
      section: [this.tile ? this.tile.name : '', Validators.required]
    });
  }

  addTile(cols: number, rows: number) {
    const tile: TileInterface = new Tile(cols, rows);
    tile.name = this.sectionForm.controls.section.value;
    tile.color = 'rgba(255,255,255,0.4)';
    this.account.wardrobe.tiles.push(tile);
    this.saveToAccount();
  }

  removeTile() {
    this.account.wardrobe.tiles.pop();
    this.saveToAccount();
  }

  getAccount(account: Account | any) {
    this.account = account || new Account();
  }

  saveToAccount() {
    this.account.wardrobe = { tiles: this.account.wardrobe.tiles };
    this.accountService.setAccount(this.account).subscribe(account => this.account = account);
  }

  toggle(tile: Tile) {
    if (tile.rows > 1) {
      tile.rows = 1;
      tile.cols = 1;
    } else {
      tile.rows = 2;
      tile.cols = 2;
    }
  }

  addItem(tile: Tile) {
    tile.outfits.push(new Outfit('new outfit'));
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
