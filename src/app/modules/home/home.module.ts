import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { CoreModule } from './../../core/core.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { AccountService } from '../../common/account.service';

const HOME_COMPONENTS = [
  HomeComponent
];

@NgModule({
  imports: [
    CoreModule,
    ComponentsModule,
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    AccountService
  ],
  declarations: [
    ...HOME_COMPONENTS
  ]
})
export class HomeModule { }
