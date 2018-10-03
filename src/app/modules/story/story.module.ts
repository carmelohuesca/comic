import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { ComponentsModule } from '../../components/components.module';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';

const STORY_COMPONENTS = [
  StoryComponent
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    CoreModule,
    StoryRoutingModule
  ],
  declarations: [
    ...STORY_COMPONENTS
  ]
})
export class StoryModule { }
