import { Component, OnInit, OnChanges, SimpleChange, OnDestroy } from '@angular/core';
import { Account } from '../../common/Account';
import { AccountService } from '../../common/account.service';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mng-home-view',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  expanded: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
