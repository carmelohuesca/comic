import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyWardrobeComponent } from './my-wardrobe.component';

const routes: Routes = [{
  path: 'my-wardrobe',
  component: MyWardrobeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyWardrobeRoutingModule { }
