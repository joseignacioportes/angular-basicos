import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponenet } from './contador/contador.component';



@NgModule({
  declarations: [
    ContadorComponenet
  ],
  exports: [
    ContadorComponenet
  ],
  imports: [
    CommonModule
  ]
})
export class ContadorModule { }
