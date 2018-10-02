import * as Materials from '@angular/material';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReactiveFormsModule } from '@angular/forms';

const NATIVE_MODULES = [
  FlexLayoutModule,
  MatMomentDateModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  // NoopAnimationsModule,
  Materials.MatExpansionModule,
  Materials.MatAutocompleteModule,
  Materials.MatButtonModule,
  Materials.MatButtonToggleModule,
  Materials.MatCardModule,
  Materials.MatCheckboxModule,
  Materials.MatChipsModule,
  Materials.MatCommonModule,
  Materials.MatDatepickerModule,
  Materials.MatDialogModule,
  Materials.MatGridListModule,
  Materials.MatIconModule,
  Materials.MatInputModule,
  Materials.MatLineModule,
  Materials.MatListModule,
  Materials.MatMenuModule,
  Materials.MatNativeDateModule,
  Materials.MatPaginatorModule,
  Materials.MatProgressBarModule,
  Materials.MatProgressSpinnerModule,
  Materials.MatRadioModule,
  Materials.MatSelectModule,
  Materials.MatSidenavModule,
  Materials.MatSlideToggleModule,
  Materials.MatSliderModule,
  Materials.MatSnackBarModule,
  Materials.MatSortModule,
  Materials.MatStepperModule,
  Materials.MatTableModule,
  Materials.MatTabsModule,
  Materials.MatToolbarModule,
  Materials.MatTooltipModule
];


@NgModule({
  imports: [
    CommonModule,
    ...NATIVE_MODULES
  ],
  providers: [
    Materials.MatIconRegistry
  ],
  exports: [
    ...NATIVE_MODULES
  ],
  declarations: []
})
export class CoreModule {
  constructor(private matIconRegistry: Materials.MatIconRegistry) {
    matIconRegistry.setDefaultFontSetClass('material-design-icons');
    matIconRegistry.registerFontClassAlias('material-design-icons');
  }
}
