import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutfitComponent } from './outfit.component';
import { CoreModule } from 'app/core/core.module';

const OUTFIT_COMPONENTS = [
  OutfitComponent
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule
  ],
  declarations: [
    ...OUTFIT_COMPONENTS
  ],
  exports: [
    ...OUTFIT_COMPONENTS
  ]
})
export class OutfitModule { }
