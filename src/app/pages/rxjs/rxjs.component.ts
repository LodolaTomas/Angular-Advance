import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, retry, take,map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent implements OnDestroy {
  destroySuscription:Subscription;
  constructor() {
    /* this.retornaObsrebable()
    .pipe(
      retry(2)
    )
    .subscribe({
      next: valor => console.log('next: ', valor),
      error: error => console.log('error: ', error),
      complete: () => console.log('complete'),
    }); */
    this.destroySuscription=this.retornaIntervalo()
    .subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.destroySuscription.unsubscribe()
  }

  retornaIntervalo(): Observable<number> {
    return interval(1000).pipe(
      /* take(4), */
      map(valor => valor +1),
      filter(valor => (valor % 2 === 0) ? true : false)
    );
  }
  retornaObsrebable(): Observable<number> {
    let contador = -1;

    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        contador++;
        observer.next(contador);
        if (contador === 4) {
          clearInterval(interval);
          observer.complete();
        }
        if (contador === 2) {
          observer.error('Auxilio');
        }
      }, 1000);
    });
  }
}
