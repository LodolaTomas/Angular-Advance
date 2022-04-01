import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent  implements OnDestroy {
  breadcrumbs: string = '';
  tituloSubs$: Subscription;

  constructor(private router: Router,private route:ActivatedRoute) {

    this.tituloSubs$ = this.getArgumentosRuta()
    .subscribe(({ titulo }) => {
      this.breadcrumbs = titulo;
      document.title = `AdminPro - ${titulo}`;
    });

  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events.pipe(
      filter(
        (event: any) =>
          event instanceof ActivationEnd &&
          event.snapshot.firstChild === null &&
          event.snapshot.data != null
      ),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
