import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* const promesa = new Promise((resolve, reject) => {

      if(true){
        resolve('Promesa iniciada');
      }else{
        reject('Promesa rechazada');
      }

    });

    promesa.then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => { console.log(error); });
    console.log('Fin del init'); */
    this.getUsuarios()
    .then( (usuarios) => console.log(usuarios));
  }

  getUsuarios(){
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json())
      .then( body => resolve(body.data));
    });
  }
}
