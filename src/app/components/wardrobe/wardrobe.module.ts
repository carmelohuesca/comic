import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WardrobeComponent } from './wardrobe.component';

const WARDROBE_COMPONENTS = [
  WardrobeComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...WARDROBE_COMPONENTS
  ], exports: [
    ...WARDROBE_COMPONENTS
  ]
})
export class WardrobeModule { }
