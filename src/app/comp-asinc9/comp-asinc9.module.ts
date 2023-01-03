import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CalculadoraComponent
  ]
})
export class CompAsinc9Module { }
