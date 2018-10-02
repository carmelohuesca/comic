import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { SizeService } from './size.service';
import { AccountComponent } from './account.component';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../../common/account.service';

const ACCOUNT_COMPONENTS = [
  AccountComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [
    AccountService,
    SizeService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  declarations: [
    ...ACCOUNT_COMPONENTS
  ],
  exports: [
    ...ACCOUNT_COMPONENTS
  ]
})
export class AccountModule { }
