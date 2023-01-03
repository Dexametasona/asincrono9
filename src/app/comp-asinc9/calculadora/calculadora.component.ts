import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  valor1:number=0;
  valor2:number=0;  
  @ViewChild('select') selector!:ElementRef

  mostrar(){
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
