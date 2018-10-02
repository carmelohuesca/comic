import { AccountModule } from './account/account.module';
import { HeaderModule } from './header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoryboardModule } from './storyboard/storyboard.module';

const COMPONENT_MODULES = [
  AccountModule,
  HeaderModule,
  StoryboardModule
];

@NgModule({
  imports: [
    CommonModule,
    ...COMPONENT_MODULES
  ],
  exports: [
    ...COMPONENT_MODULES
  ]
})
export class ComponentsModule { }
