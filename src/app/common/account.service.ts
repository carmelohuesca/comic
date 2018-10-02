import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Account } from './Account';

@Injectable()
export class AccountService {

  _account: Account;

  get account(): Account {
    this._account = JSON.parse(localStorage.getItem('account')) || new Account();
    return this._account;
  }

  set account(account: Account) {
    this._account = Object.assign(this.account, account);
    localStorage.setItem('account', JSON.stringify(this._account));
  }

  constructor() { }

  getAccount(): Observable<Account> {
    return of(this.account);
  }

  setAccount(account: Account): Observable<Account> {
    this.saveAccountToService(account).subscribe(result => console.log('saved to service', result));
    this.account = account;
    return of(this.account);
  }

  saveAccountToService(account: Account) {
    return of(account);
  }


}
