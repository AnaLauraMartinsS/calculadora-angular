import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  display: string ='';

  appendToDisplay(value: string){
    this.display += value;
  }

  limpaDisplay(){
    this.display = '';
  }

  calcular(){
    try{
      this.display = eval(this.display);
    }catch (erro){
      this.display = 'Erro';
    }
  }


}
