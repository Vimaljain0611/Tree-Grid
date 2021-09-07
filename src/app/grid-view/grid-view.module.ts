import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from './grid-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { EJAngular2Module } from 'ej-angular2';

@NgModule({
  declarations: [GridViewComponent],
  imports: [CommonModule,BrowserModule,EJAngular2Module.forRoot() ],
  exports: [GridViewComponent],
})
export class GridViewModule {

}
