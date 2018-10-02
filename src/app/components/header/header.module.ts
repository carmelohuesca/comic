import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CoreModule } from '../../core/core.module';

const HEADER_COMPONENTS = [
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    ...HEADER_COMPONENTS
  ],
  exports: [
    ...HEADER_COMPONENTS
  ]
})
export class HeaderModule { }
