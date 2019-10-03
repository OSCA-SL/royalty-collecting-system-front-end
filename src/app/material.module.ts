import {NgModule} from '@angular/core';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatDialogModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule ,
  MatSortModule,
  MatTabsModule,
  MatCheckboxModule,
  MatCard,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule
} from '@angular/material';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule ,
    MatSortModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule ,
    MatSortModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCard,
    MatCardModule,
    MatFormField,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
