import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from './grid-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { EJAngular2Module } from 'ej-angular2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@NgModule({
  declarations: [GridViewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    EJAngular2Module.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TreeGridAllModule,
    ToolbarModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [GridViewComponent],
})
export class GridViewModule {}
