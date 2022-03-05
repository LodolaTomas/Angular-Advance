import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent {

  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() valorSalida: EventEmitter<number>= new EventEmitter();

  get getProgress() {
    return `${this.progress}%`;
  }

  cambiarValor(valor: number) {
    if (this.progress >= 100 && valor > 0) {
      this.valorSalida.emit(100);
      return this.progress = 100;
    }
    if (this.progress <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progress = 0;
    }
    this.valorSalida.emit(this.progress + valor);
    return this.progress = this.progress + valor;
  }
  onChange(nuevoValor: number) {
    if(nuevoValor >= 100) {
      this.progress = 100;
    } else if(nuevoValor <= 0) {
      this.progress = 0;
    } else {
      this.progress = nuevoValor;
    }
    this.valorSalida.emit(this.progress);
  }

}
