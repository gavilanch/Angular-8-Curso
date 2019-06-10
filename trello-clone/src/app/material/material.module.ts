import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
 declarations: [],
 imports: [
   CommonModule
 ],
 exports: [
   DragDropModule,
   MatMenuModule,
   MatToolbarModule,
   MatButtonModule,
   MatIconModule,
   MatFormFieldModule,
   MatInputModule,
   MatDialogModule,
   BrowserAnimationsModule
 ]
})
export class MaterialModule { }