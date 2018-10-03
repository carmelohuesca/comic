import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../../common/account.service';
import { Account } from '../../common/Account';
import { Garment, OutfitInterface } from './Outfit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OUTFIT_MOCKS } from './outfit.mocks';

@Component({
  selector: 'mng-outfit',
  templateUrl: './outfit.component.html',
  styleUrls: ['./outfit.component.scss']
})
export class OutfitComponent implements OnInit {

  @Input() outfit: OutfitInterface;
  account: Account;
  outfitForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.init();
  }

  init() {
    this.accountService.getAccount().subscribe(account => this.getAccount(account));
  }

  createOutfitForm() {
    this.outfitForm = this.fb.group({
      name: [this.outfit.name, Validators.required]
    });
  }

  getAccount(account: Account) {
    this.account = account || new Account();
    this.createOutfitForm();
  }

  saveToAccount() {
    this.accountService.setAccount(this.account)
      .subscribe(account => this.account = account);
  }

  addGarment() {
    this.outfit.garments.push(this.random());
  }

  removeGarment(index?: number) {
    if (index) {
      this.outfit.garments.splice(index, 1);
    } else {
      this.outfit.garments.pop();
    }
  }

  random() {
    const randomGarment = OUTFIT_MOCKS[Math.floor(Math.random() * OUTFIT_MOCKS.length)];
    return new Garment(randomGarment.id, randomGarment.color);
  }

  changeGarment(index: number) {
    this.outfit.garments[index] = this.random();
  }

  toggleMine(index: number) {
    this.outfit.garments[index].itsMine = !this.outfit.garments[index].itsMine;
  }

}
