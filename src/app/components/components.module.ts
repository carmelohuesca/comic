import { AccountModule } from './account/account.module';
import { HeaderModule } from './header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoryboardModule } from './storyboard/storyboard.module';
import { WardrobeModule } from './wardrobe/wardrobe.module';

const COMPONENT_MODULES = [
  AccountModule,
  HeaderModule,
  StoryboardModule,
  WardrobeModule
];
@NgModule({
  imports: [
    CommonModule,
    ...COMPONENT_MODULES
  ],
  exports: [
    ...COMPONENT_MODULES
  ],
  declarations: [
  ]
})
export class ComponentsModule { }
