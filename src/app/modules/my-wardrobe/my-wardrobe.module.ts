import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWardrobeRoutingModule } from './my-wardrobe-routing.module';
import { MyWardrobeComponent } from './my-wardrobe.component';
import { CoreModule } from '../../core/core.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ComponentsModule,
    MyWardrobeRoutingModule
  ],
  declarations: [MyWardrobeComponent]
})
export class MyWardrobeModule { }
