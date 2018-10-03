import { NgModule } from '@angular/core';
import { StoryComponent } from './story.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'story', component: StoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }
