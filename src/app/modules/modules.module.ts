import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { MyWardrobeModule } from './my-wardrobe/my-wardrobe.module';

const MODULES_MODULES = [
  LandingModule,
  HomeModule,
  MyWardrobeModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES_MODULES
  ],
  declarations: [],
  exports: [
    ...MODULES_MODULES
  ]
})
export class ModulesModule { }
