import { Component, OnInit, OnDestroy, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SizeService } from './size.service';
import { Account } from '../../common/Account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { AccountService } from '../../common/account.service';
@Component({
  selector: 'mng-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnChanges, OnDestroy {

  id: string;
  name: string;
  mail: string;
  genre: boolean;
  show = false;
  footSizes = [];
  pantSizes = [];
  garmentSizes = [];
  accountForm: FormGroup;
  subscriptionFootSizes: Subscription;
  subscriptionPantSizes: Subscription;
  subscriptionGarmentSizes: Subscription;
  subscriptionForm: Subscription;
  accountSubscription: Subscription;
  subscriptionUpdateForm: Subscription;

  account: Account;

  constructor(
    private accountService: AccountService,
    private sizeService: SizeService,
    private fb: FormBuilder) {
    this.account = this.accountService.account;
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.subscribe();
  }

  subscribe() {
    this.subscriptionFootSizes = this.sizeService.getFootSizes().subscribe(footSizes => this.footSizes = footSizes);
    this.subscriptionPantSizes = this.sizeService.getPantSizes().subscribe(pantSizes => this.pantSizes = pantSizes);
    this.subscriptionGarmentSizes = this.sizeService.getGarmentSizes().subscribe(garmentSizes => this.garmentSizes = garmentSizes);
    this.accountSubscription = this.accountService.getAccount().subscribe(account => this.createForm(account));
    setInterval(() => this.accountSubscription = this.accountService.getAccount().subscribe(account => this.createForm(account)), 500);
  }

  createForm(account: Account) {
    this.accountService.account = account;
    this.account = this.accountService.account;
    this.accountForm = this.fb.group({
      name: [this.account.name, Validators.required],
      email: [this.account.email, Validators.required],
      birthDate: [this.account.birthDate],
      newsletter: [this.account.newsletter],
      shoesSize: [this.account.shoesSize],
      pantsSize: [this.account.pantsSize],
      shirtSize: [this.account.shirtSize],
      coatSize: [this.account.coatSize],
    });
    this.subscriptionForm = this.accountForm.valueChanges
      .subscribe(newAccount => this.updateAccount(newAccount));

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  toggle() {
    this.show = !this.show;
  }

  updateAccount(newAccount: Account | any) {
    this.subscriptionUpdateForm = this.accountService.setAccount(newAccount)
      .subscribe(account => this.account = account);
  }

  ngOnDestroy(): void {
    this.subscriptionFootSizes.unsubscribe();
    this.subscriptionPantSizes.unsubscribe();
    this.subscriptionGarmentSizes.unsubscribe();
    this.subscriptionForm.unsubscribe();
    this.accountSubscription.unsubscribe();
  }
}
