import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WardrobeComponent } from './wardrobe.component';
import { CoreModule } from '../../core/core.module';

const WARDROBE_COMPONENTS = [
  WardrobeComponent
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    ...WARDROBE_COMPONENTS
  ], exports: [
    ...WARDROBE_COMPONENTS
  ]
})
export class WardrobeModule { }
