import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TDListComponent} from "./tdlist/tdlist.component";



@NgModule({
  declarations: [TDListComponent],
  exports: [
    TDListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyModuleModule { }
