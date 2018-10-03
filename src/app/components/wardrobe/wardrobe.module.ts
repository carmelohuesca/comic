import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WardrobeComponent } from './wardrobe.component';
import { CoreModule } from '../../core/core.module';
import { OutfitModule } from '../outfit/outfit.module';

const WARDROBE_COMPONENTS = [
  WardrobeComponent
];

@NgModule({
  imports: [
    CommonModule,
    OutfitModule,
    CoreModule
  ],
  declarations: [
    ...WARDROBE_COMPONENTS
  ], exports: [
    ...WARDROBE_COMPONENTS
  ]
})
export class WardrobeModule { }
