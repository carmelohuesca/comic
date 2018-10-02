import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryboardComponent } from './storyboard.component';
import { CoreModule } from 'app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../../common/account.service';

const STORYBOARD_COMPONENTS = [
  StoryboardComponent
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountService
  ],
  declarations: [
    ...STORYBOARD_COMPONENTS
  ],
  exports: [
    ...STORYBOARD_COMPONENTS
  ]
})
export class StoryboardModule { }
