import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SHOES_SIZES } from '../account/sizes/foot-sizes.mock';
import { Account } from '../../common/Account';
import { Subscription } from 'rxjs/Subscription';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { AccountService } from '../../common/account.service';
import { PANT_SIZES } from '../account/sizes/pant-sizes.mock';
import { GARMENT_SIZES } from '../account/sizes/garment.sizes.mock';
import { Route, RouterLinkActive, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'story-board',
  templateUrl: './storyboard.component.html',
  styleUrls: ['./storyboard.component.scss']
})
export class StoryboardComponent implements OnInit, OnDestroy, OnChanges {

  accountForm: FormGroup;
  sizeForm: FormGroup;
  accountChangesSubscription: Subscription;
  accountSubscription: Subscription;
  sizeChangesSubscription: Subscription;

  shoeSizes = SHOES_SIZES;
  pantSizes = PANT_SIZES;
  garmentSizes = GARMENT_SIZES;

  @Input() account: Account;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private accountService: AccountService
  ) {
    this.account = this.accountService.account;
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.accountForm = this.fb.group({
      name: [this.accountService.account.name, Validators.required],
      email: [this.accountService.account.email, Validators.required]
    });

    this.sizeForm = this.fb.group({
      shoesSize: [this.accountService.account.shoesSize],
      pantsSize: [this.accountService.account.pantsSize],
      shirtSize: [this.accountService.account.shirtSize],
      coatSize: [this.accountService.account.coatSize]
    });
    this.accountSubscription = this.accountService.getAccount().subscribe(account => this.setAccount(account));
    this.accountChangesSubscription = this.accountForm.valueChanges.subscribe(account => this.updateAccount(account));
    this.sizeChangesSubscription = this.sizeForm.valueChanges.subscribe(account => this.updateAccount(account));
  }

  setAccount(account: Account) {
    this.accountService.account = account;
    this.account = this.accountService.account;
  }

  updateAccount(newAccount: Account) {
    console.log('updated!', newAccount);
    this.accountService.setAccount(newAccount).subscribe(account => this.setAccount(account));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.accountForm && changes.account && changes.account.currentValue) {
      this.account.name = changes.account.currentValue.name;
    }
  }

  toggleNews(news: boolean) {
    this.account.newsletter = !this.account.newsletter;
    this.updateAccount(this.account);
  }

  ngOnDestroy(): void {
    this.accountChangesSubscription.unsubscribe();
    this.accountSubscription.unsubscribe();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
